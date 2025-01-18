/* eslint-disable @typescript-eslint/no-explicit-any */
import { WalletTaxInfo } from '@/types/tax'

interface FunctionResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

export interface ChatMessage {
  content: string
  roomId: string
  userId: string
  timestamp?: Date
}

export async function callTaxfyFunctions<T>(path: string, data: any): Promise<FunctionResponse<T>> {
  try {
    const response = await fetch(`http://localhost:5001/taxifyio/us-central1/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || 'Function call failed')
    }

    return await response.json()
  } catch (error) {
    console.error(`Error calling ${path}:`, error)
    throw error
  }
}

export const taxifyFunctions = {
  saveTaxData: async (userId: string, taxInfo: WalletTaxInfo) => {
    if (!userId || !taxInfo) {
      throw new Error('Missing required parameters: userId and taxInfo')
    }

    console.log('Saving tax data:', {
      userId,
      taxInfo
    })

    return callTaxfyFunctions('taxSaveTaxData', {
      userId,
      taxInfo
    })
  },

  processTaxData: async (userId: string, year: number) => {
    if (!userId || !year) {
      throw new Error('Missing required parameters: userId and year')
    }

    return callTaxfyFunctions('taxProcessTaxData', {
      userId,
      year
    })
  },

  createChatMessage: async (message: ChatMessage) => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    return callTaxfyFunctions('chat/createMessage', {
      ...message,
      timestamp: new Date()
    })
  },

  createVertexMessage: async (message: ChatMessage) => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    return callTaxfyFunctions('vertex/createMessage', {
      ...message,
      timestamp: new Date()
    })
  }
}
