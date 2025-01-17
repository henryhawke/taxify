import { TaxableEvent, TaxSummary, WalletTaxInfo } from '@/types/tax'
import { Connection, PublicKey, VersionedTransactionResponse } from '@solana/web3.js'

export async function fetchWalletTransactions(walletAddress: string, connection: Connection, year: number) {
    try {
        const pubKey = new PublicKey(walletAddress)
        const startTime = new Date(year, 0, 1).getTime() / 1000 // Start of year in seconds
        const endTime = new Date(year + 1, 0, 1).getTime() / 1000 // Start of next year in seconds

        const signatures = await connection.getSignaturesForAddress(
            pubKey,
            { limit: 1000 },
            'confirmed'
        )

        // Filter signatures by year
        const yearSignatures = signatures.filter(sig => {
            const timestamp = sig.blockTime || 0
            return timestamp >= startTime && timestamp < endTime
        })

        const transactions = await Promise.all(
            yearSignatures.map(async (sig) => {
                try {
                    return await connection.getTransaction(sig.signature, {
                        maxSupportedTransactionVersion: 0,
                    })
                } catch (error) {
                    console.error(`Error fetching transaction ${sig.signature}:`, error)
                    return null
                }
            })
        )
        return transactions.filter(tx => tx !== null)
    } catch (error) {
        console.error('Error fetching wallet transactions:', error)
        throw new Error('Failed to fetch wallet transactions. Please try again later.')
    }
}

export function calculateTaxSummary(events: TaxableEvent[]): TaxSummary {
    const now = Date.now()
    const oneYear = 365 * 24 * 60 * 60 * 1000 // milliseconds in a year

    const summary: TaxSummary = {
        shortTermGains: 0,
        longTermGains: 0,
        totalIncome: 0,
        totalFees: 0,
        taxableEvents: events,
        stateTax: 0,
        stateCode: '',
        effectiveStateTaxRate: 0
    }

    events.forEach(event => {
        // Add fees
        if (event.fee) {
            summary.totalFees += event.fee
        }

        // Calculate gains and income
        switch (event.type) {
            case 'sale':
            case 'nft_sale':
                const holdingPeriod = now - event.timestamp
                const gain = event.price * event.amount
                if (holdingPeriod > oneYear) {
                    summary.longTermGains += gain
                } else {
                    summary.shortTermGains += gain
                }
                break

            case 'staking_reward':
            case 'airdrop':
                summary.totalIncome += event.price * event.amount
                break
        }
    })

    return summary
}

function findRelevantBalanceChange(tx: VersionedTransactionResponse, walletIndex: number): number {
    if (!tx.meta) return 0

    const preBalance = tx.meta.preBalances[walletIndex] || 0
    const postBalance = tx.meta.postBalances[walletIndex] || 0
    return (postBalance - preBalance) / 1e9 // Convert lamports to SOL
}

export function categorizeTaxableEvents(transactions: VersionedTransactionResponse[]): TaxableEvent[] {
    const events: TaxableEvent[] = []

    transactions.forEach(tx => {
        if (!tx || !tx.meta) return

        try {
            const timestamp = tx.blockTime ? tx.blockTime * 1000 : Date.now()
            const fee = tx.meta.fee / 1e9 // Convert lamports to SOL

            // Find the index of the wallet in the accounts list
            const accountKeys = tx.transaction.message.getAccountKeys()
            const walletIndex = accountKeys.keySegments().findIndex((keys, index) => {
                return tx.meta?.preBalances[index] !== tx.meta?.postBalances[index]
            })

            if (walletIndex === -1) return

            const balanceChange = findRelevantBalanceChange(tx, walletIndex)

            // Skip if no meaningful balance change
            if (Math.abs(balanceChange) < 0.000001) return

            // Analyze transaction instructions
            const logMessages = tx.meta.logMessages || []
            const logString = logMessages.join(' ').toLowerCase()

            let type: TaxableEvent['type'] = 'transfer'
            if (logString.includes('stake') && logString.includes('withdraw')) {
                type = 'staking_reward'
            } else if (logString.includes('sale') || logString.includes('swap')) {
                type = 'sale'
            } else if (logString.includes('nft') && logString.includes('sale')) {
                type = 'nft_sale'
            } else if (logString.includes('airdrop')) {
                type = 'airdrop'
            }

            events.push({
                type,
                timestamp,
                amount: Math.abs(balanceChange),
                price: 1, // Default to 1 SOL = 1 SOL for now
                fee
            })
        } catch (error) {
            console.error('Error categorizing transaction:', error)
        }
    })

    return events
}

export async function generateWalletTaxInfo(
    walletAddress: string,
    connection: Connection,
    year: number
): Promise<WalletTaxInfo> {
    try {
        const transactions = await fetchWalletTransactions(walletAddress, connection, year)
        const taxableEvents = categorizeTaxableEvents(transactions)
        const summary = calculateTaxSummary(taxableEvents)

        return {
            address: walletAddress,
            transactions: taxableEvents,
            summary,
            year,
        }
    } catch (error) {
        console.error('Error generating wallet tax info:', error)
        throw error
    }
}

export const IRS_GUIDANCE = [
    {
        category: 'Virtual Currency',
        description: 'If you sell virtual currency, you must recognize any capital gain or loss on the sale.',
        irsReference: 'Notice 2014-21',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
    },
    {
        category: 'Mining',
        description: 'If you mine virtual currency, you must include it in your gross income.',
        irsReference: 'Notice 2014-21, Q&A-8',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
    },
    {
        category: 'Staking',
        description: 'Staking rewards are generally treated as self-employment income.',
        irsReference: 'Notice 2014-21',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
    },
    {
        category: 'NFTs',
        description: 'NFTs are treated as digital assets for tax purposes.',
        irsReference: 'IR-2023-56',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
    },
] 