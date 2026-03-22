import type { PortfolioProjectConfig } from '../../shared/projects'

export const portfolioProjects: PortfolioProjectConfig[] = [
  {
    slug: 'dabenes-dev',
    repo: 'dabenes/dabenes.github.io',
    enabled: true,
    featured: true,
    displayOrder: 1,
    status: 'in_development',
    title: 'dabenes.dev',
    shortDescription:
      'Portfolio frontend con Nuxt, TypeScript e interfaz inspirada en terminal.',
    readmeSummary:
      'Este proyecto actua como portfolio publico y como muestra de arquitectura, integracion API, UI mantenible y despliegue continuo.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind', 'GitHub Pages'],
    websiteUrl: 'https://dabenes.dev'
  }
]
