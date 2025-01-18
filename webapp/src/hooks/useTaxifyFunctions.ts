import { useCallback } from 'react'
import { callTaxfyFunctions } from '@/lib/taxfy/functions'

type SignInData = {
    email: string
    password: string
}

export function useTaxifyFunctions() {
    const signIn = useCallback(async (data: SignInData) => {
        return callTaxfyFunctions<{ token: string }>('auth/signIn', data)
    }, [])

    return {
        signIn
    }
} 