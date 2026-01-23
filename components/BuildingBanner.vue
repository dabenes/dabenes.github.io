<template>
  <div 
    class="fixed top-0 left-0 right-0 z-50 py-4 px-4 text-center font-bold text-sm md:text-base border-b-4 border-yellow-400"
    style="background: repeating-linear-gradient(
      45deg,
      #FCD34D,
      #FCD34D 10px,
      #000000 10px,
      #000000 20px
    );"
  >
    <div class="inline-block bg-white bg-opacity-95 px-6 py-2 rounded-md shadow-lg border-2 border-yellow-400">
      <p class="text-black flex items-center justify-center gap-2">
        {{ t('banner.building') }}
      </p>
    </div>
  </div>
  <div class="h-[72px] md:h-[80px]"></div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
