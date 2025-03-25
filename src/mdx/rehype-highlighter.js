import { createHighlighter, createCssVariablesTheme } from 'shiki'
import { visit } from 'unist-util-visit'

let highlighter

export default function rehypeShiki() {
  return async (tree) => {
    highlighter =
      highlighter ??
      (await createHighlighter({
        themes: [
          // TDP custom theme, see /app/globals.css for color values
          createCssVariablesTheme({
            name: 'tdp',
            variablePrefix: '--shiki-',
            variableDefaults: {},
            fontStyle: true,
          }),
        ],
        langs: [
          'go',
          'ini',
          'javascript',
          'js',
          'json',
          'jsx',
          'php',
          'python',
          'bash',
          'ts',
          'ruby',
          'typescript',
          'yaml',
        ],
      }))
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        let codeNode = node.children[0]
        let textNode = codeNode.children[0]
        node.properties.code = textNode.value
        if (node.properties.language) {
          textNode.value = highlighter.codeToHtml(textNode.value, {
            defaultColor: false,
            lang: node.properties.language,
            theme: 'tdp',
          })
        }
      }
    })
  }
}
