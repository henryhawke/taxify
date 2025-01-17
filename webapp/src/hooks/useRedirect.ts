import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function useRedirect(path: string, condition: boolean = true) {
    const router = useRouter()

    useEffect(() => {
        if (condition) {
            router.push(path)
        }
    }, [path, condition, router])
} 