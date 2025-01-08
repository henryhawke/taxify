import { atom } from 'recoil'

export type ChatMessage = {
    id: string
    content: string
    role: 'user' | 'assistant'
    timestamp: number
}

export const chatMessagesState = atom<ChatMessage[]>({
    key: 'chatMessagesState',
    default: [],
}) 