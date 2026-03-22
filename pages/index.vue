<template>
  <div class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-3 md:py-4">
    <div class="mx-auto w-full max-w-[1860px] px-4 md:px-6">
      <div class="grid gap-5 xl:grid-cols-[250px_minmax(0,1.35fr)_minmax(340px,0.82fr)] xl:items-start">
        <LandingProfileCard
          :github-url="config.public.githubUrl"
          :linkedin-url="config.public.linkedinUrl"
          :email="config.public.contactEmail"
        />

        <LandingHeroCard
          :owner-name="ownerName"
          :title="heroTitle"
          :description="heroDescription"
          :highlights="highlights"
        />

        <LandingSkillsGrid :groups="signalGroups" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFakeTerminal } from '~/composables/useTerminalNotification'
import type { LandingSignalGroup } from '~/components/landing/LandingSkillsGrid.vue'

const { info } = useFakeTerminal()
const { t } = useI18n()

const config = useRuntimeConfig()
const ownerName = computed(() => config.public.ownerName || 'David Benito Escribano')
const ownerNick = computed(() => config.public.ownerNick || 'dabenes')
const heroTitle = computed(() =>
  'Backend Engineer (.NET) · APIs · Fullstack cuando hace falta'
)
const heroDescription = computed(() =>
  'Desarrollo servicios y APIs mantenibles con foco en arquitectura por capas, SQL y decisiones tecnicas pensadas para produccion. Mi perfil es principalmente backend en .NET y C#, con capacidad fullstack en Vue y TypeScript cuando el sistema o el producto lo requieren.'
)

const highlights = computed(() => [
  '.NET',
  'APIs',
  'SQL',
  'Arquitectura por capas',
  'C#',
  'Vue',
  'TypeScript',
  'Tests unitarios'
])

const signalGroups = computed<LandingSignalGroup[]>(() => [
  {
    label: 'Backend',
    items: ['.NET', 'APIs', 'SQL']
  },
  {
    label: 'Arquitectura',
    items: ['Arquitectura por capas', 'C#', 'Tests unitarios']
  },
  {
    label: 'Frontend',
    items: ['Vue', 'TypeScript']
  }
])

onMounted(() => {
  const hasVisited = localStorage.getItem('portfolio_visited')

  if (!hasVisited) {
    setTimeout(() => {
      const welcome = t('welcome', {
        owner: ownerNick.value,
        portfolio: t('labels.portfolio')
      })

      info(welcome, 5000)
      localStorage.setItem('portfolio_visited', 'true')
    }, 500)
  }
})
</script>
