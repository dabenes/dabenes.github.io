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
import type { LandingSignalGroup } from '~/components/landing/LandingSkillsGrid.vue'
import { useLandingSkills } from '~/composables/useLandingSkills'
import { useFakeTerminal } from '~/composables/useTerminalNotification'

const { info } = useFakeTerminal()
const { t } = useI18n()
const { categories } = useLandingSkills()

const config = useRuntimeConfig()
const ownerName = computed(() => config.public.ownerName || 'David Benito Escribano')
const ownerNick = computed(() => config.public.ownerNick || 'dabenes')
const heroTitle = computed(() => t('hero.title'))
const heroDescription = computed(() => t('hero.description'))

const highlights = computed(() =>
  categories
    .flatMap((category) => category.items.map((item) => t(item.translationKey)))
    .filter((value, index, values) => values.indexOf(value) === index)
)

const signalGroups = computed<LandingSignalGroup[]>(() =>
  categories.map((category) => ({
    label: t(category.titleKey),
    items: category.items.map((item) => t(item.translationKey))
  }))
)

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
