export * from './userModels'
export * from './taxModels'
export interface AddStreamUserChatRoomMessageParams {
    userChatRoomId: string
    content: string
    isFirstMessage?: boolean
}


export interface UserChatRoom {
    id: string
    title: string
    model: string
    context: string
    maxTokens: number
    temperature: number
}

export interface UserChatRoomMessage {
    userChatRoomId: string
    content: string
    role: 'user' | 'assistant' | 'system'
}

export const genUserChatRoomPath = (userId: string) => `UserChatRoom/${userId}`
export const genUserChatRoomMessagePath = (userId: string, chatRoomId: string) =>
    `UserChatRoom/${userId}/UserChatRoomMessage/${chatRoomId}/messages`
