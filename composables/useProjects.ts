import { fetchProjects } from '../services/api/projects'

export const useProjects = () =>
  useAsyncData('portfolio-projects', async () => await fetchProjects())
