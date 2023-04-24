// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: "https://cdn.quilljs.com/1.3.7/quill.js", async: true }],
    },
  },

  css: ["~/styles/index.scss"],

  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      pathPrefix: false,
      global: true,
    },
  ],

  plugins: [{ src: "~/plugins/quill.ts", mode: "client" }],
});
