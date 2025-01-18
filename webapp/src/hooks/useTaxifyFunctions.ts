import { useCallback } from 'react'
import { taxifyFunctions, ChatMessage } from '@/lib/taxfy/functions'

export function useTaxifyFunctions() {


    const createChatMessage = useCallback(async (data: ChatMessage) => {
        return taxifyFunctions.createChatMessage(data)
    }, [])

    const createVertexMessage = useCallback(async (data: ChatMessage) => {
        return taxifyFunctions.createVertexMessage(data)
    }, [])

    return {
        createChatMessage,
        createVertexMessage
    }
} 