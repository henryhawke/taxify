/* eslint-disable @typescript-eslint/no-explicit-any */
// import { PublicKey } from '@solana/web3.js'
import { auth } from '@/lib/firebase'
import { signInWithCustomToken } from 'firebase/auth'
import bs58 from 'bs58'

export class PhantomAuthProvider {
    private wallet: any
    private nonce: string

    constructor(wallet: any) {
        this.wallet = wallet
        // Generate a random nonce for each authentication attempt
        this.nonce = crypto.randomUUID()
    }

    async authenticate(): Promise<void> {
        try {
            if (!this.wallet.publicKey) {
                throw new Error('Wallet not connected')
            }

            // Create the message to be signed
            const message = this.createSignMessage(
                this.wallet.publicKey.toString(),
                this.nonce
            )
            console.log('Signing message:', message)

            // Request signature from wallet
            const encodedMessage = new TextEncoder().encode(message)
            const signedMessage = await this.wallet.signMessage(encodedMessage, 'utf8')
            console.log('Signature received, length:', signedMessage.length)

            // Send authentication request to API
            const response = await fetch('/api/auth/phantom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    publicKey: this.wallet.publicKey.toString(),
                    signature: bs58.encode(signedMessage),
                    nonce: this.nonce,
                }),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || 'Failed to authenticate')
            }

            const { token } = await response.json()

            // Sign in with the custom token
            await signInWithCustomToken(auth, token)
        } catch (error) {
            console.error('Authentication error:', error)
            throw error
        }
    }

    private createSignMessage(publicKey: string, nonce: string): string {
        return `Sign this message for authenticating with Taxify.\n\nPublic Key: ${publicKey}\nNonce: ${nonce}`
    }
} 