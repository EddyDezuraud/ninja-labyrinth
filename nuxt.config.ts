// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxtjs/google-fonts'],
  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/variables.css', // Ou variables.scss si tu utilises SCSS
  ],
  ssr: false,
  googleFonts: {
    // Options
    families: {
      Bahiana: true,
      Jomhuria: true,
      Fredoka: true
    }
  }
})