<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ $t('welcome') }}</h1>
      <p class="text-lg text-gray-600">Bienvenido al portfolio de David Benito</p>
      <div class="mt-6 flex gap-4 justify-center">
        <NuxtLink to="/" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {{ $t('home') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
