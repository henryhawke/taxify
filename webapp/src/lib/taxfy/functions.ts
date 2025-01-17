import { functions } from '@/lib/firebase'
import { httpsCallable, HttpsCallableResult } from 'firebase/functions'
import { FirebaseError } from 'firebase/app'
import { WalletTaxInfo } from '@/types/tax'
//import { TaxTransaction } from '@/common/models/taxModels'
import { Timestamp } from 'firebase/firestore'

interface FunctionResponse {
  data?: {
    body?: ReadableStream
  }
  error?: {
    message: string
    code?: string
  }
  success?: boolean
  message?: string
}

export const callTaxfyFunctions = async <T>(
  category: string,
  methodName: string,
  params: T,
): Promise<HttpsCallableResult<FunctionResponse>> => {
  try {
    if (!functions) {
      throw new Error('Firebase Functions not initialized')
    }

    // Format the function name correctly: categoryMethodName
    const functionName = `${category}${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}`
    const callableFunction = httpsCallable(functions, functionName)

    const res = await callableFunction(params) as HttpsCallableResult<FunctionResponse>

    if (!res.data) {
      throw new Error('No data returned from function')
    }

    // Check for error in response data
    if (res.data.error) {
      throw new FirebaseError(
        res.data.error.code || 'functions/internal',
        res.data.error.message || 'Internal server error'
      )
    }

    return res
  } catch (err) {
    console.error('callTaxfyFunctions error:', err)
    if (err instanceof FirebaseError) {
      throw err // Re-throw Firebase errors as is
    }
    if (err instanceof Error) {
      throw new FirebaseError(
        'functions/internal',
        err.message || 'Function call failed'
      )
    }
    throw new FirebaseError(
      'functions/unknown',
      'An unexpected error occurred'
    )
  }
}

export const taxifyFunctions = {
  async saveTaxData(userId: string, taxInfo: WalletTaxInfo) {
    if (!userId || !taxInfo) {
      throw new Error('Missing required parameters')
    }

    try {
      // Validate tax info structure
      if (!taxInfo.address || !taxInfo.year || !taxInfo.summary || !taxInfo.transactions) {
        throw new Error('Invalid tax information structure')
      }

      // Structure the data according to Firestore rules
      const taxData = {
        userId,
        walletAddress: taxInfo.address,
        year: taxInfo.year,
        summary: taxInfo.summary,
        transactions: taxInfo.transactions,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      }

      const result = await callTaxfyFunctions('tax', 'saveTaxData', {
        userId,
        taxData,
        path: `users/${userId}/taxData/${taxInfo.year}`
      })

      if (!result.data) {
        throw new Error('No data returned from function')
      }

      // Check for success flag in response
      if (!result.data.success) {
        throw new Error(result.data.message || 'Failed to save tax data')
      }

      return result.data
    } catch (err) {
      console.error('Error saving tax data:', err)

      if (err instanceof FirebaseError) {
        // Re-throw Firebase errors with proper error code
        throw err
      }

      // Convert other errors to Firebase errors
      if (err instanceof Error) {
        throw new FirebaseError(
          'internal',
          `Failed to save tax data: ${err.message}`
        )
      }

      throw new FirebaseError(
        'unknown',
        'An unexpected error occurred while saving tax data'
      )
    }
  }
}
