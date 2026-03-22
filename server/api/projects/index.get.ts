import { portfolioProjects } from '../../data/projects.config'
import { toProjectSummaryDto } from '../../utils/project-mappers'

export default defineEventHandler(() => {
  return portfolioProjects
    .filter(project => project.enabled)
    .sort((left, right) => left.displayOrder - right.displayOrder)
    .map(toProjectSummaryDto)
})
