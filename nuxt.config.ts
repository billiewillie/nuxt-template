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
    'vue-yandex-maps/nuxt',
    'nuxt-viewport'
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
    display: 'fallback',
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
  app: {
    head: {
      title: 'Группа компаний ООО «БиоЛайн»',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'description',
          content: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.'
        },
        {
          name: 'keywords',
          content: 'цитометр, цитофлюориметр, цитофлуориметр, проточный, Бектон Дикинсон, BD, Becton Dickinson, FACS, Calibur, Canto, CantoII, Accuri, Verse, Aria, цитометрия, проточник, сортировщик, сортер, Euroflow, ISHAGE, фенотипирование, иммунофенотипирование, FACS  Count, мониторинг CD4, стволовые клетки, онкогематология, диагностика ВИЧ, диагностика лейкозов'
        },
        {
          name: 'robots',
          content: 'noindex, nofollow'
        },
        {
          name: 'msapplication-TileColor',
          content: '#da532c'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5'
        }
      ]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      API_ENDPOINT: ''
    }
  },
  yandexMaps: {
    apikey: '3c059258-c2fe-4ad1-85b6-f124123aa8e1'
  }
})