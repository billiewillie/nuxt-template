<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import type { News } from '~/types'
import { useAsyncData, useFetch, useHead, useRuntimeConfig, useSeoMeta } from '#app'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const title = ref('Новости | Группа компаний ООО «БиоЛайн»')
const banner = ref('/img/og-logo.jpg')
const description = ref('Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.')

const { slug } = useRoute().params

const { API_ENDPOINT } = useRuntimeConfig().public

const { data: article, error }: { data: News } = await useAsyncData(
  'article',
  () => $fetch(`${API_ENDPOINT}${URLs.news}/${slug}`)
)

if (article.value) {
  title.value = article.value.title
  banner.value = article.value.banner
  description.value = article.value.annotation
}
</script>

<template>

  <Head>
    <Title>{{ article.title }}</Title>
    <Meta
      name="description"
      :content="article.annotation" />
    <Meta
      name="og:image"
      :content="article.banner" />
    <Meta
      name="twitter:image"
      :content="article.banner" />
    <Meta
      name="og:title"
      :content="article.title" />
    <Meta
      name="og:description"
      :content="article.annotation" />
    <Meta
      name="og:site_name"
      content="bioline.vercel.app" />
    <Meta
      name="og:url"
      :content="`https://bioline.vercel.app/news/${slug}`" />
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
      :content="article.title" />
    <Meta
      name="twitter:description"
      :content="article.annotation" />
    <Meta
      name="twitter:site"
      content="bioline.vercel.app" />
    <Meta
      name="twitter:card"
      content="summary_large_image" />
  </Head>

  <section class="mt-6">
    <div class="container">
      <BaseImage
        :src="article.banner"
        aspect-ratio="aspect-[4/1]"
        placeholder="bg-[#e4e7ef]"
        width="1413"
        height="332"
        alt="alt"
      />
    </div>
  </section>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title mb-10">
        {{ article.title }}
      </h1>
      <div class="mb-10">
        <Icon
          name="solar:calendar-linear"
          width="18"
          height="18"
          color="#575757" />
        <time
          class="mb-20 text=[#575757]"
          :datetime="article.created_at">
          {{ article.created_at }}
        </time>
      </div>
      <article v-html="article.content" />
    </div>
  </section>

</template>