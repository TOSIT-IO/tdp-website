export function TypeColumn({ type }: { type: string }): JSX.Element {
  return (
    <td className="py-2 px-1 h-full align-middle not-prose">
      <span className="">{type}</span>
    </td>
  )
}

export function SourceColumn({
  tag,
  compare,
}: {
  tag: {
    label: string
    url: string
  }
  compare?: {
    label: string
    url: string
  }
}) {
  return (
    <td className="h-full py-2 align-middle">
      <p className="!my-0">
        <a href={tag.url}>{tag.label}</a>
      </p>
      {compare && (
        <p className="whitespace-nowrap !my-0">
          {' ('}
          <a href={compare.url}>compare with {compare.label}</a>
          {')'}
        </p>
      )}
    </td>
  )
}

export function BinariesColumn({ binaries }: { binaries: string | string[] }) {
  const binariesArray = Array.isArray(binaries) ? binaries : [binaries]
  return (
    <td className="py-2 h-full max-w-72 align-middle">
      <ul className="list-none p-0 !m-0">
        {binariesArray.map((url) => (
          <li className="max-w-full overflow-hidden !my-0" key={url}>
            <span className="truncate">
              <a href={url}>{url.split('/').pop()}</a>
            </span>
          </li>
        ))}
      </ul>
    </td>
  )
}
