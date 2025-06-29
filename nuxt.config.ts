// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia/nuxt'],
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      title: 'Security Scanner',
      meta: [
        { name: 'description', content: 'Here you can scan your website for security vulnerabilities' },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    apiKey: process.env.NUXT_VIRUSTOTAL_API_KEY,
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
})