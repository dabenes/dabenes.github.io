<template>
  <header class="sticky top-0 z-50 border-b border-gray-800 bg-slate-950 backdrop-blur-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-5">
        <div class="flex items-center gap-4 flex-1">
          <div class="font-mono text-sm text-white whitespace-nowrap">
            <span class="text-cyan-400">{{ ownerNick }}</span><span class="text-gray-500">@{{ t('labels.portfolio') }}</span><span class="text-gray-500">$</span>
            <span class="text-gray-400 ml-2">{{ promptCommand }}</span>
          </div>

          <div class="flex-1 overflow-hidden">
            <TransitionGroup name="notification" tag="div" class="flex gap-2">
              <div 
                v-for="notification in notifications" 
                :key="notification.id"
                class="font-mono text-xs px-2 py-1 rounded whitespace-nowrap"
                :class="{
                  'text-green-400 bg-green-500/10': notification.type === 'success',
                  'text-red-400 bg-red-500/10': notification.type === 'error',
                  'text-yellow-400 bg-yellow-500/10': notification.type === 'warning',
                  'text-cyan-400 bg-cyan-500/10': notification.type === 'info'
                }"
              >
                {{ notification.message }}
              </div>
            </TransitionGroup>
          </div>
        </div>

        <nav class="hidden items-center gap-3 md:flex">
          <span v-if="currentPath === '/'" class="group relative px-4 py-2 font-mono text-sm text-gray-400 transition-all duration-300 bg-cyan-500/10 rounded cursor-default">
            <span class="fake-terminal-arrow">> </span>
            <span class="text-cyan-400">cd </span>
            <span class="text-gray-200">..</span>
          </span>
          <NuxtLink 
            v-else
            to="/" 
            class="group relative px-4 py-2 font-mono text-sm text-gray-400 transition-all duration-300"
          >
            <span class="text-cyan-400">cd </span>
            <span class="group-hover:text-white">..</span>
            <span class="absolute inset-x-0 bottom-0 h-px bg-cyan-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
          </NuxtLink>

          <span class="text-gray-700">|</span>

          <NuxtLink 
            to="/projects" 
            class="group relative px-4 py-2 font-mono text-sm text-gray-400 transition-all duration-300"
            :class="{ 'text-cyan-400 bg-cyan-500/10 rounded fake-terminal-nav-link-active': currentPath === '/projects' }"
          >
            <span class="fake-terminal-arrow" v-if="currentPath === '/projects'">> </span>
            <span class="text-cyan-400">cd </span>
            <span class="group-hover:text-white" :class="currentPath === '/projects' ? 'text-gray-200' : ''">{{ t('routes.projects') }}</span>
            <span class="absolute inset-x-0 bottom-0 h-px bg-cyan-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" :class="{ 'scale-x-100': currentPath === '/projects' }"></span>
          </NuxtLink>

          <span class="text-gray-700">|</span>

          <NuxtLink 
            to="/contact" 
            class="group relative px-4 py-2 font-mono text-sm text-gray-400 transition-all duration-300"
            :class="{ 'text-cyan-400 bg-cyan-500/10 rounded fake-terminal-nav-link-active': currentPath === '/contact' }"
          >
            <span class="fake-terminal-arrow" v-if="currentPath === '/contact'">> </span>
            <span class="text-cyan-400">cd </span>
            <span class="group-hover:text-white" :class="currentPath === '/contact' ? 'text-gray-200' : ''">{{ t('routes.contact') }}</span>
            <span class="absolute inset-x-0 bottom-0 h-px bg-cyan-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" :class="{ 'scale-x-100': currentPath === '/contact' }"></span>
          </NuxtLink>
        </nav>

        <button class="rounded-md p-2 text-gray-400 transition-all duration-300 hover:text-white md:hidden">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from '#app'
import { computed } from 'vue'
import { useFakeTerminal } from '~/composables/useTerminalNotification'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const currentPath = computed(() => route.path)
const { notifications } = useFakeTerminal()
const config = useRuntimeConfig()
const ownerNick = computed(() => config.public.ownerNick)
const { t } = useI18n()

const promptCommand = computed(() => {
  const path = currentPath.value
  if (path === '/') return ''
  
  const routeMap: Record<string, string> = {
    '/projects': t('routes.projects'),
    '/contact': t('routes.contact')
  }
  
  return routeMap[path] || path.substring(1)
})
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
