import { useCallback } from 'react'
import { callTaxfyFunctions } from '@/lib/taxfy/functions'

type SignInData = {
    email: string
    password: string
}

type ChatMessage = {
    content: string
    roomId: string
}

type VertexMessage = {
    content: string
    roomId: string
}

export function useTaxifyFunctions() {
    const createSignInData = useCallback(async (data: SignInData) => {
        return await callTaxfyFunctions('taxfy', 'createSignInData', data)
    }, [])

    const createChatMessage = useCallback(async (data: ChatMessage) => {
        return await callTaxfyFunctions('taxfy', 'createChatMessage', data)
    }, [])

    const createVertexMessage = useCallback(async (data: VertexMessage) => {
        return await callTaxfyFunctions('taxfy', 'createVertexMessage', data)
    }, [])

    return {
        createSignInData,
        createChatMessage,
        createVertexMessage,
    }
} 