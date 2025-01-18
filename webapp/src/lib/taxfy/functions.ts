/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import { functions } from '@/lib/firebase'

// Initialize functions
if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, 'localhost', 5001)
}

interface TaxData {
  year: number
  timestamp: Date
}

interface TaxFunctionResponse {
  success: boolean
  message?: string
  data?: TaxData
  error?: string
}

export interface FunctionResponse<T> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

interface TaxRequest {
  userId: string
  taxInfo?: any
  year?: number
}

export interface ChatMessage {
  content: string
  roomId: string
  userId: string
  timestamp?: Date
}

export const taxifyFunctions = {
  saveTaxData: async (userId: string, taxInfo: any): Promise<FunctionResponse<TaxData>> => {
    try {
      const saveTaxDataFn = httpsCallable<TaxRequest, TaxFunctionResponse>(functions, 'saveTaxData')
      const result = await saveTaxDataFn({ userId, taxInfo })
      return {
        success: result.data.success,
        data: result.data.data,
        message: result.data.message,
        error: result.data.error
      }
    } catch (error) {
      console.error('Error saving tax data:', error)
      throw error
    }
  },

  processTaxData: async (userId: string, year: number): Promise<FunctionResponse<TaxData>> => {
    try {
      const processTaxDataFn = httpsCallable<TaxRequest, TaxFunctionResponse>(functions, 'processTaxData')
      const result = await processTaxDataFn({ userId, year })
      return {
        success: result.data.success,
        data: result.data.data,
        message: result.data.message,
        error: result.data.error
      }
    } catch (error) {
      console.error('Error processing tax data:', error)
      throw error
    }
  },

  createChatMessage: async (message: ChatMessage): Promise<FunctionResponse<void>> => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    try {
      const createChatMessageFn = httpsCallable(functions, 'chat-createMessage')
      await createChatMessageFn({ ...message, timestamp: new Date() })
      return {
        success: true,
        message: 'Chat message created successfully'
      }
    } catch (error: any) {
      console.error('Error creating chat message:', error)
      throw new Error(error.message || 'Failed to create chat message')
    }
  },

  createVertexMessage: async (message: ChatMessage): Promise<FunctionResponse<void>> => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    try {
      const createVertexMessageFn = httpsCallable(functions, 'vertex-createMessage')
      await createVertexMessageFn({ ...message, timestamp: new Date() })
      return {
        success: true,
        message: 'Vertex message created successfully'
      }
    } catch (error: any) {
      console.error('Error creating vertex message:', error)
      throw new Error(error.message || 'Failed to create vertex message')
    }
  }
}
