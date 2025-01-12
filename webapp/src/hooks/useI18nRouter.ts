import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function useI18nRouter() {
  const router = useRouter()

  const routerPush = useCallback(
    (path: string) => {
      const locale = router.locale || 'en'
      const cleanPath = path.startsWith('/') ? path : `/${path}`
      return router.push(`/${locale}${cleanPath}`)
    },
    [router]
  )

  return {
    routerPush,
    router
  }
}
