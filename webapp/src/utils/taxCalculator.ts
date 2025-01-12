/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaxableEvent, TaxSummary, WalletTaxInfo } from '@/types/tax'
import { Connection, PublicKey } from '@solana/web3.js'

export async function fetchWalletTransactions(walletAddress: string, connection: Connection) {
    try {
        const pubKey = new PublicKey(walletAddress)
        const signatures = await connection.getSignaturesForAddress(pubKey, { limit: 20 })
        const transactions = await Promise.all(
            signatures.map(async (sig) => {
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

export function categorizeTaxableEvents(transactions: any[]): TaxableEvent[] {
    return transactions.map(_tx => {
        // For demonstration, we'll create sample data
        // In a real implementation, you would analyze the transaction data
        return {
            type: 'transfer',
            timestamp: Date.now(),
            amount: 1,
            price: 10,
            fee: 0.000005,
        }
    })
}

export async function generateWalletTaxInfo(
    walletAddress: string,
    connection: Connection,
    year: number
): Promise<WalletTaxInfo> {
    try {
        const transactions = await fetchWalletTransactions(walletAddress, connection)
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