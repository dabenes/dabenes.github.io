<template>
  <footer class="border-t border-slate-800 bg-slate-950">
    <div class="relative mx-auto grid w-full max-w-[1860px] grid-cols-[1fr_auto_1fr] items-center px-4 py-3 md:px-6">
      <div class="inline-flex items-center justify-start font-mono text-[11px] leading-none text-slate-600">
        <span v-if="visitorIp" class="tracking-[0.14em] text-slate-500">{{ visitorIp }}</span>
      </div>

      <div class="pointer-events-none flex justify-center">
        <div class="inline-flex items-center px-4 py-1 font-mono text-[11px] text-slate-500">
          <span class="text-slate-600">&copy;</span>
          <span class="ml-2 tracking-[0.18em] text-slate-600">{{ currentYear }}</span>
          <span class="px-3 text-slate-700">&bull;</span>
          <span class="tracking-[0.1em] text-slate-600">{{ siteTitle }}</span>
          <span class="px-3 text-slate-700">&bull;</span>
          <span class="tracking-[0.1em] text-slate-600">{{ t('footer.rightsReserved') }}</span>
        </div>
      </div>

      <div class="inline-flex items-center justify-end font-mono text-[10px] leading-none text-slate-600">
        <span class="tracking-[0.14em] text-slate-500">v{{ portfolioVersion }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const config = useRuntimeConfig()
const { t } = useI18n()
const resolvedVisitorIp = ref('')
const currentYear = ref(String(new Date().getFullYear()))
const siteTitle = computed(() => config.public.siteTitle || 'dabenes.dev')
const portfolioVersion = computed(() => config.public.portfolioVersion || '0.0.0')
const visitorIp = computed(() => resolvedVisitorIp.value)
let ipRefreshTimer: ReturnType<typeof setInterval> | null = null
let yearRefreshTimer: ReturnType<typeof setTimeout> | null = null

const refreshVisitorIp = async () => {
  currentYear.value = String(new Date().getFullYear())

  try {
    const response = await $fetch<{ ip?: string }>('https://api.ipify.org', {
      query: { format: 'json' }
    })

    resolvedVisitorIp.value = response.ip || ''
  } catch {
    resolvedVisitorIp.value = ''
  }
}

const scheduleYearRefresh = () => {
  currentYear.value = String(new Date().getFullYear())

  const now = new Date()
  const nextMidnight = new Date(now)
  nextMidnight.setHours(24, 0, 0, 0)

  yearRefreshTimer = setTimeout(scheduleYearRefresh, nextMidnight.getTime() - now.getTime())
}

onMounted(async () => {
  scheduleYearRefresh()
  await refreshVisitorIp()
  ipRefreshTimer = setInterval(refreshVisitorIp, 15 * 60 * 1000)
})

onBeforeUnmount(() => {
  if (ipRefreshTimer) {
    clearInterval(ipRefreshTimer)
  }

  if (yearRefreshTimer) {
    clearTimeout(yearRefreshTimer)
  }
})
</script>
