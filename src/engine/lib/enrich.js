
import path from 'path'

export default (entries) => {
  return entries
    .map((entry) => {
      const { path_relative } = entry
      // First element is the collection name
      const [collection, ...slug] = path_relative.split(path.sep)
      entry.collection = collection
      let lastSlugElement = slug[slug.length - 1]
      // console.info('slug', slug, lastSlugElement)
      let lastSlugElements = lastSlugElement.split('.')
      let position = undefined
      let lang = undefined
      // Remove extension
      lastSlugElements.pop()
      let isIndex = false
      // dirname versus filename
      if (lastSlugElements.length < 3 && lastSlugElements[0] === 'index') {
        isIndex = true
        // Language in `index.{lang}.ext`
        if (lastSlugElements.length === 2) {
          lang = lastSlugElements[1]
        }
        slug.pop()
        // Treat parent dir
        lastSlugElement = slug[slug.length - 1]
        lastSlugElements = lastSlugElement.split('.')
      }
      // Extract sorting key
      const sort = lastSlugElements.join('.')
      if (/^\d+$/.test(lastSlugElements[0])) {
        lastSlugElements.shift()
      }
      // Language in `{name}.{lang}.ext`
      if (!isIndex && lastSlugElements.length > 1) {
        lang = lastSlugElements.pop()
      }
      slug[slug.length - 1] = lastSlugElements.join('.')
      return {
        ...entry,
        lang: lang || 'en',
        sort: sort,
        slug: slug,
      }
    })
    .sort((a, b) => (a.sort > b.sort ? 1 : -1))
}
