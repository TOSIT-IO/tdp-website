'use client'

import { useState } from 'react'

function getArray(value) {
  return Array.isArray(value) ? value : [value]
}

function getTagURL({ repositoryUrl, tag }) {
  const tagUrl = `${new URL(repositoryUrl).href}/releases/tag/${tag}`
  return tagUrl
}

function getCompareURL({ baseRepositoryUrl, repositoryUrl, baseTag, tag }) {
  const [tositOrg, tositRepo] = new URL(repositoryUrl).pathname
    .split('/')
    .filter(Boolean)
    .slice(-2)
  const compareUrl = `${new URL(
    baseRepositoryUrl
  )}/compare/${baseTag}...${tositOrg}:${tositRepo}:${tag}`
  return compareUrl
}

function parseComponent(component) {
  const baseRow = {
    componentName: component.name,
    baseVersion: component.upstream.version,
    otherColumns: [],
  }
  if (
    !component.upstream.binaryUrl &&
    !component.tosit?.basic &&
    !component.tosit?.fix
  ) {
    console.warn(
      `Missing Apache, basic, or fix information for ${component.name}.`
    )
    return baseRow
  }
  // Add Apache row
  if (component.upstream.binaryUrl) {
    baseRow.otherColumns.push({
      type: component.upstream.label,
      binaries: getArray(component.upstream.binaryUrl),
    })
  }
  // Add basic row
  if (component.tosit?.basic) {
    baseRow.otherColumns.push({
      type: 'basic',
      binaries: getArray(component.tosit.basic.binaryUrl),
      sources: {
        tag: {
          label: component.tosit.basic.tag,
          url: getTagURL({
            repositoryUrl: component.tosit.repositoryUrl,
            tag: component.tosit.basic.tag,
          }),
        },
        compare: {
          with: component.upstream.label,
          url: getCompareURL({
            baseRepositoryUrl: component.upstream.repositoryUrl,
            repositoryUrl: component.tosit.repositoryUrl,
            baseTag: component.upstream.tag,
            tag: component.tosit.basic.tag,
          }),
        },
      },
    })
  }
  // Add fix row
  if (component.tosit?.fix) {
    const otherColumns = {
      type: 'fix',
      binaries: getArray(component.tosit.fix.binaryUrl),
      sources: {
        tag: {
          label: component.tosit.fix.tag,
          url: getTagURL({
            repositoryUrl: component.tosit.repositoryUrl,
            tag: component.tosit.fix.tag,
          }),
        },
      },
    }
    // Add compare infos if the component has a basic tag.
    if (component.tosit.basic) {
      otherColumns.sources.compare = {
        with: 'basic',
        url: getCompareURL({
          baseRepositoryUrl: component.tosit.repositoryUrl,
          repositoryUrl: component.tosit.repositoryUrl,
          baseTag: component.tosit.basic.tag,
          tag: component.tosit.fix.tag,
        }),
      }
      // Fallback with upstream compare.
    } else {
      otherColumns.sources.compare = {
        with: component.upstream.label,
        url: getCompareURL({
          baseRepositoryUrl: component.upstream.repositoryUrl,
          repositoryUrl: component.tosit.repositoryUrl,
          baseTag: component.upstream.tag,
          tag: component.tosit.fix.tag,
        }),
      }
    }
    baseRow.otherColumns.push(otherColumns)
  }
  return baseRow
}

const OtherColumns = ({ column }) => {
  return (
    <>
      <td className="p-4 align-middle">{column.type}</td>
      <td className="flex gap-1 flex-wrap p-4 align-middle">
        {column.sources?.tag && (
          <span className="whitespace-nowrap">
            <a href={column.sources.tag.url}>{column.sources.tag.label}</a>
          </span>
        )}
        {column.sources?.compare && (
          <span>
            {'('}
            <a href={column.sources.compare.url}>
              compare with {column.sources.compare.with}
            </a>
            {')'}
          </span>
        )}
      </td>
      <td className="p-4 align-middle max-w-72">
        <ul>
          {column.binaries.map((url) => (
            <li className="max-w-full overflow-hidden" key={url}>
              <a className="truncate" href={url}>
                {url.split('/').pop()}
              </a>
            </li>
          ))}
        </ul>
      </td>
    </>
  )
}

const TableRow = ({ component }) => {
  const [isGroupHover, setIsGroupHover] = useState(false)
  const [isAChildHover, setIsAChildHover] = useState(false)
  const rowSpan = component.otherColumns.length || 1
  const columns = component.otherColumns.map((column) => (
    <OtherColumns key={column.type} column={column} />
  ))
  return (
    <>
      <tr className={`border-b transition-colors hover:bg-black/10`}>
        <td
          className={`p-4 align-middle font-bold transition-colors ${
            isAChildHover && 'bg-black/10'
          }`}
          rowSpan={rowSpan}
          onMouseEnter={() => setIsGroupHover(true)}
          onMouseLeave={() => setIsGroupHover(false)}
        >
          {component.componentName}
        </td>
        <td
          className={`p-4 align-middle font-medium transition-colors ${
            isAChildHover && 'bg-black/10'
          }`}
          rowSpan={rowSpan}
          onMouseEnter={() => setIsGroupHover(true)}
          onMouseLeave={() => setIsGroupHover(false)}
        >
          {component.baseVersion}
        </td>
        {columns.length ? (
          columns[0]
        ) : (
          <>
            <td></td>
            <td></td>
            <td></td>
          </>
        )}
      </tr>
      {columns.slice(1).map((column, index) => (
        <tr
          className={`border-b transition-colors hover:bg-black/10 ${
            isGroupHover && 'bg-black/10'
          }`}
          onMouseEnter={() => setIsAChildHover(true)}
          onMouseLeave={() => setIsAChildHover(false)}
          key={index}
        >
          {column}
        </tr>
      ))}
    </>
  )
}

const ComponentTable = ({ components }) => {
  return (
    <table className="w-full text-sm">
      <thead className="border-b">
        <tr className="transition-colors bg-black/10">
          <th className="px-4 text-left align-middle font-medium">
            Component Name
          </th>
          <th className="px-4 text-left align-middle font-medium">
            Base Version
          </th>
          <th className="px-4 text-left align-middle font-medium">Type</th>
          <th className="px-4 text-left align-middle font-medium">Source</th>
          <th className="px-4 text-left align-middle font-medium">Binaries</th>
        </tr>
      </thead>
      <tbody>
        {components.map((component) => (
          <TableRow
            key={component.name}
            component={parseComponent(component)}
          />
        ))}
      </tbody>
    </table>
  )
}

function StackTables({ stack }) {
  return (
    <div className="relative w-full overflow-auto">
      <h3 className="text-lg font-bold">Components</h3>
      <ComponentTable components={stack.components} />
      <p className="opacity-75 -mt-6">
        <small>*Contains some Apache fixes</small>
      </p>
      <h3 className="text-lg font-bold">Dependencies</h3>
      <ComponentTable components={stack.dependencies} />
    </div>
  )
}

export default StackTables
