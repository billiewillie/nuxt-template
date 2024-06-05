// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-marquee'
  ],
  image: {
    inject: true,
    format: ['webp']
  },
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true
  },
  imports: {
    autoImport: false
  },
  googleFonts: {
    families: {
      Inter: '400..700'
    },
    display: 'swap',
    subsets: ['cyrillic', 'latin'],
    preload: true,
    prefetch: true,
    useStylesheet: true,
    preconnect: true
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.'
      }
    }
  }
})