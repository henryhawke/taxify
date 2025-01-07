import taxfyCloudConfig from '@config/taxfy-cloud.config.json'
import { toKebabCase } from '@/utils/character'
import { auth, functions } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { httpsCallable, httpsCallableFromURL } from 'firebase/functions'

export const fetchTaxfyFunctions = async <T>(
    functionName: string,
    methodName: string,
    params: T
) => {
    // ... rest of implementation
} 