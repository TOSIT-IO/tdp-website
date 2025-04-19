'use client'

import ComponentTable from './stack-components-table'
import BuildDependenciesTable from './stack-dependencies-table'
import './styles.css'

export default function Stack({ stack }) {
  return (
    <div className="relative w-full overflow-auto">
      <h2 className="text-lg font-bold">Components</h2>
      <ComponentTable components={stack.components} />
      <p className="opacity-75 -mt-6">
        <small>*Contains some Apache fixes</small>
      </p>
      <h2 className="text-lg font-bold">Build dependencies</h2>
      <BuildDependenciesTable buildDependencies={stack.buildDependencies} />
    </div>
  )
}
