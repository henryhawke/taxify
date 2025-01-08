import { useCallback } from 'react'
import { fetchTaxfyFunctions } from '@/lib/taxfy/functions'

export function useTaxfyFunctions() {
    const functions = fetchTaxfyFunctions(

    const createSignInData = useCallback(async (params: CreateSignInDataParams) => {
        try {
            const result = await functions.createSignInData(params)
            return result.data
        } catch (error) {
            console.error('Error creating sign in data:', error)
            throw error
        }
    }, [])

    const verifySIWS = useCallback(async (params: VerifySIWSParams) => {
        try {
            const result = await functions.verifySIWS(params)
            return result.data
        } catch (error) {
            console.error('Error verifying SIWS:', error)
            throw error
        }
    }, [])

    return {
        createSignInData,
        verifySIWS,
        processTaxData: functions.processTaxData,
        generateTaxForms: functions.generateTaxForms,
        optimizeTaxPosition: functions.optimizeTaxPosition
    }
} 