import { BinariesColumn, SourceColumn, TypeColumn } from './shared'
import { StackComponent } from './types'
import { getCompareURL, getTagURL } from './utils'

function getUpstreamReleaseColumns(
  component: StackComponent
): JSX.Element | undefined {
  if (!component.upstream.binaryUrl) return
  return (
    <>
      <TypeColumn type="upstream" />
      <SourceColumn
        tag={{
          label: component.upstream.tag,
          url: getTagURL({
            repositoryUrl: component.upstream.repositoryUrl,
            tag: component.upstream.tag,
          }),
        }}
      />
      <BinariesColumn binaries={component.upstream.binaryUrl} />
    </>
  )
}

function getBasicReleaseColumns(
  component: StackComponent
): JSX.Element | undefined {
  if (!component.tosit?.releases?.basic) return
  return (
    <>
      <TypeColumn type="basic" />
      <SourceColumn
        tag={{
          label: component.tosit.releases.basic.tag,
          url: getTagURL({
            repositoryUrl: component.tosit.repositoryUrl,
            tag: component.tosit.releases.basic.tag,
          }),
        }}
        compare={{
          label: 'upstream',
          url: getCompareURL({
            baseRepositoryUrl: component.upstream.repositoryUrl,
            repositoryUrl: component.tosit.repositoryUrl,
            baseTag: component.upstream.tag,
            tag: component.tosit.releases.basic.tag,
          }),
        }}
      />
      <BinariesColumn binaries={component.tosit.releases.basic.binaryUrl} />
    </>
  )
}

function getFixReleaseColumns(
  component: StackComponent
): JSX.Element | undefined {
  if (!component.tosit?.releases?.fix) return
  return (
    <>
      <TypeColumn type="fix" />
      <SourceColumn
        tag={{
          label: component.tosit.releases.fix.tag,
          url: getTagURL({
            repositoryUrl: component.tosit.repositoryUrl,
            tag: component.tosit.releases.fix.tag,
          }),
        }}
        compare={
          component.tosit?.releases?.basic
            ? {
                label: component.tosit.releases.basic.tag,
                url: getCompareURL({
                  baseRepositoryUrl: component.tosit.repositoryUrl,
                  repositoryUrl: component.tosit.repositoryUrl,
                  baseTag: component.tosit.releases.basic.tag,
                  tag: component.tosit.releases.fix.tag,
                }),
              }
            : {
                label: 'upstream',
                url: getCompareURL({
                  baseRepositoryUrl: component.upstream.repositoryUrl,
                  repositoryUrl: component.tosit.repositoryUrl,
                  baseTag: component.upstream.tag,
                  tag: component.tosit.releases.fix.tag,
                }),
              }
        }
      />
      <BinariesColumn binaries={component.tosit.releases.fix.binaryUrl} />
    </>
  )
}

function getReleasesColumns(component: StackComponent): JSX.Element[] {
  const columns = [
    getUpstreamReleaseColumns(component),
    getBasicReleaseColumns(component),
    getFixReleaseColumns(component),
  ].filter(Boolean)
  if (columns.length) {
    return columns
  }
  return [
    <td colSpan={3} className="text-center align-middle" key="empty">
      No releases available
    </td>,
  ]
}

function ComponentTableRow({ component }: { component: StackComponent }) {
  const [firstRelease, ...otherReleases] = getReleasesColumns(component)
  const rowSpan = 1 + otherReleases.length
  return (
    <tbody>
      <tr className="border-b">
        <th
          scope={rowSpan > 1 ? 'rowgroup' : 'row'}
          className="py-2 align-middle font-bold"
          rowSpan={rowSpan}
        >
          {component.name}
        </th>
        <td className="py-2 align-middle" rowSpan={rowSpan}>
          {component.upstream.version}
        </td>
        {firstRelease}
      </tr>
      {otherReleases.map((release, index) => (
        <tr className="border-b" key={index}>
          {release}
        </tr>
      ))}
    </tbody>
  )
}

export default function ComponentTable({
  components,
}: {
  components: StackComponent[]
}) {
  return (
    <>
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
            <th scope="col" className="px-1 text-left align-middle">
              Binaries
            </th>
          </tr>
        </thead>
        {components.map((component) => (
          <ComponentTableRow key={component.name} component={component} />
        ))}
      </table>
      <p className="opacity-75 -mt-6">
        <small>*Contains some Apache fixes</small>
      </p>
    </>
  )
}
