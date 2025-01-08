import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getI18nProps } from '@/lib/getStatic'

const NewsArticlePage = () => {
  return (
    <div>
      <h1>News Article</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, you would fetch your news slugs here
  const slugs: string[][] = [] // Example: [['article-1'], ['article-2']]
  const locales = ['en', 'ja']

  const paths = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      params: { locale, slug },
    })),
  )

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  return {
    props: {
      ...(await getI18nProps(context, ['common', 'news'], {
        pathname: '/news',
        title: {
          en: 'News',
          ja: 'ニュース',
        },
        description: {
          en: 'Latest news and updates',
          ja: '最新のニュースとアップデート',
        },
        img: '/images/og-image.jpg',
      })),
      slug: params?.slug || [],
    },
  }
}

export default NewsArticlePage
