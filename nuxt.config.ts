// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],
  image: {
    inject: true,
    format: ["webp"],
  },
  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  imports: {
    autoImport: false,
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [300, 400, 600],
        ital: [300, 400, 600],
      },
    },
    display: "swap",
    subsets: ["cyrillic", "latin"],
    preload: true,
    useStylesheet: true,
  },
});
