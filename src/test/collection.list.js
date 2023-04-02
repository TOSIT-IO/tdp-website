import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import engine from '../engine/index.js'

describe('engine.collection.list', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-collection-list-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })
  it('list all documents, no filter', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md'],
      ['./blog/article_2.md'],
      ['./pages/page_1.mdx'],
    ])
    ;(
      await engine(tmpdir).from('blog').list()
    ).should.match([
      {
        collection: 'blog',
        slug: ['article_1'],
      },
      {
        collection: 'blog',
        slug: ['article_2'],
      },
    ])
  })
  it('with `.filter`', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.fr.md'],
      ['./blog/article_1.en.md'],
      ['./blog/article_1.de.md'],
      ['./blog/article_2.fr.md'],
      ['./blog/article_2.en.md'],
    ])
    ;(
      await engine(tmpdir)
        .from('blog')
        .filter((document) => (['fr', 'de'].includes(document.lang)))
        .list()
    ).should.match([
      {
        lang: 'de',
        slug: ['article_1'],
      },
      {
        lang: 'fr',
        slug: ['article_1'],
      },
      {
        lang: 'fr',
        slug: ['article_2'],
      },
    ])
  })
})
