// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});
