import collection from './lib/collection.js'
import enrich from './lib/enrich.js'
import parse from './lib/parse.js'
import source from './lib/source.js'

export { enrich, parse, source }

const init = (stores) => {
  return new Promise(async (resolve, reject) => {
    try {
      let documents = await source(stores)
      documents = enrich(documents)
      documents = await parse(documents)
      resolve(documents)
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
