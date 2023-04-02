import { mdxAnnotations } from 'mdx-annotations'
// import rehypeMdxTitle from 'rehype-mdx-title'
import rehypeHighlighter from './rehype-highlighter.js'
import { visit } from 'unist-util-visit'



function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code' && node.properties.className) {
        parentNode.properties.language = node.properties.className[0]?.replace(
          /^language-/,
          ''
        )
      }
    })
  }
}

const plugins = [
  mdxAnnotations.rehype,
  rehypeParseCodeBlocks,
  // rehypeMdxTitle,
  rehypeHighlighter,
]

export default plugins
