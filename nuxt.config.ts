export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'es', iso: 'es-ES' },
      { code: 'en', iso: 'en-GB' }
    ],
    vueI18n: './i18n.config.ts'
  }
})