
# Query the dataset

Collection are fetch with a flexible API. It allows to filter and transform the resulting documents.

To query a collection, use `from(collection)` followed additionnal utility functions if necessary.

This is the list of utility function:

- `get`
  Retrieve zero or one documents. An error is thrown if more than one document matches the query.
- `list`
  Retrieved all the selected documents. The function is not required, it is more for cosmetics.
- `map`
  Apply asynchronous transformations to every documents. The returned value is the final document to be retrieved. This is the place to reduce the document to a selection of properties.
- `filter`
  Apply asynnchronous filter to every document. The return values is a boolean indicating if the document is preserved or skipped.
- `match`
  An object for which every property must match for the document to be preserved or it is skipped.

## Filtering documents with `filter`

Filter expects a user function which receives the candidate document and which returns a boolean. One documents which returns `true` are preserved.

Multiple filters are allowed.

```js
engine(['./content'])
  .from('blog')
  .filter( document => document.lang === 'fr')
  .filter( document => document.data.public === 'true')
```

## Filtering documents with `match`

Match receives an object and compare its value with the one present in a document. Only the documents whoses properties fully match the provided ones are conserved.

```js
engine(['./content'])
  .from('blog')
  .match({
    lang: 'fr',
    data: {
      public: 'true'
    }
  })
```

It is possible to filter by lang when the argument is a string.

```js
engine(['./content'])
  .from('blog')
  .match('fr')
```

It is possible to filter by slug when the argument is an array.

```js
engine(['./content'])
  .from('blog')
  .match(['path','to','parent'])
```

Multiple arguments as string, array and 'object' can be combined.

```js
engine(['./content'])
  .from('blog')
  .match('fr', ['path','to','parent'])
```

## Obtaining a document with `get`

Get returns a single document or undefined if not document is found.

```js
engine(['./content'])
  .from('blog')
  .match(['path', 'to', 'document'])
  .get()
```

In case when more than one document is found, an error is thrown.

```js
try {
  engine(['./content'])
  .from('blog')
  .get()
} catch(error) {
  console.error(error)
}
```

## Obtaining documents with `list`

This is a cosmetic function to return documents.

```js
engine(['./content'])
  .from('blog')
  .match('en')
  .list()
```

It is equivalent to:

```js
engine(['./content'])
  .from('blog')
  .match('en')
```
