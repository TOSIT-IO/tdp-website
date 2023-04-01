import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import engine from '../engine/index.js'

describe('engine.collection.get', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-collection-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })
  it('return undefined if not found', async () => {
    await mklayout(tmpdir, [])
    should(
      await engine(tmpdir)
        .from('blog')
        .match(['invalid'])
        .get()
    ).be.undefined()
  })
  it('return document if single match', async () => {
    await mklayout(tmpdir, [
      ['./blog/article.md', '# Some content'],
    ])
    ;(
      await engine(tmpdir)
        .from('blog')
        .get()
    )
    .should.match({
      slug: ['article'],
    })
  })
  it('error if more than one document', async () => {
    await mklayout(tmpdir, [
      ['./blog/article.en.md', '# Some content'],
      ['./blog/article.fr.md', '# Some content'],
    ])
    engine(tmpdir)
      .from('blog')
      .get()
    .should.be.rejectedWith('Invalid Query: found more than one element matching the filter.')
  })
})
