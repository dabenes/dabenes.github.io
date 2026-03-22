<template>
  <section class="rounded-lg border border-cyan-400/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-4 backdrop-blur-sm">
    <div class="space-y-3">
      <div class="overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_0_0_1px_rgba(14,165,233,0.04)]">
        <div class="aspect-[4/4.6] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.24),rgba(2,6,23,0.92))]">
        </div>
      </div>

      <div class="space-y-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/20 hover:text-white"
        >
          <span class="flex items-center gap-3">
            <component :is="link.icon" class="h-4 w-4 text-cyan-300" />
            <span>{{ link.label }}</span>
          </span>
          <span class="font-mono text-cyan-300">></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'

type ProfileLink = {
  label: string
  href: string
  external?: boolean
  icon: () => ReturnType<typeof h>
}

const props = defineProps<{
  githubUrl?: string
  linkedinUrl?: string
  email?: string
}>()

const githubIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
}, [
  h('path', {
    d: 'M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-1.03-.02-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z'
  })
])

const linkedinIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
}, [
  h('path', {
    d: 'M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.7h2.67V18H5.6V9.7Zm4.35 0h2.56v1.13h.04c.36-.67 1.23-1.38 2.54-1.38 2.72 0 3.22 1.84 3.22 4.23V18h-2.67v-3.83c0-.91-.02-2.08-1.24-2.08-1.24 0-1.43.99-1.43 2.01V18H9.95V9.7Z'
  })
])

const mailIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.8',
  'aria-hidden': 'true'
}, [
  h('path', { d: 'M4 6h16v12H4z' }),
  h('path', { d: 'm4 8 8 6 8-6' })
])

const links = computed<ProfileLink[]>(() => {
  const items: ProfileLink[] = []

  if (props.linkedinUrl) {
    items.push({ label: 'LinkedIn', href: props.linkedinUrl, external: true, icon: linkedinIcon })
  }

  if (props.githubUrl) {
    items.push({ label: 'GitHub', href: props.githubUrl, external: true, icon: githubIcon })
  }

  if (props.email) {
    items.push({ label: 'Email', href: `mailto:${props.email}`, icon: mailIcon })
  }

  return items
})
</script>
