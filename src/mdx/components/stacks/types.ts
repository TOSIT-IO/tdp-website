export type StackComponent = {
  name: string
  upstream: {
    label: string
    version: string
    repositoryUrl: string
    tag: string
    binaryUrl?: string | string[]
  }
  tosit?: {
    repositoryUrl: string
    releases?: Partial<{
      basic: {
        tag: string
        binaryUrl: string | string[]
      }
      fix: {
        tag: string
        binaryUrl: string | string[]
      }
    }>
  }
}

export type StackBuildDependency = {
  name: string
  upstream: {
    label: string
    version: string
    repositoryUrl: string
    tag: string
  }
  tosit: {
    repositoryUrl: string
    sources: Partial<{ basic: { tag: string }; fix: { tag: string } }>
  }
}

export type Stack = {
  components: StackComponent[]
  buildDependencies?: StackBuildDependency[]
}
