import { useCallback } from 'react'
import { callTaxfyFunctions } from '@/lib/taxfy/functions'
import { CreateSignInDataParams } from '@/common/types/http/createSignInDataParams'
import { VerifySIWSParams } from '@/common/types/http/verifySIWSParams'

export function useTaxfyFunctions() {
    const createSignInData = useCallback(async (params: CreateSignInDataParams) => {
        try {
            const result = await callTaxfyFunctions('auth', 'createSignInData', params)
            if (!result?.data) {
                throw new Error('No result returned from createSignInData')
            }
            return result.data
        } catch (error) {
            console.error('Error creating sign in data:', error)
            throw error
        }
    }, [])

    const verifySIWS = useCallback(async (params: VerifySIWSParams) => {
        try {
            const result = await callTaxfyFunctions('auth', 'verifySIWS', params)
            return result?.data
        } catch (error) {
            console.error('Error verifying SIWS:', error)
            throw error
        }
    }, [])

    const processTaxData = useCallback(async (params: any) => {
        return callTaxfyFunctions('tax', 'processTaxData', params)
    }, [])

    const generateTaxForms = useCallback(async (params: any) => {
        return callTaxfyFunctions('tax', 'generateTaxForms', params)
    }, [])

    const optimizeTaxPosition = useCallback(async (params: any) => {
        return callTaxfyFunctions('tax', 'optimizeTaxPosition', params)
    }, [])

    return {
        createSignInData,
        verifySIWS,
        processTaxData,
        generateTaxForms,
        optimizeTaxPosition
    }
} 