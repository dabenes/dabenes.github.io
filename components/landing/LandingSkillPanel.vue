<template>
  <div v-if="open" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-slate-950/70" @click="$emit('close')"></div>

    <div class="absolute right-0 top-0 h-full w-full border-l border-cyan-400/20 bg-gradient-to-b from-slate-900/95 to-slate-950/95 shadow-xl sm:w-[420px]">
      <div class="flex items-center justify-between border-b border-cyan-400/20 px-4 py-3">
        <h2 class="font-mono text-sm text-cyan-200">{{ panelTitle }}</h2>
        <button
          type="button"
          class="font-mono text-xs text-cyan-300 hover:text-white"
          @click="$emit('close')"
        >
          {{ closeHint }}
        </button>
      </div>

      <div class="h-full overflow-y-auto p-4">
        <div v-if="entry.title" class="mb-2">
          <p class="text-sm text-gray-300"><span class="text-cyan-300">></span> {{ entry.title }}</p>
        </div>

        <div class="space-y-3">
          <p
            v-for="(paragraph, index) in entry.body"
            :key="index"
            class="text-sm leading-relaxed text-gray-400"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  close: []
}>()

defineProps<{
  open: boolean
  panelTitle: string
  closeHint: string
  entry: {
    title: string
    body: string[]
  }
}>()
</script>
