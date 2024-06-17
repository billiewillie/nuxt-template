<script
  setup
  lang="ts">
import URLs from '~/data/urls'
import { useFetch, useRuntimeConfig } from '#app'
import type { News } from '~/types'
const { backendUrl } = useRuntimeConfig().public

const { data: news }: { news: News[] } = await useFetch(`${backendUrl}${URLs.news}`)
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Новости</h1>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 items-stretch">
        <BaseNewsCard
          v-for="article in news"
          :key="article.id"
          :article="article" />
      </div>
    </div>
  </section>

</template>