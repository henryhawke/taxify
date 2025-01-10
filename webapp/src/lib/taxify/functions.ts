/* eslint-disable @typescript-eslint/no-explicit-any */
import taxfyCloudConfig from '@taxfy-cloud.config.json'
import { toKebabCase } from '@/utils/character'
import { auth, platformDevIP, functions } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { httpsCallable, httpsCallableFromURL } from 'firebase/functions'
import { TaxTransaction } from '@/common/models/taxModels'

export const fetchTaxfyFunctions = async <T>(
  functionName: string,
  methodName: string,
  params: T,
) => {
  try {
    const taxfyCloudApp = taxfyCloudConfig.app as {
      hasLoadBalancer: boolean
      region: string
      fbProjectId: string
      lbDomain: string
    }
    const url =
      process.env.NODE_ENV === 'production'
        ? taxfyCloudApp.hasLoadBalancer
          ? `https://${taxfyCloudApp.lbDomain}/${functionName}/${toKebabCase(methodName)}`
          : `https://${taxfyCloudApp.region}-${taxfyCloudApp.fbProjectId}.cloudfunctions.net/${methodName}`
        : `http://${platformDevIP}:5001/${taxfyCloudApp.fbProjectId}/${taxfyCloudApp.region}/${methodName}`
    const taxfyToken = await auth?.currentUser?.getIdToken()
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${taxfyToken}`,
      },
      body: JSON.stringify(params),
    })
    return res
  } catch (err) {
    console.error(err)
    if (
      err instanceof Error &&
      (err.message.includes('Firebase ID token has expired.') ||
        err.message.includes('Error: getUserAuth'))
    ) {
      if (auth) {
        await signOut(auth)
      }
    }
  }
}

export const callTaxfyFunctions = async <T>(
  functionName: string,
  methodName: string,
  params: T,
) => {
  try {
    const taxfyCloudApp = taxfyCloudConfig.app as {
      hasLoadBalancer: boolean
      region: string
      fbProjectId: string
      lbDomain: string
    }
    const callableFunction =
      process.env.NODE_ENV === 'production' &&
        taxfyCloudApp.hasLoadBalancer
        ? functions
          ? httpsCallableFromURL(
            functions,
            `https://${taxfyCloudApp.lbDomain}/${functionName}/${toKebabCase(methodName)}`,
          )
          : undefined
        : functions
          ? httpsCallable(functions, methodName)
          : undefined

    const res = await callableFunction?.(params)
    return res
  } catch (err: any) {
    console.error(err)
    throw new Error(err.message)
  }
}

export const taxifyFunctions = {
  processTaxData: async (userId: string, transactions: TaxTransaction[]) => {
    return await callTaxfyFunctions('tax', 'processTaxData', {
      userId,
      transactions
    })
  },
  // ... other tax functions
}
