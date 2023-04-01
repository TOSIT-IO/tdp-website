import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import engine from '../engine/index.js'

describe('engine.collection.match', async () => {
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
  it('match a document by slug', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/article_2.md', '# Some content'],
      ['./pages/page_1.mdx', '# Some content'],
    ])
    ;(
      await engine(tmpdir)
        .from('blog')
        .match(['article_2'])
        .get()
    ).should.match({
      collection: 'blog',
      slug: ['article_2'],
    })
  })
  it('match a document by object', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/article_2.md', '# Some content'],
      ['./pages/page_1.mdx', '# Some content'],
    ])
    ;(
      await engine(tmpdir)
        .from('blog')
        .match({
          slug: ['article_2'],
        })
        .get()
    ).should.match({
      collection: 'blog',
      slug: ['article_2'],
    })
  })
})
