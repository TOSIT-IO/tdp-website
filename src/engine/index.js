import collection from './lib/collection.js'
import enrich from './lib/enrich.js'
import parse from './lib/parse.js'
import source from './lib/source.js'

export { enrich, parse, source }

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
  const engine = {
    db: init(stores),
    from: (name) => collection(engine, name),
  }
  return engine
}
