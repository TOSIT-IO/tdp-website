
import fs from 'node:fs/promises'
import path from 'path'
import {glob} from 'glob'
import each from 'each'
import {merge} from 'mixme'

export default async function EngineSource (stores) {
  if (!Array.isArray(stores)) stores = [stores]
  stores = stores
    .map( store => (
      typeof store === 'string'
      ? {cwd: store}
      : store
      // : typeof store === 'object'
      // ? store
      // : throw Error('Invalid Configuration: store must be a string or an object')
    ))
    .filter(Boolean)
    .map( store => merge({cwd: process.cwd(), pattern: "**/*.md?(x)"}, store))
  return (
    await each(stores, async ({pattern, cwd, store}) => {
      let files = await glob(pattern, {cwd: cwd})
      files = await each(files, async file => ({
        path_absolute: path.resolve(cwd, file),
        content_raw: await fs.readFile(path.resolve(cwd, file)),
        path_relative: file,
        store: store || path.basename(cwd)
      }))
      return files
    })
  ).flat(Infinity).sort( (a, b) => a.path_absolute > b.path_absolute ? 1 : -1)
}
