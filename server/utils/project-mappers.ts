import type {
  PortfolioProjectConfig,
  ProjectDetailDto,
  ProjectLink,
  ProjectSummaryDto
} from '../../shared/projects'

const buildRepoUrl = (repo: string) => `https://github.com/${repo}`

const buildLinks = (project: PortfolioProjectConfig): ProjectLink[] => {
  const links: ProjectLink[] = [
    { label: 'Repository', url: buildRepoUrl(project.repo), kind: 'repository' }
  ]

  if (project.websiteUrl) {
    links.push({ label: 'Website', url: project.websiteUrl, kind: 'website' })
  }

  if (project.demoUrl) {
    links.push({ label: 'Demo', url: project.demoUrl, kind: 'demo' })
  }

  if (project.downloadUrl) {
    links.push({ label: 'Download', url: project.downloadUrl, kind: 'download' })
  }

  return links
}

export const toProjectSummaryDto = (
  project: PortfolioProjectConfig
): ProjectSummaryDto => ({
  slug: project.slug,
  title: project.title ?? project.slug,
  shortDescription:
    project.shortDescription ?? 'Project description not configured yet.',
  status: project.status,
  tags: project.tags,
  featured: project.featured,
  repoUrl: buildRepoUrl(project.repo),
  websiteUrl: project.websiteUrl,
  demoUrl: project.demoUrl,
  downloadUrl: project.downloadUrl
})

export const toProjectDetailDto = (
  project: PortfolioProjectConfig
): ProjectDetailDto => ({
  ...toProjectSummaryDto(project),
  readmeSummary:
    project.readmeSummary ??
    'README summary not configured yet. GitHub sync will populate this later.',
  links: buildLinks(project)
})
