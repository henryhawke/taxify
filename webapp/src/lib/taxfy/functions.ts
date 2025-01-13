import taxfyCloudConfig from '../../../taxfy-cloud.config.json'
import { toKebabCase } from '@/utils/character'
import { auth, platformDevIP, functions } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { httpsCallable, HttpsCallableResult } from 'firebase/functions'
import { FirebaseError } from 'firebase/app'
import { WalletTaxInfo } from '@/types/tax'
import { TaxTransaction } from '@/common/models/taxModels'
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

    // Format the function name correctly: category-methodName
    const functionName = `${category}-${toKebabCase(methodName)}`
    const callableFunction = httpsCallable(functions, functionName)

    console.log('Calling Firebase function:', functionName, 'with params:', params)
    const res = await callableFunction(params) as HttpsCallableResult<FunctionResponse>

    if (!res.data) {
      throw new Error('No data returned from function')
    }

    // Check for error in response data
    if (res.data.error) {
      throw new FirebaseError('internal', res.data.error.message || 'Internal server error')
    }

    return res
  } catch (err) {
    console.error('callTaxfyFunctions error:', err)
    if (err instanceof FirebaseError) {
      const code = err.code
      const message = err.message || 'Firebase function error'
      console.error('Firebase error details:', { code, message, error: err })

      // Handle specific Firebase error codes
      if (code === 'internal' || code.includes('internal')) {
        throw new FirebaseError('internalError', 'Internal server error. Please try again later.')
      }
      if (code === 'permission-denied') {
        throw new FirebaseError('permission-denied', 'You do not have permission to perform this action.')
      }

      throw new FirebaseError(code, message)
    }
    if (err instanceof Error) {
      console.error('Error details:', err)
      throw new FirebaseError('unknown', err.message || 'Function call failed')
    }
    console.error('Unknown error:', err)
    throw new FirebaseError('unknown', 'An unknown error occurred')
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

      console.log('Saving tax data:', { userId, year: taxInfo.year })
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
  },

  async processTaxData(userId: string, transactions: TaxTransaction[]) {
    if (!userId || !transactions?.length) {
      throw new Error('Missing required parameters')
    }

    try {
      // Structure the data according to Firestore rules
      const data = {
        userId,
        transactions,
        path: `users/${userId}/transactions`,
        createdAt: Timestamp.now()
      }

      console.log('Processing tax data:', { userId, transactionCount: transactions.length })
      const result = await callTaxfyFunctions('tax', 'processTaxData', data)

      if (!result.data) {
        throw new Error('No data returned from function')
      }

      return result.data
    } catch (err) {
      console.error('Error processing tax data:', err)

      if (err instanceof FirebaseError) {
        // Re-throw Firebase errors with proper error code
        throw err
      }

      // Convert other errors to Firebase errors
      if (err instanceof Error) {
        throw new FirebaseError(
          'internal',
          `Failed to process tax data: ${err.message}`
        )
      }

      throw new FirebaseError(
        'unknown',
        'An unexpected error occurred while processing tax data'
      )
    }
  }
}
