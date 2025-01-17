/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionCache from '@/lib/createEmotionCache'
import { extractCritical } from '@emotion/server'
import { theme } from '@/lib/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const { css, ids } = await extractCritical(initialProps.html)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      <style
        key="emotion"
        data-emotion={`css ${ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: css }}
      />,
    ],
  }
}
