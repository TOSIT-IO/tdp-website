import enrich from './lib/enrich.js'
import parse from './lib/parse.js'
import source from './lib/source.js'

export { enrich, parse, source }

const collection = (db, collection) => {
  return {
    get: async function (filter) {
      const documents = await this.find(filter)
      if(documents.length === 0){
        return undefined
      } else if (documents.length === 1) {
        return documents[0]
      } else {
        throw Error('Invalid Query: found more than one element matching the filter.')
      }
    },
    find: async function (filter={}) {
      if (filter === 'string') {
        filter = { slug: filter }
      }
      const entries = await db
      return entries.filter((entry) => {
        if (entry.collection !== collection) {
          return false
        }
        for (const k in filter) {
          if (JSON.stringify(entry[k]) !== JSON.stringify(filter[k])) {
            return false
          }
        }
        return true
      })
    }
  }
}

const init = (stores) => {
  return new Promise(async (resolve, reject) => {
    try {
      let entries = await source(stores)
      entries = enrich(entries)
      entries = await parse(entries)
      resolve(entries)
    } catch (error) {
      reject(error)
    }
  })
}

export default (stores) => {
  const db = init(stores)
  return {
    collection: (name) => collection(db, name),
  }
}
