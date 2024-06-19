<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import type { News } from '~/types'
import { useFetch, useHead, useRuntimeConfig, useSeoMeta } from '#app'
import { useRoute } from 'vue-router'
import { useLazyFetch } from '#imports'

const { slug } = useRoute().params

const { API_ENDPOINT } = useRuntimeConfig().public

const { data: article, error }: { data: News } = await useLazyFetch(`${API_ENDPOINT}${URLs.news}/${slug}`)

useHead({
  meta: [
    {
      property: 'og:title',
      content: `${article.title} | Группа компаний ООО «БиоЛайн»`
    },
    {
      property: 'twitter:title',
      content: `${article.title} | Группа компаний ООО «БиоЛайн»`
    },
    {
      property: 'og:description',
      content: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.'
    },
    {
      property: 'twitter:description',
      content: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.'
    },
    {
      property: 'og:image',
      content: article.banner
    },
    {
      property: 'twitter:image',
      content: article.banner
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:locale',
      content: 'ru_RU'
    },
    {
      property: 'og:site_name',
      content: 'Группа компаний ООО «БиоЛайн»'
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})
</script>

<template>

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