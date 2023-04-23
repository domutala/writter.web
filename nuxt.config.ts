// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      pathPrefix: false,
      global: true,
    },
  ],

  plugins: [{ src: "~/plugins/editor.ts", mode: "client" }],
});
