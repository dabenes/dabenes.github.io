<template>
  <section class="rounded-lg border border-cyan-400/10 bg-slate-900/40 p-5 backdrop-blur-sm md:p-6">
    <div class="space-y-4">
      <div class="border-b border-cyan-400/10 pb-4">
        <p class="mb-1 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
          Signals
        </p>
        <h2 class="text-lg font-semibold text-white">
          Perfil tecnico
        </h2>
      </div>

      <div class="space-y-2.5">
        <article
          v-for="group in groups"
          :key="group.label"
          class="rounded-lg border border-slate-800 bg-slate-950/25 px-4 py-3.5"
        >
          <p class="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            {{ group.label }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-slate-700 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-300"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface LandingSignalGroup {
  label: string
  items: string[]
}

defineProps<{
  groups: LandingSignalGroup[]
}>()
</script>
