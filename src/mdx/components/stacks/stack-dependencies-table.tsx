import { SourceColumn, TypeColumn } from './shared'
import { StackBuildDependency } from './types'
import { getCompareURL, getTagURL } from './utils'

function getBasicSourceColumns(
  buildDependency: StackBuildDependency
): JSX.Element | undefined {
  if (!buildDependency.tosit?.sources?.basic) return
  return (
    <>
      <TypeColumn type="basic" />
      <SourceColumn
        tag={{
          label: buildDependency.tosit.sources.basic.tag,
          url: getTagURL({
            repositoryUrl: buildDependency.tosit.repositoryUrl,
            tag: buildDependency.tosit.sources.basic.tag,
          }),
        }}
        compare={{
          label: 'upstream',
          url: getCompareURL({
            baseRepositoryUrl: buildDependency.upstream.repositoryUrl,
            repositoryUrl: buildDependency.tosit.repositoryUrl,
            baseTag: buildDependency.upstream.tag,
            tag: buildDependency.tosit.sources.basic.tag,
          }),
        }}
      />
    </>
  )
}
function getFixSourceColumns(
  buildDependency: StackBuildDependency
): JSX.Element | undefined {
  if (!buildDependency.tosit?.sources?.fix) return
  return (
    <>
      <TypeColumn type="fix" />
      <SourceColumn
        tag={{
          label: buildDependency.tosit.sources.fix.tag,
          url: getTagURL({
            repositoryUrl: buildDependency.tosit.repositoryUrl,
            tag: buildDependency.tosit.sources.fix.tag,
          }),
        }}
        compare={
          buildDependency.tosit?.sources?.basic
            ? {
                label: buildDependency.tosit.sources.basic.tag,
                url: getCompareURL({
                  baseRepositoryUrl: buildDependency.tosit.repositoryUrl,
                  repositoryUrl: buildDependency.tosit.repositoryUrl,
                  baseTag: buildDependency.tosit.sources.basic.tag,
                  tag: buildDependency.tosit.sources.fix.tag,
                }),
              }
            : {
                label: 'upstream',
                url: getCompareURL({
                  baseRepositoryUrl: buildDependency.upstream.repositoryUrl,
                  repositoryUrl: buildDependency.tosit.repositoryUrl,
                  baseTag: buildDependency.upstream.tag,
                  tag: buildDependency.tosit.sources.fix.tag,
                }),
              }
        }
      />
    </>
  )
}

function getSourcesColumns(
  buildDependency: StackBuildDependency
): JSX.Element[] {
  const columns = [
    getBasicSourceColumns(buildDependency),
    getFixSourceColumns(buildDependency),
  ].filter(Boolean)
  if (columns.length) {
    return columns
  }
  return [
    <td colSpan={3} className="text-center align-middle" key="empty">
      No sources available
    </td>,
  ]
}

function BuildDependencyTableRow({
  buildDependency,
}: {
  buildDependency: StackBuildDependency
}) {
  const [firstSource, ...otherSources] = getSourcesColumns(buildDependency)
  const rowSpan = 1 + otherSources.length
  return (
    <tbody>
      <tr className="border-b">
        <th
          scope={rowSpan > 1 ? 'rowgroup' : 'row'}
          className="py-2 align-middle font-bold"
          rowSpan={rowSpan}
        >
          {buildDependency.name}
        </th>
        <td className="py-2 align-middle" rowSpan={rowSpan}>
          {buildDependency.upstream.version}
        </td>
        {firstSource}
      </tr>
      {otherSources.map((source, index) => (
        <tr className="border-b" key={index}>
          {source}
        </tr>
      ))}
    </tbody>
  )
}

export default function BuildDependenciesTable({
  buildDependencies,
}: {
  buildDependencies: StackBuildDependency[]
}) {
  return (
    <table className="w-full text-sm">
      <thead className="border-b">
        <tr className="bg-black/10">
          <th scope="col" className="px-1 text-left align-middle">
            Component Name
          </th>
          <th scope="col" className="px-1 text-left align-middle">
            Base Version
          </th>
          <th scope="col" className="px-1 text-left align-middle">
            Type
          </th>
          <th scope="col" className="px-1 text-left align-middle">
            Source
          </th>
        </tr>
      </thead>
      {buildDependencies.map((dependency) => (
        <BuildDependencyTableRow
          key={dependency.name}
          buildDependency={dependency}
        />
      ))}
    </table>
  )
}
