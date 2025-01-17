import createCache from '@emotion/cache'

export default function createEmotionCache() {
    const isBrowser = typeof document !== 'undefined'

    return createCache({
        key: 'mui',
        prepend: true,
        insertionPoint: isBrowser
            ? document.querySelector<HTMLElement>('meta[name="emotion-insertion-point"]') ?? undefined
            : undefined
    })
} 