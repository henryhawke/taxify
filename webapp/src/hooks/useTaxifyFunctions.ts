import { useCallback } from 'react'
import { callTaxfyFunctions, ChatMessage } from '@/lib/taxfy/functions'

type SignInData = {
    email: string
    password: string
}

export function useTaxifyFunctions() {
    const signIn = useCallback(async (data: SignInData) => {
        return callTaxfyFunctions<{ token: string }>('auth/signIn', data)
    }, [])

    const createChatMessage = useCallback(async (data: ChatMessage) => {
        return callTaxfyFunctions('chat/createMessage', data)
    }, [])

    const createVertexMessage = useCallback(async (data: ChatMessage) => {
        return callTaxfyFunctions('vertex/createMessage', data)
    }, [])

    return {
        signIn,
        createChatMessage,
        createVertexMessage
    }
} 