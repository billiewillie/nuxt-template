<script setup>
import { Card, CardContent } from '~/components/ui/card'
import CATEGORIES from '~/data/categories'
</script>

<template>

  <Head>
    <Title>Каталог | Группа компаний ООО «БиоЛайн»</Title>
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
      content="Каталог | Группа компаний ООО «БиоЛайн»" />
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
      content="Каталог | Группа компаний ООО «БиоЛайн»" />
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

  <section class="mb-12 xl:mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Каталог</h1>
    </div>
  </section>

  <section class="mb-12 xl:mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
        <NuxtLink
          v-for="item in CATEGORIES"
          :key="item.id"
          :to="`/catalog/${item.slug}`">
          <Card class="flex flex-col gap-6 p-4 items-center text-center h-full">
            <NuxtImg
              :src="item.icon"
              class="w-[80px] object-contain object-center h-[80px]"
              :alt="item.title" />
            <CardContent class="p-0 font-medium">
              <p class="text-2xl">{{ item.title }}</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </section>

</template>
