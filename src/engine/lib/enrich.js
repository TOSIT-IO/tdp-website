
import path from 'path'

export default function enrich (entries) {
  return entries
    .map((entry) => {
      const { path_relative } = entry
      // First element is the collection name
      const [collection, ...slug] = path_relative.split(path.sep)
      entry.collection = collection
      let lastSlugElements = slug[slug.length - 1].split('.')
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
        // Treat root dir
        if(slug.length === 0){
          return {
            ...entry,
            lang: lang || 'en',
            // sort [collection]
            sort: '',
            slug: slug,
          }
        }
        lastSlugElements = slug[slug.length - 1].split('.')
      }
      // Extract sorting key
      // const sort = [collection, ...slug.slice(0, slug.length - 1), lastSlugElements.join('.')]
      const sort = lastSlugElements.join('.')
      if (/^\d+$/.test(lastSlugElements[0])) {
        lastSlugElements.shift()
      }
      // Language in `{name}.{lang}.ext`
      if (!isIndex && lastSlugElements.length > 1) {
        lang = lastSlugElements.pop()
      }
      slug[slug.length - 1] = lastSlugElements.join('.')
      // Normalize parent slug
      slug
        .slice(0, slug.length - 1)
        .map((element, i) => {
          const elements = element.split('.')
          if (/^\d+$/.test(elements[0])) {
            elements.shift()
            slug[i] = elements.join('.')
          }
        })
      return {
        ...entry,
        lang: lang || 'en',
        sort: sort,
        slug: slug,
      }
    })
}
