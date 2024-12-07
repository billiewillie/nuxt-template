<script
  setup
  lang="ts">
interface Topic {
  id: number
  title: string
  slug: string
  image: string
  isActive: boolean
}

const topics = ref<Topic[]>([
  {
    id: 1,
    title: 'Технический сервис',
    slug: 'tech-service',
    image: '/img/support-page/tech-service.webp',
    isActive: true
  },
  {
    id: 2,
    title: 'Методическая поддержка',
    slug: 'method-service',
    image: '/img/support-page/method-service.webp',
    isActive: false
  },
  {
    id: 3,
    title: 'Обучение',
    slug: 'education',
    image: '/img/support-page/education.webp',
    isActive: false
  }
])

function setActiveTopic(id: number): void {
  if (id === topics.value.find(item => item.isActive)?.id) return
  topics.value = topics.value.map((topic) => {
    return {
      ...topic,
      isActive: topic.id === id
    }
  })
}
</script>

<template>
  <main>

    <Head>
      <Title>Технический сервис | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Технический сервис</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="flex flex-col gap-8 justify-between xl:items-center xl:flex-row">
          <h1 class="section-title">
            {{ topics.find(item => item.isActive)?.title }}
          </h1>
          <div class="flex gap-4 flex-wrap">
            <Button
              v-for="topic in topics"
              :key="topic.id"
              @click="setActiveTopic(topic.id)"
              class="rounded-full bg-background-dark border-2 shadow-md border-background-dark hover:shadow-xl hover:bg-background-dark hover:opacity-90 transition-all"
              :class="{'bg-transparent text-background-dark hover:bg-transparent': topic.isActive }">
              {{ topic.title }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex flex-col md:flex-row justify-between gap-4">
        <div class="basis-1/2 flex flex-col gap-4">
          <template v-if="topics.find(item => item.isActive)?.id === 1">
            <p>
              Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра, чтобы
              качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси,
              Казахстана
              и Узбекистана.
            </p>
            <p>
              Наши инженеры повышают уровень своей квалификации, а современные рабочие инструменты и собственный склад
              запасных частей позволяют быстро реагировать на заявки, сводя к минимуму простои оборудования.
            </p>
          </template>
          <template v-if="topics.find(item => item.isActive)?.id === 2">
            <p>
              Любые вопросы планирования эксперимента, оптимизации условий его проведения, подбора панели реагентов,
              решения возникающих сложностей Вы можете адресовать нашим специалистам методической поддержки
              пользователей.
            </p>
          </template>
          <template v-if="topics.find(item => item.isActive)?.id === 3">
            <p>
              Компания “БиоЛайн” совместно с ведущими научно-исследовательскими и лечебными учреждениями России
              предлагает Вашему вниманию курсы и сертификационные циклы с целью усовершенствования профессиональных
              знаний, умений и навыков, а также углубленного освоения теоретических знаний по проточной цитометрии,
              иммунодиагностики и патоморфологии.
            </p>
            <p>
              Наша компания располагает собственным учебным центром, оснащенным современным аналитическим оборудованием,
              производства компаний Becton Dickinson, Leica, Akoya и др.
            </p>
          </template>
        </div>
        <div class="basis-1/2">
          <NuxtImg
            :src="topics.find(topic => topic.isActive)?.image"
            :alt="topics.find(topic => topic.isActive)?.title"
            width="820"
            height="590" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex justify-between gap-4">
        <template v-if="topics.find(item => item.isActive)?.id === 1">
          <div class="basis-1/3 flex flex-col gap-4">
            <p>
              Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра, чтобы
              качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси,
              Казахстана и Узбекистана.
            </p>
          </div>
        </template>
        <template v-if="topics.find(item => item.isActive)?.id === 3">
          <div class="basis-1/3 flex flex-col gap-4">
            <p>
              Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра, чтобы
              качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси,
              Казахстана и Узбекистана.
            </p>
          </div>
        </template>
      </div>
    </section>

  </main>
</template>