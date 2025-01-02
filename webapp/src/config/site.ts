import taxfyCloudConfig from '/taxfy-cloud.config.json'

const siteConfig = {
  domain: taxfyCloudConfig.app.appDomain,
  copyright: 'Taxfy',
  sitenameJA: 'Taxfy Solana Web',
  sitenameEN: 'Taxfy Solana Web',
  keywordsJA:
    'Next.js, Firebase, SSG, テンプレート, SEO, 多言語対応, サーバーレス, TypeScript, PWA',
  keywordsEN:
    'Next.js, Firebase, SSG, Template, SEO, i18n translation, Serverless, TypeScript, PWA',
  descriptionJA:
    'Next.jsのボイラープレート。SEO対応、多言語対応、SSG、PWA。WebAppをすぐに構築開始でき、そのデプロイは保証されています。',
  descriptionEN:
    'We are freaking awesome at tax calculations. We are going to make it easy for you to calculate your taxes.',
  twitterAccount: '@TaxfyDev',
  instagramAccount: 'elsoul_labo',
  githubAccount: 'elsoul',
  discordInvitationLink: 'https://discord.gg/H2HeqRq54J',
}

export default siteConfig
