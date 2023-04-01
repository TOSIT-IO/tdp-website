import fs from 'node:fs/promises'
import path from 'node:path'
import yaml from 'yaml'

export default async function mklayout(tmpdir, pages) {
  for (const [location, content, metadata] of pages) {
    // console.log('page', page)
    // let [location, content, metadata] = page
    const path_relative = path.resolve(tmpdir, location)
    await fs.mkdir(path.dirname(path_relative), { recursive: true })
    const frontmatter = metadata
      ? `---\n${yaml.stringify(metadata)}\n---\n\n`
      : ''
    await fs.writeFile(
      path_relative,
      frontmatter +
      (content || '') +
      ((content || '').endsWith('\n') || '\n')
    )
  }
}
