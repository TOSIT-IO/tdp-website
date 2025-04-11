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
  manager?: Manager
  core: Collection
  extras: Collection
  observability: Collection
}

export type Manager = {
  lib: {
    repositoryUrl: string
    tag: string
  }
}

export type Collection = {
  repositoryUrl: string
  tag: string
  components: StackComponent[]
  buildDependencies?: StackBuildDependency[]
}
