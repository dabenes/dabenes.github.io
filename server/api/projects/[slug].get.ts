import { createError } from 'h3'
import { portfolioProjects } from '../../data/projects.config'
import { toProjectDetailDto } from '../../utils/project-mappers'

export default defineEventHandler(event => {
  const slug = getRouterParam(event, 'slug')
  const project = portfolioProjects.find(
    current => current.enabled && current.slug === slug
  )

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found'
    })
  }

  return toProjectDetailDto(project)
})
