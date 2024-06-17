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
    'nuxt-marquee'
  ],
  image: {
    inject: true,
    format: ['webp']
  },
  imports: {
    autoImport: false
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
  app: {
    head: {
      title: 'Группа компаний ООО «БиоЛайн»',
      meta: [
        {
          name: 'description',
          content: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.'
        },
        {
          name: 'keywords',
          content: 'цитометр,  цитофлюориметр, цитофлуориметр, проточный, Бектон Дикинсон, BD,  Becton Dickinson,  FACS, Calibur, Canto, CantoII, Accuri, Verse, Aria,  цитометрия,  проточник,  сортировщик, сортер, Euroflow, ISHAGE, фенотипирование,  иммунофенотипирование,  FACS  Count, мониторинг CD4, стволовые   клетки,   онкогематология,  диагностика ВИЧ,  диагностика лейкозов'
        },
        {
          name: 'robots',
          content: 'noindex'
        }
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }

  },
  runtimeConfig: {
    public: {
      backendUrl: "https://telvla.ru"
    }
  }
})