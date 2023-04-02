import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import {enrich, sort, source} from '../engine/index.js'

describe('engine.sort', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-sort-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })

  it('sort by levels', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md'],
      ['./blog/01.path/01.b_dir/article_2/index.fr.mdx'],
      ['./blog/01.path/01.b_dir/01.article_3/index.fr.mdx'],
      ['./blog/01.path/02.a_dir/article_4.fr.mdx'],
      ['./blog/01.path/02.a_dir/02.article_5.fr.mdx'],
    ])
    sort(
      enrich(
        await source(tmpdir)
      )
    )
    .map( document => ({
      slug: document.slug
    }))
    .should.eql([
      { slug: [ 'article_1' ] },
      { slug: [ 'path', 'a_dir', 'article_5' ] },
      { slug: [ 'path', 'a_dir', 'article_4' ] },
      { slug: [ 'path', 'b_dir', 'article_3' ] },
      { slug: [ 'path', 'b_dir', 'article_2' ] },
    ])
  })

  it('with a mess of parent position', async () => {
    await mklayout(tmpdir, [
      ['./blog/index.md'],
      ['./blog/article_1.md'],
      ['./blog/path/01.b_dir/article_2/index.fr.mdx'],
      ['./blog/01.path/01.b_dir/01.article_3/index.fr.mdx'],
      ['./blog/01.path/02.a_dir/article_4.fr.mdx'],
      ['./blog/01.path/02.a_dir/02.article_5.fr.mdx'],
    ])
    sort(
      enrich(
        await source(tmpdir)
      )
    )
    .map( document => ({
      slug: document.slug
    }))
    .should.eql([
      { slug: [ ] },
      { slug: [ 'article_1' ] },
      { slug: [ 'path', 'a_dir', 'article_5' ] },
      { slug: [ 'path', 'a_dir', 'article_4' ] },
      { slug: [ 'path', 'b_dir', 'article_3' ] },
      { slug: [ 'path', 'b_dir', 'article_2' ] },
    ])
  })
})
