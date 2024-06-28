<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import { useFetch, useRuntimeConfig } from '#app'
import type { News } from '~/types'
import { years } from '~/data/constants'

const { API_ENDPOINT } = useRuntimeConfig().public

const newsByYear = ref(null)
const activeYear = ref(years[0])

const { data: news }: { news: News[] } = await useFetch(`${API_ENDPOINT}${URLs.news}`)

function getNewsByYear() {
  newsByYear.value = news.value.filter((article) => article.year === activeYear.value)
}

onMounted(() => {
  getNewsByYear()
})

console.log(news.value)
</script>

<template>

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

  <section class="mb-16 pt-14">
    <div class="container flex justify-between items-center">
      <h1 class="section-title">Новости</h1>
      <div class="flex gap-4">
        <Button
          :variant="activeYear === year ? 'default' : 'ghost'"
          v-for="year in years"
          @click="activeYear = year; getNewsByYear()"
          :key="year">
          {{ year }}
        </Button>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-stretch">
        <BaseNewsCard
          v-for="article in newsByYear"
          :key="article.id"
          image-loading="lazy"
          :article="article" />
      </div>
    </div>
  </section>

</template>