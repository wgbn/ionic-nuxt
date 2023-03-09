// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic"],
  ssr: false,
  ionic: {
    integrations: {
      //
    },
    css: {
      basic: true,
      core: true,
      utilities: true
    },
    config: {
      //
    },
  },
});
