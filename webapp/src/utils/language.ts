import { IncomingMessage } from 'http'

export function getLanguageFromHeader(req: IncomingMessage): string {
    // Get Accept-Language header
    const acceptLanguage = req.headers['accept-language']

    if (!acceptLanguage) return 'en'

    // Parse the Accept-Language header
    const languages = acceptLanguage.split(',')
    const primaryLanguage = languages[0].split(';')[0].trim().toLowerCase()

    // Check if it starts with supported languages
    if (primaryLanguage.startsWith('ja')) return 'ja'

    return 'en'
} 