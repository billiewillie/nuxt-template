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
    title: '> 300',
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
    title: '> 2500',
    text: 'государственных и частных клиентов'
  },
  {
    id: 6,
    title: '> 2000',
    text: 'единиц запчастей и комплектующих в запасе'
  },
  {
    id: 7,
    title: '> 50',
    text: 'брендов в портфеле'
  },
  {
    id: 8,
    title: '> 2300 м<sup>2</sup>',
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
</script>

<template>
  <main>

    <Head>
      <Title>О компании | Группа компаний ООО «БиоЛайн»</Title>
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
        <Breadcrumb class="mb-12">
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

    <section class="mb-16">
      <div class="container flex flex-col xl:flex-row gap-8">
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
            class="rounded overflow-hidden h-full w-full"
            src="/img/about/main.jpg"
            alt="центральный офис"
            placeholder="bg-[#70705e]" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16 bg-background-dark py-12 xl:py-16">
      <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 2xl:gap-16">
        <div
          class="flex flex-col gap-4"
          v-for="item in statsData"
          :key="item.id">
          <p
            v-html="item.title"
            class="text-primary font-bold ~text-[42px]/[56px] leading-none" />
          <p
            v-html="item.text"
            class="text-white" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container">
        <h2 class="section-title">
          Внутри группы компаний «БиоЛайн» четыре направления:
        </h2>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-16">
        <div
          v-for="item in directions"
          :key="item.id"
          class="flex flex-col gap-4">
          <div>
            <NuxtImg
              class="h-8"
              :src="item.logo" />
          </div>
          <p v-html="item.text" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container grid xl:grid-cols-2">
        <div class="flex flex-col">
          <div>img</div>
        </div>
        <div class="flex flex-col">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vel.</p>
        </div>
        <div class="flex flex-col">
          <div>img</div>
        </div>
        <div class="flex flex-col">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vel.</p>
        </div>
      </div>
    </section>

    <section class="mb-24 xl:mb-32">
      <div class="container mb-16">
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
          <div class="absolute right-0 -top-[100px] md:-top-[108px] xl:-top-[114px] flex gap-4 items-center">
            <div class="flex gap-4">
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
