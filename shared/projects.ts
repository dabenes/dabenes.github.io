export const projectStatuses = [
  'live',
  'in_development',
  'maintained',
  'paused',
  'abandoned'
] as const

export type ProjectStatus = (typeof projectStatuses)[number]

export interface ProjectLink {
  label: string
  url: string
  kind: 'repository' | 'demo' | 'download' | 'website'
}

export interface PortfolioProjectConfig {
  slug: string
  repo: string
  enabled: boolean
  featured: boolean
  displayOrder: number
  status: ProjectStatus
  title?: string
  shortDescription?: string
  readmeSummary?: string
  tags: string[]
  websiteUrl?: string
  demoUrl?: string
  downloadUrl?: string
}

export interface ProjectSummaryDto {
  slug: string
  title: string
  shortDescription: string
  status: ProjectStatus
  tags: string[]
  featured: boolean
  repoUrl: string
  websiteUrl?: string
  demoUrl?: string
  downloadUrl?: string
  updatedAt?: string
}

export interface ProjectDetailDto extends ProjectSummaryDto {
  readmeSummary: string
  links: ProjectLink[]
}

export interface ApiErrorDto {
  statusCode: number
  message: string
}
