import taxfyCloudConfig from '../../../taxfy-cloud.config.json'
import { toKebabCase } from '@/utils/character'
import { auth, platformDevIP, functions } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { httpsCallable, httpsCallableFromURL } from 'firebase/functions'

type FirebaseError = {
  message: string
  code?: string
  details?: unknown
}

export const fetchTaxfyFunctions = async <T>(
  functionName: string,
  methodName: string,
  params: T,
) => {
  try {
    const url =
      process.env.NODE_ENV === 'production'
        ? taxfyCloudConfig.app.hasLoadBalancer
          ? `https://${taxfyCloudConfig.app.lbDomain}/${functionName}/${toKebabCase(methodName)}`
          : `https://${taxfyCloudConfig.app.region}-${taxfyCloudConfig.app.fbProjectId}.cloudfunctions.net/${methodName}`
        : `http://${platformDevIP}:5001/${taxfyCloudConfig.app.fbProjectId}/${taxfyCloudConfig.app.region}/${methodName}`
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
    const callableFunction =
      process.env.NODE_ENV === 'production' &&
        taxfyCloudConfig.app.hasLoadBalancer
        ? functions
          ? httpsCallableFromURL(
            functions,
            `https://${taxfyCloudConfig.app.lbDomain}/${functionName}/${toKebabCase(methodName)}`,
          )
          : undefined
        : functions
          ? httpsCallable(functions, methodName)
          : undefined

    const res = await callableFunction?.(params)
    return res
  } catch (err: unknown) {
    console.error(err)
    if (err && typeof err === 'object' && 'message' in err) {
      throw new Error((err as FirebaseError).message)
    }
    throw new Error('An unknown error occurred')
  }
}
