import { is_object_literal } from 'mixme'
import tree from '../utils/tree.js'

export default function collection(engine, collection) {
  const stack = []
  const promise = new Promise((resolve, reject) => {
    setImmediate(async () => {
      let documents = await engine.db
      try {
        for (const fn of stack) {
          documents = await fn(documents)
        }
      } catch (error) {
        return reject(error)
      }
      resolve(documents)
    })
  })
  promise.match = (...args) => {
    let lang, filter
    if (typeof args[0] === 'string') {
      lang = args.shift()
      filter = args[0]
    } else if (args.length !== 1) {
      throw Error(
        'Invalid arguments: match signature is `match((lang,) slug|filter)`'
      )
    } else {
      filter = args[0]
    }
    if (!filter) {
      filter = {}
    }else if (!is_object_literal(filter)) {
      filter = { slug: filter }
    }
    if (lang) {
      filter.lang = lang
    }
    stack.push((documents) => {
      return documents.filter((document) => {
        if (document.collection !== collection) {
          return false
        }
        for (const k in filter) {
          if (JSON.stringify(document[k]) !== JSON.stringify(filter[k])) {
            return false
          }
        }
        return true
      })
    })
    return promise
  }
  promise.map = (fn) => {
    stack.push(async (documents) => {
      for (const i in documents) {
        documents[i] = await fn(documents[i])
      }
      return documents
    })
    return promise
  }
  promise.filter = (fn) => {
    stack.push(async (documents) => {
      for (const i in documents) {
        const preserve = await fn(documents[i])
        if (!preserve) {
          documents[i] = undefined
        }
      }
      return documents.filter(Boolean)
    })
    return promise
  }
  promise.get = () => {
    stack.push(async (documents) => {
      if (!documents || documents.length === 0) {
        return undefined
      } else if (documents.length === 1) {
        return documents[0]
      } else {
        throw Error(
          'Invalid Query: found more than one element matching the filter.'
        )
      }
    })
    return promise
  }
  promise.list = () => {
    stack.push(async (documents) => 
      documents
    )
    return promise
  }
  promise.tree = () => {
    stack.push(async (documents) =>
      tree(documents)
    )
    return promise
  }
  return promise
}
