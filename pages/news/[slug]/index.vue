<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import type { News } from '~/types'
import { useAsyncData, useRuntimeConfig } from '#app'
import { useRoute } from 'vue-router'
import { type Ref, ref } from 'vue'
import dateFormatter from '~/utils/dateFormatter'

const title = ref<string>('Новости | Группа компаний ООО «БиоЛайн»')
const banner = ref<string>('/img/og-logo.jpg')
const description = ref<string>('Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.')

const { slug }: { slug: string } = useRoute().params

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const { data: article, error }: { data: Ref<News> } = await useAsyncData(
  'article',
  () => $fetch(`${API_ENDPOINT}${URLs.newsArticle}/${slug}`)
)

if (article.value) {
  title.value = article.value.title
  banner.value = article.value.banner
  description.value = article.value.annotation
}
</script>

<template>

  <main>

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
              <BreadcrumbLink as-child>
                <NuxtLink to="/news">Новости</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{{ article.title }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <BaseImage
          :src="article.banner"
          aspect-ratio="aspect-[4/1]"
          placeholder="bg-[#e4e7ef]"
          class="rounded overflow-hidden"
          width="1413"
          height="332"
          :alt="article.title" />

      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container">
        <h1 class="section-title mb-12">
          {{ article.title }}
        </h1>
        <div class="mb-10 flex items-center gap-3 ">
          <Icon
            name="solar:calendar-linear"
            width="18"
            height="18"
            color="#575757" />
          <time
            class="text-[#575757] leading-none"
            :datetime="article.created_at">
            {{ dateFormatter(article.created_at) }}
          </time>
        </div>
        <article v-html="article.content" />
      </div>
    </section>

  </main>
</template>