// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook'],
  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/variables.css', // Ou variables.scss si tu utilises SCSS
  ],
  ssr: false,
})
