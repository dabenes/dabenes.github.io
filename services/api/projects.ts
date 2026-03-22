import type { ProjectDetailDto, ProjectSummaryDto } from '../../shared/projects'

const resolveApiBaseUrl = (baseUrl?: string) => {
  const normalized = baseUrl?.trim()

  if (!normalized) {
    return '/api'
  }

  return normalized.replace(/\/$/, '')
}

const buildUrl = (baseUrl: string | undefined, path: string) =>
  `${resolveApiBaseUrl(baseUrl)}${path}`

export const fetchProjects = async (): Promise<ProjectSummaryDto[]> => {
  const config = useRuntimeConfig()

  return await $fetch<ProjectSummaryDto[]>(
    buildUrl(config.public.apiBaseUrl, '/projects')
  )
}

export const fetchProjectBySlug = async (
  slug: string
): Promise<ProjectDetailDto> => {
  const config = useRuntimeConfig()

  return await $fetch<ProjectDetailDto>(
    buildUrl(config.public.apiBaseUrl, `/projects/${slug}`)
  )
}
