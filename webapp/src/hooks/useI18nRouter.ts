import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function useI18nRouter() {
    const router = useRouter()

    const routerPush = useCallback(
        async (path: string, options = {}) => {
            const locale = router.locale || 'en'
            const localizedPath = `/${locale}${path}`
            await router.push(localizedPath, undefined, options)
        },
        [router],
    )

    return {
        router,
        routerPush,
    }
} 