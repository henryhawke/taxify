import type { Transformer } from '@remark-embedder/core'

const youtubeTransformer: Transformer = {
  name: 'youtube',
  shouldTransform(url: string) {
    const { host, pathname, searchParams } = new URL(url)
    return (
      ['youtube.com', 'www.youtube.com', 'youtu.be'].includes(host) &&
      (pathname.includes('/watch') || pathname.length > 1) &&
      !searchParams.has('list')
    )
  },
  getHTML(url: string) {
    const iframeUrl = getYouTubeIFrameSrc(url)
    return `<div class="embed-youtube"><iframe src="${iframeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
  },
}

function getYouTubeIFrameSrc(url: string) {
  const { host, pathname, searchParams } = new URL(url)
  const vidId = host === 'youtu.be' ? pathname.slice(1) : searchParams.get('v')
  return `https://www.youtube-nocookie.com/embed/${vidId}`
}

export default youtubeTransformer
