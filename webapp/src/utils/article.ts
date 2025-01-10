import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { globby } from 'globby'

export const getArticleBySlug = (
  slugArray: string[],
  fields: string[] = [],
  articleDirPrefix: string,
  locale: string
) => {
  const articlesDirectory = join(process.cwd(), `${articleDirPrefix}/${locale}`)
  const matchedSlug = slugArray.join('/')
  const realSlug = matchedSlug.replace(/\.md$/, '')
  const fullPath = join(articlesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string | string[]
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'date') {
      const date = slugArray[0] + '.' + slugArray[1] + '.' + slugArray[2]
      items[field] = date
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllArticles = async (articleDirPrefix: string) => {
  const entries = await globby(`${articleDirPrefix}/**/*.md`, {
    cwd: process.cwd(),
    absolute: false
  })
  return entries
    .map((file) => file.split(articleDirPrefix).pop())
    .map((slug) => (slug as string).replace(/\.md$/, '').split('/'))
}
