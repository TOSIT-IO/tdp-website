
# Layout

The dataset is organized by collections. Inside a collection are stored documents which may be organized hierarchically.

## Discovery

The engine is initialized with one or multiple stores defining where and how to source collections and their documents.

A collection may be sourced from multiple stores, in which case all the documents found in the stores, assuming they share the same collection, are collected along side.

Consider the following layout:

```
+ blog                              + store
  + authors                           + collection
    | gollum.md                         | document
  + articles                          + collection
    | a-blog-article.md                 | document
+ website                           + store
  + authors                           + collection
    | bilbo.md                          | document
  + pages                             + collection
    | a-website-page.md                 | document
```

There are two stores, blog and website. They could be localized next to each other or not. Both stores contain the author collection. When sourced, all authors are available:

```js
const authors = await engine(['./blog', './website])
  .from(author)
  .map( document => {slug: document.slug})
  .list()
assert.deepEqual(authors, [
  {
    slug: ['bilbo']
  }, {
    slug: ['gollum']
  }
])
```
