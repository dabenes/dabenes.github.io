import { readFileSync } from 'node:fs'

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8')) as {
  version?: string
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  runtimeConfig: {
    public: {
      // NO PONER FALLBACKS
      ownerName: process.env.NUXT_PUBLIC_OWNER_NAME,
      ownerNick: process.env.NUXT_PUBLIC_OWNER_NICK,
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL,
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL,
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL,
      siteTitle: process.env.NUXT_PUBLIC_SITE_TITLE,
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      portfolioVersion: packageJson.version
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true
  },

  ssr: true,
  
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/api']
    }
  },

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: process.env.NUXT_PUBLIC_SITE_TITLE || 'dabenes.dev',
      meta: [
        { name: 'description', content: '.NET Backend Developer | Full Stack | DevOps' }
      ]
    }
  },

  css: [
    '~/assets/css/terminal.css'
  ],
  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español (España)', files: ['es-ES.json'] },
      { code: 'en', language: 'en-GB', name: 'English (UK)', files: ['en-GB.json'] }
    ],
    defaultLocale: 'es',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    bundle: {
      optimizeTranslationDirective: false,
      compositionOnly: true
    },
    skipSettingLocaleOnNavigate: true,
    types: 'composition'
  }
})
