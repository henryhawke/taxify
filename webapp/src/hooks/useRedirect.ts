import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from '@/lib/languageDetector'

export default function useRedirect(to?: string) {
  const router = useRouter()
  to = to || router.asPath

  useEffect(() => {
    void (async () => {
      try {
        const detectedLng = languageDetector.detect() as string

        // If we're already on a localized path, don't add the locale again
        if (to?.startsWith(`/${detectedLng}/`)) {
          return
        }

        // If we're on a 404 page with the correct locale, just update the route
        if (to?.startsWith('/' + detectedLng) && router.route === '/404') {
          await router.replace('/' + detectedLng + router.route)
          return
        }

        // Cache the detected language
        languageDetector.cache?.(detectedLng)

        // Remove any existing locale prefix before adding the detected one
        const cleanPath = to?.replace(/^\/[a-z]{2}\//, '/') || '/'
        await router.replace('/' + detectedLng + cleanPath)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [router, to])
}
