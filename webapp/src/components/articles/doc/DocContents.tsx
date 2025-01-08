import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { MDXComponents } from '@/components/mdx/MDXComponents'

interface DocContentsProps {
  source: any // Replace with proper type from next-mdx-remote when available
}

const DocContents: React.FC<DocContentsProps> = ({ source }) => {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} components={MDXComponents} />
    </article>
  )
}

export default DocContents
