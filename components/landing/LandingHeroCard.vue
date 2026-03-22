<template>
  <section class="rounded-lg border border-cyan-400/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-5 backdrop-blur-sm md:p-6 xl:p-7">
    <div class="space-y-4">
      <div>
        <h1 class="mb-2.5 text-3xl font-bold tracking-tight text-white md:text-[2.5rem] md:leading-[1] xl:text-[2.85rem]">
          {{ ownerName }}
        </h1>
        <p class="max-w-4xl text-base font-semibold leading-7 text-cyan-300 md:text-[1.14rem] md:leading-8">
          {{ title }}
        </p>
      </div>

      <p class="max-w-4xl whitespace-pre-line text-[1rem] leading-6 text-slate-300 xl:text-[0.8rem] xl:leading-7">
        {{ description }}
      </p>

      <div class="grid gap-3 border-t border-cyan-400/10 pt-5 md:grid-cols-3">
        <div class="rounded-lg border border-slate-800 bg-slate-950/25 p-3.5">
          <p class="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Focus</p>
          <p class="text-sm leading-6 text-slate-300">APIs mantenibles y backend orientado a producto.</p>
        </div>

        <div class="rounded-lg border border-slate-800 bg-slate-950/25 p-3.5">
          <p class="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Strength</p>
          <p class="text-sm leading-6 text-slate-300">Arquitectura, datos e integracion con criterio practico.</p>
        </div>

        <div class="rounded-lg border border-slate-800 bg-slate-950/25 p-3.5">
          <p class="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Range</p>
          <p class="text-sm leading-6 text-slate-300">Capacidad fullstack cuando aporta valor al sistema.</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 border-t border-cyan-400/10 pt-5">
        <span
          v-for="item in highlights"
          :key="item"
          class="rounded-full border border-cyan-400/15 bg-slate-950/40 px-3 py-1 text-sm text-slate-200"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  ownerName: string
  title: string
  description: string
  highlights: string[]
}>()
</script>
