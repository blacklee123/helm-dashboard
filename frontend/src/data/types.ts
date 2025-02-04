export interface Chart {
  id: string
  name: string
  home: string
  sources: string[]
  version: string
  description: string
  keywords: string[]
  maintainers: {
    name: string
    url: string
  }[]
  icon: string
  apiVersion: string
  appVersion: string
  annotations: {
    category: string
    licenses: string
  }
  dependencies: {
    name: string
    version: string
    repository: string
    condition?: string
    tags?: string[]
  }[]
  urls: string[]
  created: string
  digest: string
}

export interface Release {
  id: string
  name: string
  namespace: string
  revision: number
  updated: string
  status: string
  chart: string
  chart_name: string
  chart_ver: string
  app_version: string
  icon: string
  description: string
  has_tests: boolean
  chartName: string // duplicated in some cases in the backend, we need to resolve this
  chartVersion: string // duplicated in some cases in the backend, we need to resolve this
}

export interface ReleaseHealthStatus {
  kind: string
  apiVersion: string
  metadata: {
    name: string
    namespace: string
    creationTimestamp?: string
    labels: {
      [key: string]: string
    }
  }
  spec: unknown
  status: {
    conditions: [
      {
        type: string
        status: string
        lastProbeTime: string
        lastTransitionTime?: string
        reason: string
      },
    ]
  }
}

export interface Repository {
  name: string
  url: string
}

export interface ReleaseRevision {
  revision: number
  updated: string
  status: string
  chart: string
  app_version: string
  description: string
  chart_name: string
  chart_ver: string
  has_tests: boolean
}

export interface Cluster {
  IsCurrent: boolean
  Name: string
  Cluster: string
  AuthInfo: string
  Namespace: string
}

export interface Status {
  CurVer: string
  LatestVer: string
  Analytics: boolean
  CacheHitRatio: number
  ClusterMode: boolean
}

export interface ChartVersion {
  name: string
  version: string
  app_version: string
  description: string
  installed_namespace: string
  installed_name: string
  repository: string
  urls: string[]
  isSuggestedRepo: boolean
}

export interface InstallChartModalProps {
  isOpen: boolean
  onClose: () => void
  chartName: string
  currentlyInstalledChartVersion?: string
  latestVersion?: string
  isUpgrade?: boolean
  latestRevision?: number
}

export type NonEmptyArray<T> = [T, ...T[]]
