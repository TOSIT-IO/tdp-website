export function getTagURL({
  repositoryUrl,
  tag,
}: {
  repositoryUrl: string
  tag: string
}) {
  const tagUrl = `${new URL(repositoryUrl).href}/releases/tag/${tag}`
  return tagUrl
}

export function getCompareURL({
  baseRepositoryUrl,
  repositoryUrl,
  baseTag,
  tag,
}: {
  baseRepositoryUrl: string
  repositoryUrl: string
  baseTag: string
  tag: string
}) {
  const [tositOrg, tositRepo] = new URL(repositoryUrl).pathname
    .split('/')
    .filter(Boolean)
    .slice(-2)
  const compareUrl = `${new URL(
    baseRepositoryUrl
  )}/compare/${baseTag}...${tositOrg}:${tositRepo}:${tag}`
  return compareUrl
}
