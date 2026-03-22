<template>
  <div class="bg-slate-950 py-10">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mb-8 rounded-lg border border-cyan-400/20 bg-slate-900/50 p-6 backdrop-blur-sm">
        <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
          {{ t('routes.stack') }}
        </p>
        <h1 class="mb-3 text-3xl font-semibold text-white">
          Stack, herramientas y practicas
        </h1>
        <p class="max-w-3xl text-sm leading-7 text-slate-300">
          Aqui esta el mapa completo de tecnologias y capacidades. La landing resume lo esencial;
          esta pagina entra ya en el detalle real de como trabajo y que suelo tocar.
        </p>
      </div>

      <section class="rounded-lg border border-cyan-400/10 bg-slate-900/40 p-6 backdrop-blur-sm md:p-7">
        <div class="mb-4 flex items-center justify-between gap-4 border-b border-cyan-400/10 pb-3">
          <h2 class="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            Full map
          </h2>

          <p class="text-xs text-slate-400">
            Click para ampliar contexto
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          <div
            v-for="category in categories"
            :key="category.key"
            class="min-w-0"
          >
            <p class="mb-3 font-mono text-xs" :class="category.titleClass">
              * {{ t(category.titleKey) }}
            </p>

            <div class="space-y-2 text-sm text-slate-300">
              <div
                v-for="item in category.items"
                :key="item.key"
                class="flex items-center gap-2"
              >
                <span :class="category.arrowClass">></span>
                <button
                  type="button"
                  class="text-left transition-colors hover:text-cyan-200"
                  @click="openPanel(item.key)"
                >
                  {{ t(item.translationKey) }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <LandingSkillPanel
      :open="panelOpen"
      :panel-title="t('panel.title')"
      :close-hint="t('panel.closeHint')"
      :entry="current"
      @close="closePanel"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLandingSkills } from '~/composables/useLandingSkills'

const { categories } = useLandingSkills()
const { t } = useI18n()

const panelOpen = ref(false)
const selectedKey = ref<string | null>(null)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closePanel()
  }
}

const openPanel = (key: string) => {
  selectedKey.value = key
  panelOpen.value = true
}

const closePanel = () => {
  panelOpen.value = false
}

type Entry = {
  title: string
  body: string[]
}

const current = computed<Entry>(() => {
  if (!selectedKey.value) {
    return { title: '', body: [] }
  }

  const description = t(`descriptions.${selectedKey.value}`)

  if (typeof description === 'object' && description !== null && 'title' in description) {
    return description as Entry
  }

  return {
    title: selectedKey.value,
    body: [t('panel.notAvailable')]
  }
})
</script>
