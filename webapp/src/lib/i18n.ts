import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// English translations
const enTranslations = {
    errorTokenExpiredTitle: 'Token Expired',
    errorTokenExpiredBody: 'Please sign in again.',
    errorTitle: 'Error',
    errorBody: 'Something went wrong... Please try it again.',
}

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    })

export default i18n 