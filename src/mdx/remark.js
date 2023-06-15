import { mdxAnnotations } from 'mdx-annotations'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const plugins = [
  mdxAnnotations.remark,
  remarkFrontmatter,
  remarkGfm,
  remarkMdxFrontmatter,
  [remarkSmartypants, { dashes: 'oldschool' }],
]

export default plugins
