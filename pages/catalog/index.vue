<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import CATEGORIES from '~/data/categories'
</script>

<template>

  <main>

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
              <BreadcrumbPage>Каталог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 class="section-title">Каталог</h1>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container">
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <NuxtLink
            v-for="item in CATEGORIES"
            :key="item.id"
            class="aspect-video xl:aspect-square"
            :to="`/catalog/${item.slug}`">
            <Card class="flex flex-col gap-6 p-4 xl:p-8 items-center justify-between text-center shadow-md square hover:shadow-lg transition-shadow h-full w-full">
              <div class="flex items-center h-1/2">
                <NuxtImg
                  :src="item.icon"
                  height="80"
                  width="80"
                  class="object-contain object-center h-[80px] w-[80px]"
                  :alt="item.title" />
              </div>
              <CardContent class="p-0 font-medium h-1/2">
                <p class="~text-[18px]/[22px]">{{ item.title }}</p>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>

  </main>

</template>
