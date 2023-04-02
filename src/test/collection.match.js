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
    tmpdir = `${os.tmpdir()}/tdp-test-collection-match-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })
  it('match a document by slug', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md'],
      ['./blog/article_2.md'],
      ['./pages/page_1.mdx'],
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
  it('match a document by lang', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.en.md'],
      ['./blog/article_1.fr.md'],
      ['./blog/article_2.en.mdx'],
      ['./blog/article_2.fr.mdx'],
    ])
    ;(await engine(tmpdir).from('blog').match('fr').list()).should.match([
      {
        collection: 'blog',
        lang: 'fr',
        slug: ['article_1'],
      },
      {
        collection: 'blog',
        lang: 'fr',
        slug: ['article_2'],
      },
    ])
  })
  it('match a document by object', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md'],
      ['./blog/article_2.md'],
      ['./pages/page_1.mdx'],
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
