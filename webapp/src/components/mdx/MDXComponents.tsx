import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const MDXComponents = {
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return href ? (
      <Link href={href} {...props}>
        {children}
      </Link>
    ) : null
  },
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null
    return (
      <div className="relative my-8 h-64 w-full">
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="object-contain"
          {...props}
        />
      </div>
    )
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="relative" {...props}>
      {children}
    </pre>
  ),
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code className={`${className || ''} font-mono text-sm`} {...props}>
      {children}
    </code>
  ),
}
