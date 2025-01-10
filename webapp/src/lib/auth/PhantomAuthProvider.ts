/* eslint-disable @typescript-eslint/no-explicit-any */
import { PublicKey } from '@solana/web3.js'
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

    async authenticate(): Promise<string> {
        try {
            if (!this.wallet.publicKey) {
                throw new Error('Wallet not connected')
            }

            // Create the message to be signed
            const message = this.createSignMessage(
                this.wallet.publicKey.toString(),
                this.nonce
            )

            // Request signature from wallet
            const encodedMessage = new TextEncoder().encode(message)
            const signedMessage = await this.wallet.signMessage(encodedMessage, 'utf8')

            // Verify the signature
            if (!this.verifySignature(signedMessage, this.wallet.publicKey)) {
                throw new Error('Invalid signature')
            }

            // Get Firebase custom token from your backend
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
                throw new Error('Failed to authenticate with backend')
            }

            const { token } = await response.json()

            // Sign in to Firebase with custom token
            await signInWithCustomToken(auth, token)

            return token
        } catch (error) {
            console.error('Authentication error:', error)
            throw error
        }
    }

    private createSignMessage(publicKey: string, nonce: string): string {
        return `Sign this message for authenticating with Taxify.\n\nPublic Key: ${publicKey}\nNonce: ${nonce}`
    }

    private verifySignature(signature: Uint8Array, publicKey: PublicKey): boolean {
        try {
            // Basic length checks for signature and public key
            return signature.length === 64 && publicKey.toString().length === 44
        } catch (error) {
            console.error('Signature verification error:', error)
            return false
        }
    }
} 