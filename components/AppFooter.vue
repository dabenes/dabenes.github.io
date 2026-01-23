<template>
  <footer class="border-t border-gray-800 bg-slate-950">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row items-center gap-4 font-mono text-sm">
        <div class="flex items-center justify-center gap-4 md:w-1/2 md:justify-start">
          <a 
            :href="githubUrl" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-white transition-colors"
            :aria-label="t('footer.github')"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.57-.29-5.28-1.28-5.28-5.71 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.57.23 2.73.11 3.02.74.81 1.19 1.85 1.19 3.1 0 4.44-2.72 5.42-5.31 5.71.42.36.8 1.09.8 2.2v3.26c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a 
            :href="linkedinUrl" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-white transition-colors"
            :aria-label="t('footer.linkedin')"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1-4.96 0 2.5 2.5 0 0 1 4.96 0ZM.5 8.5h4.9V24H.5V8.5Zm7.4 0h4.7v2.12h.07c.65-1.23 2.25-2.53 4.63-2.53 4.95 0 5.86 3.26 5.86 7.5V24h-4.9v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.9-2.82 3.88V24H7.9V8.5Z" />
            </svg>
          </a>
        </div>

        <div class="md:w-1/2 text-right text-xs text-gray-500">
          © {{ year }}, {{ t('footer.by') }} {{ ownerName }}.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const year = new Date().getFullYear()
const config = useRuntimeConfig()
const githubUrl = computed(() => config.public.githubUrl || '#')
const linkedinUrl = computed(() => config.public.linkedinUrl || '#')
const ownerName = computed(() => config.public.ownerName)
const { t } = useI18n()
</script>

