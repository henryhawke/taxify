import taxifyCloudConfig from '@root/taxify-cloud.config.json'
import { toKebabCase } from '@/utils/character'
import { auth, platformDevIP, functions } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { httpsCallable, httpsCallableFromURL } from 'firebase/functions'

export const fetchTaxifyFunctions = async <T>(
  functionName: string,
  methodName: string,
  params: T
) => {
  try {
    const url =
      process.env.NODE_ENV === 'production'
        ? taxifyCloudConfig.app.hasLoadBalancer
          ? `https://${taxifyCloudConfig.app.lbDomain
          }/${functionName}/${toKebabCase(methodName)}`
          : `https://${taxifyCloudConfig.app.region}-${taxifyCloudConfig.app.fbProjectId}.cloudfunctions.net/${methodName}`
        : `http://${platformDevIP}:5001/${taxifyCloudConfig.app.fbProjectId}/${taxifyCloudConfig.app.region}/${methodName}`
    const taxifyToken = await auth?.currentUser?.getIdToken()
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${taxifyToken}`,
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

export const callTaxifyFunctions = async <T>(
  functionName: string,
  methodName: string,
  params: T
) => {
  try {
    const callableFunction =
      process.env.NODE_ENV === 'production' &&
        taxifyCloudConfig.app.hasLoadBalancer
        ? functions
          ? httpsCallableFromURL(
            functions,
            `https://${taxifyCloudConfig.app.lbDomain
            }/${functionName}/${toKebabCase(methodName)}`
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
