<script
  setup
  lang="ts">
import type { InStockCategory } from '~/types'
import URLs from '~/data/urls'
import type { Ref } from 'vue'

const activeCategory = ref<InStockCategory | null>(null)

const { API_ENDPOINT } = useRuntimeConfig().public

const { data }: { data: Ref<InStockCategory[]> } = await useFetch(`${API_ENDPOINT}${URLs.inStock}`)

activeCategory.value = data.value[0]

console.log(data.value)
</script>

<template>

  <Head>
    <Title>На складе | Группа компаний ООО «БиоЛайн»</Title>
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
      content="На складе | Группа компаний ООО «БиоЛайн»" />
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
      content="На складе | Группа компаний ООО «БиоЛайн»" />
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
            <BreadcrumbPage>На складе</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <div class="container flex justify-between items-center">
      <h1 class="section-title">На складе</h1>
      <div class="flex gap-4">
        <Button
          v-for="category in data"
          :key="category.id"
          :variant="category.id === activeCategory?.id ? 'default' : 'outline'"
          @click="activeCategory = category">
          {{ category.title }}
        </Button>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="flex flex-col gap-4">
        <Card
          v-for="product in activeCategory.list"
          :key="product.id"
          class="flex flex-col gap-6 p-4 lg:p-8 items-center text-center">
          <CardContent class="flex flex-col xl:flex-row w-full p-0 gap-8">
            <div class="flex basis-full xl:basis-1/3 justify-center">
              <BaseImage
                class="w-full xl:w-[350]"
                :src="product.preview_img"
                :alt="product.title"
                aspect-ratio="aspect-square"
                placeholder="bg-[#fff]"
                width="350"
                height="350"
              />
            </div>

            <div class="basis-2/3 flex flex-col items-start gap-6">
              <h2 class="font-bold text-2xl">{{ product.title }}</h2>
              <Separator />
              <div
                v-html="product.content"
                class="text-left"></div>
            </div>
          </CardContent>
          <CardFooter class="flex flex-col xl:flex-row gap-4 justify-between w-full p-0">
            <div class="flex">
              <Icon
                name="iconoir:star"
                width="24"
                height="24"
                color="#575757" />
            </div>
            <Button variant="outline">
              Отправить запрос
            </Button>
            <span>Перейти на страницу</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>

</template>