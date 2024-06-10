// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-marquee',
    '@nuxtjs/seo'
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
  },
  site: {
    title: 'Группа компаний ООО «БиоЛайн»',
    name: 'Группа компаний ООО «БиоЛайн»',
    description: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.',
    icon: '/favicon.ico',
    siteName: 'Группа компаний ООО «БиоЛайн»',
    defaultLocale: 'ru',
    image: '/img/og-logo.jpg',
    indexable: false,
    theme: '#FFFFFF',
    colorMode: 'light',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    }
  }
})