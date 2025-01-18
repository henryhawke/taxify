/* eslint-disable @typescript-eslint/no-explicit-any */
import { WalletTaxInfo } from '@/types/tax'
import { httpsCallable } from 'firebase/functions'
import { functions } from '@/lib/firebase'

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

export const taxifyFunctions = {
  saveTaxData: async (userId: string, taxInfo: WalletTaxInfo) => {
    if (!userId || !taxInfo) {
      throw new Error('Missing required parameters: userId and taxInfo')
    }

    // Validate required fields
    if (!taxInfo.address || !taxInfo.year || !taxInfo.summary || !Array.isArray(taxInfo.transactions)) {
      throw new Error('Invalid tax info structure. Missing required fields.')
    }

    // Validate summary fields
    const requiredSummaryFields = [
      'shortTermGains',
      'longTermGains',
      'totalIncome',
      'totalFees',
      'stateTax',
      'stateCode',
      'effectiveStateTaxRate',
      'taxableEvents'
    ]

    for (const field of requiredSummaryFields) {
      if (!(field in taxInfo.summary)) {
        throw new Error(`Missing required summary field: ${field}`)
      }
    }

    console.log('Saving tax data:', {
      userId,
      taxInfo
    })

    try {
      const saveTaxDataFn = httpsCallable<{ userId: string; taxInfo: WalletTaxInfo }, FunctionResponse>(
        functions,
        'saveTaxData'
      )
      const result = await saveTaxDataFn({ userId, taxInfo })

      if (!result.data.success) {
        throw new Error(result.data.error?.message || 'Failed to save tax data')
      }

      return result.data
    } catch (error: any) {
      console.error('Error saving tax data:', error)
      throw new Error(error.message || 'Failed to save tax data')
    }
  },

  processTaxData: async (userId: string, year: number) => {
    if (!userId || !year) {
      throw new Error('Missing required parameters: userId and year')
    }

    try {
      const processTaxDataFn = httpsCallable(functions, 'taxProcessTaxData')
      const result = await processTaxDataFn({ userId, year })
      return result.data as FunctionResponse
    } catch (error: any) {
      console.error('Error processing tax data:', error)
      throw new Error(error.message || 'Failed to process tax data')
    }
  },

  createChatMessage: async (message: ChatMessage) => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    try {
      const createChatMessageFn = httpsCallable(functions, 'chat-createMessage')
      const result = await createChatMessageFn({ ...message, timestamp: new Date() })
      return result.data as FunctionResponse
    } catch (error: any) {
      console.error('Error creating chat message:', error)
      throw new Error(error.message || 'Failed to create chat message')
    }
  },

  createVertexMessage: async (message: ChatMessage) => {
    if (!message.content || !message.roomId || !message.userId) {
      throw new Error('Missing required parameters: content, roomId, or userId')
    }

    try {
      const createVertexMessageFn = httpsCallable(functions, 'vertex-createMessage')
      const result = await createVertexMessageFn({ ...message, timestamp: new Date() })
      return result.data as FunctionResponse
    } catch (error: any) {
      console.error('Error creating vertex message:', error)
      throw new Error(error.message || 'Failed to create vertex message')
    }
  }
}
