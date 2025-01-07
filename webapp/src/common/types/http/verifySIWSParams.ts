import type { SolanaSignInInput, SolanaSignInOutput } from '@solana/wallet-standard-features'

export type VerifySIWSParams = {
    signInData: SolanaSignInInput
    signInResult: SolanaSignInOutput
} 