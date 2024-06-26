import { mdxAnnotations } from 'mdx-annotations'
// import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkSmartypants from '@davidcelis/remark-smartypants'
import titleToFrontmatter from 'remark-title-to-frontmatter'

const plugins = [
  mdxAnnotations.remark,
  titleToFrontmatter, // Remove the title
  // remarkFrontmatter,
  remarkGfm,
  // remarkMdxFrontmatter,
  [remarkSmartypants, { dashes: 'oldschool' }],
]

export default plugins
