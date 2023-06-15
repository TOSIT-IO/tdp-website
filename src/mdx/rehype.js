import { mdxAnnotations } from 'mdx-annotations'
import { s } from 'hastscript'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
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
  rehypeSlug,
  [rehypeAutolinkHeadings, {
    // Styles are configured in `src/app/global/css`
    properties: { className: ['anchor', 'before'] },
    behavior: 'prepend',
    test: ['h2', 'h3'],
    content() {
      return s(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 18,
          height: 18,
          viewBox: '0 0 16 16',
        },
        s('path', {
          d: 'M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z',
        })
      )
    },
  }],
  rehypeParseCodeBlocks,
  // rehypeMdxTitle,
  rehypeHighlighter,
]

export default plugins
