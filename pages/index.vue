<template>
  <div class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-8">
    <div class="container mx-auto px-4 max-w-3xl">

      <div class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-400/20 rounded-lg p-8 backdrop-blur-sm mb-8">
        <div class="space-y-6">
          <div>
            <h1 class="text-2xl font-bold text-white mb-2">{{ ownerName }}</h1>
            <p class="text-cyan-300 font-mono text-sm">{{ t('hero.title') }}</p>
          </div>

          <p class="text-gray-300 leading-relaxed whitespace-pre-line">
            {{ t('hero.description') }}
          </p>

          <div class="pt-4 border-t border-cyan-400/10">
            <div class="grid grid-cols-5 gap-4">
              <div>
                <p class="text-blue-300 font-mono text-xs mb-3">• {{ t('categories.stack') }}</p>
                <div class="space-y-2 text-gray-300 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">→</span>
                    <button type="button" @click="openPanel('stack.net8')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.stack.net8') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">→</span>
                    <button type="button" @click="openPanel('stack.csharp12')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.stack.csharp12') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">→</span>
                    <button type="button" @click="openPanel('stack.sqlserver')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.stack.sqlserver') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">→</span>
                    <button type="button" @click="openPanel('stack.orm')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.stack.orm') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">→</span>
                    <button type="button" @click="openPanel('stack.restapis')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.stack.restapis') }}</button>
                  </div>
                </div>
              </div>

              <div>
                <p class="text-green-300 font-mono text-xs mb-3">• {{ t('categories.frontend') }}</p>
                <div class="space-y-2 text-gray-300 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">→</span>
                    <button type="button" @click="openPanel('frontend.vue3')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.frontend.vue3') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">→</span>
                    <button type="button" @click="openPanel('frontend.javascript')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.frontend.javascript') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">→</span>
                    <button type="button" @click="openPanel('frontend.typescript5')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.frontend.typescript5') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">→</span>
                    <button type="button" @click="openPanel('frontend.tailwind')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.frontend.tailwind') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">→</span>
                    <button type="button" @click="openPanel('frontend.htmlcss')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.frontend.htmlcss') }}</button>
                  </div>
                </div>
              </div>

              <div>
                <p class="text-yellow-300 font-mono text-xs mb-3">• {{ t('categories.infra') }}</p>
                <div class="space-y-2 text-gray-300 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">→</span>
                    <button type="button" @click="openPanel('infra.docker')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.infra.docker') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">→</span>
                    <button type="button" @click="openPanel('infra.gitci')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.infra.gitci') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">→</span>
                    <button type="button" @click="openPanel('infra.cloudflare')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.infra.cloudflare') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">→</span>
                    <button type="button" @click="openPanel('infra.ghactions')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.infra.ghactions') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">→</span>
                    <button type="button" @click="openPanel('infra.linux')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.infra.linux') }}</button>
                  </div>
                </div>
              </div>

              <div>
                <p class="text-purple-300 font-mono text-xs mb-3">• {{ t('categories.languages') }}</p>
                <div class="space-y-2 text-gray-300 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">→</span>
                    <button type="button" @click="openPanel('lang.csharp')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.languages.csharp') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">→</span>
                    <button type="button" @click="openPanel('lang.tsjs')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.languages.tsjs') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">→</span>
                    <button type="button" @click="openPanel('lang.sql')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.languages.sql') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">→</span>
                    <button type="button" @click="openPanel('lang.java')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.languages.java') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">→</span>
                    <button type="button" @click="openPanel('lang.c_cpp')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.languages.c_cpp') }}</button>
                  </div>
                </div>
              </div>

              <div>
                <p class="text-red-300 font-mono text-xs mb-3">• {{ t('categories.practices') }}</p>
                <div class="space-y-2 text-gray-300 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-red-400">→</span>
                    <button type="button" @click="openPanel('practices.cleancode')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.practices.cleancode') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-red-400">→</span>
                    <button type="button" @click="openPanel('practices.architecture')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.practices.architecture') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-red-400">→</span>
                    <button type="button" @click="openPanel('practices.apidesign')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.practices.apidesign') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-red-400">→</span>
                    <button type="button" @click="openPanel('practices.testing')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.practices.testing') }}</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-red-400">→</span>
                    <button type="button" @click="openPanel('practices.observability')" class="text-left hover:text-cyan-200 transition-colors">{{ t('skills.practices.observability') }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="panelOpen" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-slate-950/70" @click="closePanel"></div>
      <div class="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-gradient-to-b from-slate-900/95 to-slate-950/95 border-l border-cyan-400/20 shadow-xl">
        <div class="flex items-center justify-between px-4 py-3 border-b border-cyan-400/20">
          <h2 class="text-cyan-200 font-mono text-sm">{{ t('panel.title') }}</h2>
          <button type="button" @click="closePanel" class="text-cyan-300 hover:text-white font-mono text-xs">{{ t('panel.closeHint') }}</button>
        </div>
        <div class="p-4 overflow-y-auto h-full">
          <div v-if="current.title" class="mb-2">
            <p class="text-gray-300 text-sm"><span class="text-cyan-300">›</span> {{ current.title }}</p>
          </div>
          <div class="space-y-3">
            <p v-for="(p, idx) in current.body" :key="idx" class="text-gray-400 text-sm leading-relaxed">
              {{ p }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFakeTerminal } from '~/composables/useTerminalNotification'
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { success, error, warning, info } = useFakeTerminal()

onMounted(() => {
  const hasVisited = localStorage.getItem('portfolio_visited')
  
  if (!hasVisited) {
    setTimeout(() => {
      const welcome = t('welcome', { owner: ownerNick.value, portfolio: t('labels.portfolio') })
      info(welcome, 5000)
      localStorage.setItem('portfolio_visited', 'true')
    }, 500)
  }
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})

const testNotification = () => {
  const notifications = [
    () => success('[OK] Operation completed successfully'),
    () => error('[ERROR] Connection failed'),
    () => warning('[WARN] Low disk space'),
    () => info('[INFO] Loading data...')
  ]
  
  if (!notifications.length) return

  const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
  randomNotification?.()
}

const panelOpen = ref(false)
const selectedKey = ref<string | null>(null)

const config = useRuntimeConfig()
const ownerName = computed(() => config.public.ownerName || 'David Benito Escribano')
const ownerNick = computed(() => config.public.ownerNick || 'dabenes')
const { t } = useI18n()

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closePanel()
}

const openPanel = (key: string) => {
  selectedKey.value = key
  panelOpen.value = true
}

const closePanel = () => {
  panelOpen.value = false
}

type Entry = { title: string; body: string[] }

const current = computed(() => {
  if (!selectedKey.value) return { title: '', body: [] } as Entry
  const desc = t(`descriptions.${selectedKey.value}`)
  if (typeof desc === 'object' && desc !== null && 'title' in desc) {
    return desc as Entry
  }
  return { title: selectedKey.value, body: [t('panel.notAvailable')] }
})
</script>
