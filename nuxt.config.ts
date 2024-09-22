// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css', '@mdi/font/css/materialdesignicons.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      version: '1.0.0'
    }
  },

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google' },
    ]
  },
  
  modules: ['@nuxt/fonts', '@nuxt/ui']
})