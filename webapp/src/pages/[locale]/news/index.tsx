import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getI18nProps } from '@/lib/getStatic'

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { locale: 'en' } }, { params: { locale: 'ja' } }],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
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
    },
  }
}

export default NewsPage
