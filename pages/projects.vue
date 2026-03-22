<template>
  <div class="bg-slate-950 py-20">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mb-10 border border-cyan-400/20 bg-slate-900/50 p-6 backdrop-blur-sm">
        <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
          Projects
        </p>
        <h1 class="mb-3 text-3xl font-semibold text-white">
          Curated portfolio projects
        </h1>
        <p class="max-w-3xl text-sm leading-7 text-slate-300">
          Esta seccion ya consume una API tipada y representa el contrato base del portfolio.
          Aqui apareceran solo los proyectos que yo habilite manualmente para mostrar.
        </p>
      </div>

      <div v-if="status === 'pending'" class="border border-cyan-400/20 bg-slate-900/40 p-6 text-sm text-cyan-200">
        Loading projects...
      </div>

      <div v-else-if="error" class="border border-red-400/20 bg-red-950/20 p-6 text-sm text-red-200">
        Unable to load projects from the portfolio API.
      </div>

      <div v-else-if="!projects.length" class="border border-yellow-400/20 bg-yellow-950/20 p-6 text-sm text-yellow-200">
        No projects are enabled yet.
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.slug"
          class="border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-cyan-400/30"
        >
          <div class="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-white">
                {{ project.title }}
              </h2>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                {{ project.shortDescription }}
              </p>
            </div>

            <span
              class="shrink-0 border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
              :class="statusClassMap[project.status]"
            >
              {{ project.status }}
            </span>
          </div>

          <div class="mb-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="border border-slate-700 px-2 py-1 text-xs text-slate-300"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex flex-wrap gap-3 font-mono text-xs">
            <a
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-cyan-400/30 px-3 py-2 text-cyan-200 transition-colors hover:border-cyan-300 hover:text-white"
            >
              Repository
            </a>
            <a
              v-if="project.websiteUrl"
              :href="project.websiteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-slate-700 px-3 py-2 text-slate-200 transition-colors hover:border-white hover:text-white"
            >
              Website
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-slate-700 px-3 py-2 text-slate-200 transition-colors hover:border-white hover:text-white"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectStatus } from '../shared/projects'

const { data, status, error } = await useProjects()

const projects = computed(() => data.value ?? [])

const statusClassMap: Record<ProjectStatus, string> = {
  live: 'border-green-400/30 text-green-300 bg-green-950/20',
  in_development: 'border-cyan-400/30 text-cyan-300 bg-cyan-950/20',
  maintained: 'border-blue-400/30 text-blue-300 bg-blue-950/20',
  paused: 'border-yellow-400/30 text-yellow-300 bg-yellow-950/20',
  abandoned: 'border-red-400/30 text-red-300 bg-red-950/20'
}
</script>
