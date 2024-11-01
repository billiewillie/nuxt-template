<script
  setup
  lang="ts">
import { useFetch, useRuntimeConfig } from '#app'
import type { Ref } from 'vue'
import type { News } from '~/types'
import URLs from '~/data/urls'

const nuxt = useNuxtApp()

interface NewsRelevantItem {
  year: number
  list: News[]
}

interface NewsPageApi {
  relevant: NewsRelevantItem[],
  archive: News[]
}

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const newsData = ref<NewsPageApi | null>(null)
const newsFilteredByYear = ref<News[] | null>(null)
const years = ref<number[] | 'archive' | null>(null)
const activeYear = ref<number | 'archive' | null>(null)

const {
  data: news
}: {
  news: Ref<NewsPageApi>,
} = await useFetch(
  `${API_ENDPOINT}${URLs.news}`,
  {
    transform(input) {
      return {
        ...input,
        fetchedAt: Date.now()
      }
    },
    getCachedData: (key) => {
      const data = nuxt.payload.data[key] || nuxt.static.data[key]
      if (!data) return

      const expirationDate = new Date(data.fetchedAt)
      expirationDate.setTime(expirationDate.getDate() + 10 * 1000)
      const isExpired = expirationDate.getTime() < Date.now()
      if (!isExpired) return

      return data
    }
  }
)

function getNews() {
  newsData.value = news.value
  years.value = news.value.relevant.map((item) => item.year)
  setYear(years.value[0])
}

function setYear(year: number | 'archive'): void {
  if (year === 'archive') {
    activeYear.value = 'archive'
    newsFilteredByYear.value = news.value.archive
    return
  }
  activeYear.value = year
  newsFilteredByYear.value = news.value.relevant.find(item => item.year === activeYear.value).list
  console.log(activeYear.value)
}

onMounted(() => {
  getNews()
})
</script>

<template>

  <main>

    <Head>
      <Title>Новости | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Новости | Группа компаний ООО «БиоЛайн»" />
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
        content="Новости | Группа компаний ООО «БиоЛайн»" />
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
      <div class="container mb-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Новости</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div class="container flex justify-between items-center">
        <h1 class="section-title">Новости</h1>
        <div class="flex gap-4">
          <Button
            :key="year"
            v-for="year in years"
            @click="activeYear = year; setYear(year)"
            :variant="activeYear === year ? 'default' : 'ghost'">
            {{ year }}
          </Button>
          <Button
            :variant="activeYear === 'archive' ? 'default' : 'ghost'"
            @click="setYear('archive')">
            Архив
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-stretch">
          <template v-if="newsFilteredByYear">
            <BaseNewsCard
              v-for="article in newsFilteredByYear"
              :key="article.id"
              image-loading="lazy"
              :article="article" />
          </template>
          <template v-else>
            <BaseNewsCardSkeleton
              v-for="i in 8"
              :key="i" />
          </template>
        </div>
      </div>
    </section>

  </main>

</template>