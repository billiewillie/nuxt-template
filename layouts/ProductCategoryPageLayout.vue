<script
  setup
  lang="ts">
import type { ProductCategoryPageApi } from '~/types'

const props = defineProps<{
  data: ProductCategoryPageApi
}>()

console.log(props.data)
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

  <section class="mb-16 pt-14">
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
              <NuxtLink to="/catalog">Каталог</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{{ props.data?.title }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 class="section-title">{{ props.data?.title }}</h1>
    </div>
  </section>

  <section class="mb-16">
    <div class="container grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      <NuxtLink
        v-for="category in props.data?.list"
        :to="category.url"
        :key="category.id">
        <Card class="group h-full shadow-md hover:shadow-lg p-4 rounded transition-shadow">
          <CardHeader class="p-0 relative">
            <Icon
              name="clarity:layers-line"
              class="absolute right-0 top-0 z-10 text-[#ccc] group-hover:text-red-500 transition-colors"
              width="36"
              height="36" />
            <BaseImage
              class="basis-full md:basis-1/2 lg:basis-2/3 rounded overflow-hidden"
              :src="category.preview_img"
              :alt="category.title"
              width="269"
              height="269"
              placeholder="bg-[#fff]"
              loading="lazy"
              aspect-ratio="1/1"
            />
          </CardHeader>
          <Separator class="my-4" />
          <CardContent class="p-0">
            <h2 class="card-title text-center font-semibold ~text-[18px]/[20px]">{{ category.title }}</h2>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </section>
</template>