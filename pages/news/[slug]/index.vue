<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import type { News } from '~/types'
import { useAsyncData, useFetch, useHead, useRuntimeConfig, useSeoMeta } from '#app'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const title = ref('')
const banner = ref('')

const { slug } = useRoute().params

const { API_ENDPOINT } = useRuntimeConfig().public

const { data: article, error }: { data: News } = await useAsyncData(
  'article',
  () => $fetch(`${API_ENDPOINT}${URLs.news}/${slug}`)
)

if (article.value) {
  title.value = `${article.value.title} | Группа компаний ООО «БиоЛайн»`
  banner.value = article.value.banner
}

useSeoMeta({
  ogImage: () => banner.value,
  twitterImage: () => banner.value,
  ogTitle: () => title.value,
  twitterTitle: () => title.value,
  ogUrl: 'https://bioline.ru',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogDescription: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.',
  twitterDescription: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.',
  twitterCard: 'summary_large_image'
})

useHead({
  title: () => title.value,
  meta: [
    {
      property: 'og:title',
      content: () => title.value
    },
    {
      property: 'twitter:title',
      content: () => title.value
    },
    {
      property: 'og:image',
      content: () => banner.value
    },
    {
      property: 'twitter:image',
      content: () => banner.value
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