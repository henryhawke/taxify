import type { Root, Element, Text } from 'hast'
import { visit } from 'unist-util-visit'

export const addClassToTitles = () => {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (
        node.tagName === 'h1' ||
        node.tagName === 'h2' ||
        node.tagName === 'h3' ||
        node.tagName === 'h4' ||
        node.tagName === 'h5' ||
        node.tagName === 'h6'
      ) {
        node.properties = node.properties || {}
        const existingClasses = Array.isArray(node.properties.className)
          ? node.properties.className
          : []

        node.properties.className = [
          'font-extrabold tracking-tighter break-word',
          ...existingClasses,
        ]
      }
    })
  }
}
