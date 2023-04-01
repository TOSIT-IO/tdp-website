

export default function collection (engine, collection) {
  return {
    get: function (filter) {
      const stack = []
      const promise = new Promise((resolve, reject) => {
        setImmediate(async () => {
          let entries = []
          try {
            for (const fn of stack) {
              entries = await fn(entries)
              if (!entries) break
            }
          } catch (error) {
            return reject(error)
          }
          if (!entries || entries.length === 0) {
            resolve(undefined)
          } else if (entries.length === 1) {
            resolve(entries[0])
          } else {
            reject(
              Error(
                'Invalid Query: found more than one element matching the filter.'
              )
            )
          }
        })
      })
      stack.push(() => {
        return this.find(filter)
      })
      promise.map = (fn) => {
        stack.push(async (entries) => {
          for(const i in entries){
            entries[i] = await fn(entries[i])
          }
          return entries
        })
        return promise
      }
      return promise
    },
    find: function (filter = {}) {
      if (filter === 'string') {
        filter = { slug: filter }
      }
      const stack = []
      const promise = new Promise((resolve, reject) => {
        setImmediate(async () => {
          let entries = await engine.db
          try {
            for (const fn of stack) {
              entries = await fn(entries)
            }
          } catch (error) {
            return reject(error)
          }
          resolve(entries)
        })
      })
      stack.push((entries) => {
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
      })
      promise.map = (fn) => {
        stack.push(async (entries) => {
          for(const i in entries){
            entries[i] = await fn(entries[i])
          }
          return entries
        })
        return promise
      }
      promise.filter = (fn) => {
        stack.push(async (entries) => {
          for(const i in entries){
            const preserve = await fn(entries[i])
            if(!preserve){
              entries[i] = undefined
            }
          }
          return entries.filter(Boolean)
        })
        return promise
      }
      return promise
    },
  }
}
