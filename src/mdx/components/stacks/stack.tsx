'use client'

import ComponentTable from './stack-components-table'
import BuildDependenciesTable from './stack-dependencies-table'
import './styles.css'
import {
  Manager as TManager,
  Collection as TCollection,
  Stack as TStack,
} from './types'
import { getReleaseURL, getRepoName } from './utils'

export default function Stack({ stack }: { stack: TStack }) {
  return (
    <div className="relative w-full overflow-auto">
      <Manager manager={stack.manager} />
      <Collection name="Core components" collection={stack.core} />
      <Collection name="Extras components" collection={stack.extras} />
      <Collection
        name="Observability components"
        collection={stack.observability}
      />
    </div>
  )
}

function Manager({ manager }: { manager: TManager }) {
  if (!manager) return <></>

  const libReleaseUrl = getReleaseURL({
    repositoryUrl: manager.lib.repositoryUrl,
    tag: manager.lib.tag,
  })

  return (
    <>
      <h2 className="text-lg font-bold">Manager</h2>
      <p>Managers versions compatible with this stack:</p>
      <ul>
        <li>
          <a href={libReleaseUrl}>tdp-lib {manager.lib.tag}</a>
        </li>
      </ul>
    </>
  )
}

function Collection({
  collection,
  name,
}: {
  collection: TCollection
  name: string
}) {
  const releaseUrl = getReleaseURL({
    repositoryUrl: collection.repositoryUrl,
    tag: collection.tag,
  })
  const repoName = getRepoName({ repositoryUrl: collection.repositoryUrl })

  if (!collection.components.length) {
    return (
      <div className="relative w-full overflow-auto">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>No components referenced for this stack.</p>
      </div>
    )
  }

  return (
    <>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>
        Configured by{' '}
        <a href={releaseUrl}>
          {repoName} {collection.tag}
        </a>
        .
      </p>
      <ComponentTable components={collection.components} />
      {collection.buildDependencies && (
        <>
          <h3 className="text-lg font-bold">{name} build dependencies</h3>
          <BuildDependenciesTable
            buildDependencies={collection.buildDependencies}
          />
        </>
      )}
    </>
  )
}
