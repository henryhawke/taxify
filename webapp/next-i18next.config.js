/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: './public/locales',
}
