// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    '@vueuse/nuxt',
    '@primevue/nuxt-module'
  ],
  plugins: ['~/plugins/axios'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8000',
      jwtSecretKey: process.env.NUXT_JWT_SECRET_KEY || 'your-secret-key-min-32-chars'
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "Noto Sans": true,
    },
  },
});
