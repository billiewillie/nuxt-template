<script
  setup
  lang="ts">
interface carouselItem {
  id: number,
  title: string
  text: string
  img: string
}

interface statsItem {
  id: number,
  title: string
  text: string
}

interface direction {
  id: number
  logo: string
  text: string
}

interface sliderItem {
  id: number
  img: string
}

const carouselData = ref<carouselItem[]>([
  {
    id: 1,
    title: 'Стабильность и развитие',
    text: 'Приглашаем в команду профессионалов с опытом работы в науке и медицине  и вместе добиваемся впечатляющих результатов. Работаем без привлечения аутсорса – все ключевые специалисты у нас в штате.',
    img: '/img/about/carousel-1.webp'
  },
  {
    id: 2,
    title: 'Человеческий потенциал',
    text: 'Воспринимаем каждый кризис в мире, как точку роста, и ищем новые возможности и направления развития. Не так давно погрузились в рынок B2C в сфере материнства и детства, и даже запустили производство детских подгузников под собственным брендом',
    img: '/img/about/carousel-2.webp'
  },
  {
    id: 3,
    title: 'Экспертные решения',
    text: 'Говорим с клиентами и партнёрами на одном языке, а если нужно, то просто  о сложном, не теряя экспертности.',
    img: '/img/about/carousel-3.webp'
  },
  {
    id: 4,
    title: 'Производственные возможности',
    text: 'Одними из первых в России начали и продолжаем развивать своё производство функциональной лабораторной мебели.',
    img: '/img/about/carousel-4.jpg'
  },
  {
    id: 5,
    title: 'Методическая поддержка',
    text: 'Непрерывно обновляем свои знания и содействуем заказчикам в освоении оборудования и технологий. Оказываем методическую поддержку в течение всего жизненного цикла приборов и проводим регулярные вебинары и личные встречи с пользователями.',
    img: '/img/about/carousel-5.jpg'
  },
  {
    id: 6,
    title: 'Сервисная служба',
    text: 'Разветвленная сеть сервисной службы, охватывающая все регионы России, поэтому мы быстро реагируем на заявки, сводя к минимуму простои оборудования.',
    img: '/img/about/carousel-6.jpg'
  },
  {
    id: 7,
    title: 'Укомплектованный склад',
    text: 'Поддерживаем на складах  постоянный запас расходных  материалов и запчастей, максимизируя свою и вашу эффективность.',
    img: '/img/about/carousel-7.jpg'
  }
])

const statsData = ref<statsItem[]>([
  {
    id: 1,
    title: '300+',
    text: 'сотрудников в штате компании'
  },
  {
    id: 2,
    title: '11',
    text: 'офисов в крупных городах России'
  },
  {
    id: 3,
    title: '2',
    text: 'авторизованных партнёра в Казахстане и Узбекистане и дочернее предприятие в Беларуси'
  },
  {
    id: 4,
    title: '30',
    text: 'лет опытa работы'
  },
  {
    id: 5,
    title: '2500+',
    text: 'государственных и частных клиентов'
  },
  {
    id: 6,
    title: '2000+',
    text: 'единиц запчастей и комплектующих в запасе'
  },
  {
    id: 7,
    title: '50+',
    text: 'брендов в портфеле'
  },
  {
    id: 8,
    title: '2300 м<sup>2</sup>',
    text: 'складских помещений в Санкт-Петербурге'
  }
])

const directions = ref<direction[]>([
  {
    id: 1,
    logo: '/img/about/logo-bioline.svg',
    text: 'Диагностическое оборудование, реагенты и расходные материалы для клинических и научных исследований и фармразработок.'
  },
  {
    id: 2,
    logo: '/img/about/logo-biosystemy.svg',
    text: 'Общелабораторное и медицинское оборудование расходные материалы.'
  },
  {
    id: 3,
    logo: '/img/about/logo-biomebel.svg',
    text: 'Производство лабораторной и медицинской мебели.'
  },
  {
    id: 4,
    logo: '/img/about/logo-biobaby.svg',
    text: 'Направление B2C, продукция для материнства и детства.'
  }
])

const slider1 = ref<sliderItem[]>([
  {
    id: 1,
    img: '/img/about/about-2-1.jpg'
  },
  {
    id: 2,
    img: '/img/about/about-2-2.jpg'
  },
  {
    id: 3,
    img: '/img/about/about-2-3.jpg'
  }
])

const slider2 = ref<sliderItem[]>([
  {
    id: 1,
    img: '/img/about/about-3-1.jpg'
  },
  {
    id: 2,
    img: '/img/about/about-3-2.jpg'
  },
  {
    id: 3,
    img: '/img/about/about-3-3.jpg'
  }
])
</script>

<template>
  <main>

    <Head>
      <Title>О нас | Группа компаний ООО «БиоЛайн»</Title>
      <Meta
        name="description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
      <Meta
        name="og:image"
        content="/img/og-logo.jpg" />
      <Meta
        name="twitter:image"
        content="/img/og-logo.jpg" />
      <Meta
        name="og:title"
        content="О компании | Группа компаний ООО «БиоЛайн»" />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app" />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/contacts" />
      <Meta
        name="og:image:width"
        content="1200" />
      <Meta
        name="og:image:height"
        content="630" />
      <Meta
        name="og:type"
        content="article" />
      <Meta
        name="og:locale"
        content="ru_RU" />
      <Meta
        name="twitter:title"
        content="О компании | Группа компаний ООО «БиоЛайн»" />
      <Meta
        name="twitter:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
      <Meta
        name="twitter:site"
        content="bioline.vercel.app" />
      <Meta
        name="twitter:card"
        content="summary_large_image" />
    </Head>

    <section class="mb-12 xl:mb-16 pt-8">
      <div class="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>О компании</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>

    <section class="mb-20 xl:mb-24">
      <div class="container flex flex-col xl:flex-row gap-8 items-end">
        <div class="xl:basis-1/2 xl:pr-32">
          <h1 class="section-title mb-12">О нас</h1>
          <p class="~text-[16px]/[18px]">
            Компания «БиоЛайн» началась с нескольких человек, а сегодня, если сосчитать сотрудников и партнёров по всему
            миру, получится более 500 человек, объединенных одной идеей – вместе менять лабораторный мир к лучшему.
          </p>
          <br>
          <p class="~text-[16px]/[18px]">
            Наше портфолио наполняется современными технологиями, масштабными проектами и добрыми взаимоотношениями с
             заказчиками – самым ценным, что может быть в современном бизнесе.
          </p>
          <br>
          <p class="font-bold ~text-[16px]/[18px]">
            Наш главный ориентир – успех и развитие тех, кто нам доверяет, вместе мы способны на многое.
          </p>
        </div>
        <div class="xl:basis-1/2">
          <BaseImage
            class="rounded overflow-hidden w-full"
            src="/img/about/main.jpg"
            alt="центральный офис"
            placeholder="bg-[#70705e]" />
        </div>
      </div>
    </section>

    <section class="mb-20 xl:mb-24 bg-background-dark py-12 xl:py-16">
      <div class="container grid grid-cols-2 xl:grid-cols-4 gap-8 2xl:gap-16">
        <div
          class="flex flex-col gap-4"
          v-for="item in statsData"
          :key="item.id">
          <p
            v-html="item.title"
            class="text-primary font-bold ~text-[28px]/[56px] leading-none" />
          <p
            v-html="item.text"
            class="text-white ~text-[14px]/[16px]" />
        </div>
      </div>
    </section>

    <section class="mb-20 xl:mb-24">
      <div class="container">
        <h2 class="section-title">
          Внутри группы компаний «БиоЛайн» четыре направления:
        </h2>
      </div>
    </section>

    <section class="mb-20 xl:mb-24">
      <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16">
        <div
          v-for="item in directions"
          :key="item.id"
          class="flex flex-col gap-4">
          <div>
            <NuxtImg
              class="h-10"
              :src="item.logo" />
          </div>
          <p v-html="item.text" />
        </div>
      </div>
    </section>

    <section class="mb-20 xl:mb-24">
      <div class="container grid xl:grid-cols-2 gap-y-16 xl:gap-y-16 xl:gap-x-4">
        <div class="relative flex rounded overflow-hidden shadow-md">
          <Carousel
            class="relative w-full"
            :opts="{ align: 'start', loop: true }">
            <CarouselContent :is-visible="true">
              <CarouselItem
                v-for="item in slider1"
                :key="item.id"
                class="basis-full">
                <BaseImage
                  class="h-full"
                  :src="item.img"
                  alt="slider img"
                  placeholder="bg-[#EBEEF6]"
                  quality="90" />
              </CarouselItem>
            </CarouselContent>
            <div class="absolute right-[16px] top-1/2 flex gap-4 items-center w-[calc(100%_-_32px)]">
              <div class="flex gap-4 w-full justify-between">
                <CarouselPrevious class="relative left-0 top-0 -translate-y-1/2 bg-white" />
                <CarouselNext class="relative left-0 top-0 -translate-y-1/2 bg-white" />
              </div>
            </div>
          </Carousel>
        </div>
        <div class="flex flex-col xl:pl-12 xl:pt-2">
          <h2 class="section-title mb-8 xl:mb-12">Как мы работаем</h2>
          <p>
            Внимательно подбираем поставщиков, всегда лично знакомимся с командой и смотрим производство. Мы дорожим
            своей репутацией, и в том числе, поэтому лидеры мирового рынка доверяют нам своё имя на эксклюзивной основе.
          </p>
          <br>
          <p>
            Мы вкладываем серьёзные усилия во внедрение и адаптацию новых технологий в практику пользователей. Для того,
            чтобы оставаться для вас навигатором в мире инноваций, наши специалисты регулярно проходят обучения
            у производителей и экспертов международного уровня.
          </p>
        </div>
        <div class="flex flex-col xl:pr-12 xl:pt-2">
          <h2 class="section-title mb-8 xl:mb-12">Что мы предлагаем</h2>
          <p>
            С самого начала наша мотивация – эффективная и качественная работа лабораторий и медицинских учреждений.
            Благодаря экспертам с профильным образованием в сфере медицины
            и биологии в штате мы понимаем, что для этого нужно.
          </p>
          <br>
          <p>
            С нами вы сможете почувствовать себя в безопасной среде - специалисты помогут выбрать всё необходимое
            для решения именно ваших задач. Далее мы берём всю ответственность на себя - логистику, инсталляцию,
            обучение персонала, методическую поддержку и техническое обслуживание.
          </p>
        </div>
        <div class="relative flex rounded overflow-hidden shadow-md">
          <Carousel
            class="relative w-full"
            :opts="{ align: 'start', loop: true }">
            <CarouselContent :is-visible="true">
              <CarouselItem
                v-for="item in slider2"
                :key="item.id"
                class="basis-full">
                <BaseImage
                  class="h-full"
                  :src="item.img"
                  alt="sdf"
                  placeholder="bg-[#EBEEF6]"
                  quality="90" />
              </CarouselItem>
            </CarouselContent>
            <div class="absolute right-[16px] top-1/2 flex gap-4 items-center w-[calc(100%_-_32px)]">
              <div class="flex gap-4 w-full justify-between">
                <CarouselPrevious class="relative left-0 top-0 -translate-y-1/2 bg-white" />
                <CarouselNext class="relative left-0 top-0 -translate-y-1/2 bg-white" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>

    <section class="mb-20 xl:mb-24">
      <div class="container mb-12">
        <h2 class="section-title">Что нас отличает</h2>
      </div>

      <div class="container">
        <Carousel
          class="relative w-full"
          :opts="{ align: 'start' }">
          <CarouselContent :is-visible="true">
            <CarouselItem
              v-for="item in carouselData"
              :key="item.id"
              class="basis-full md:basis-1/2 lg:basis-1/3">
              <Card class="flex flex-col gap-6 pb-6 shadow-md hover:shadow-lg transition-shadow w-full h-full">
                <CardHeader class="p-0">
                  <BaseImage
                    :src="item.img"
                    :alt="item.title"
                    placeholder="bg-[#EBEEF6]"
                    quality="90" />
                </CardHeader>
                <CardContent class="flex flex-col gap-4 p-0 px-6 flex-auto">
                  <CardTitle class="~text-[18px]/[24px] leading-[1.2]">
                    {{ item.title }}
                  </CardTitle>
                  <CardDescription class="~text-[14px]/[16px] text-foreground">
                    {{ item.text }}
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div class="absolute -right-[3%] md:right-0 top-[48%] md:-top-[90px] xl:-top-[94px] flex gap-4 items-center w-[106%] md:w-auto">
            <div class="flex gap-4 w-full md:w-auto justify-between">
              <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
              <CarouselNext class="relative left-0 top-0 translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>

    <BaseContactForm />

  </main>
</template>
