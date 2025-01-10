import type { Node } from 'unist'
import { visit } from 'unist-util-visit'

interface Element extends Node {
  type: 'element'
  tagName: string
  properties?: {
    className?: string[]
    [key: string]: unknown
  }
}

export const addClassToTitles = () => {
  return (tree: Node) => {
    visit(tree, 'element', (node: Element) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        node.properties = node.properties || {}
        node.properties.className = [
          ...(node.properties.className || []),
          'scroll-mt-20',
        ]
      }
    })
  }
}
