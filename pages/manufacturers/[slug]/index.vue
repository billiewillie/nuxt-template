<script
  setup
  lang="ts">
import type { Manufacturer } from '~/types'
import type { Ref } from 'vue'
import ProductCard from '~/components/base/ProductCard.vue'

const route = useRoute()
const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const { data: manufacturer }: { data: Ref<Manufacturer> } = await useFetch(`${API_ENDPOINT}${route.fullPath}`)
</script>

<template>
  <main>
    <Head>
      <Title>{{ manufacturer.title }} | Группа компаний ООО «БиоЛайн»</Title>
      <Meta
        name="description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="twitter:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="og:title"
        content="Производители | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app"
      />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/contacts"
      />
      <Meta
        name="og:image:width"
        content="1200"
      />
      <Meta
        name="og:image:height"
        content="630"
      />
      <Meta
        name="og:type"
        content="article"
      />
      <Meta
        name="og:locale"
        content="ru_RU"
      />
      <Meta
        name="twitter:title"
        content="Производители | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="twitter:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="twitter:site"
        content="bioline.vercel.app"
      />
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>

    <section class="mb-16 pt-8">
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
                <NuxtLink to="/manufacturers">Производители</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{{ manufacturer?.title }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>

    <section class="mb-16">
      <div class="container grid grid-cols-4 gap-4">
        <NuxtImg
          :src="manufacturer.logo"
          height="80"
          class="h-[80px] w-full flex"
          :alt="manufacturer.title"
        />
        <div
          class="col-span-2 flex flex-col gap-4 text-base [&_a]:underline [&_a]:underline-offset-4"
          v-html="manufacturer.content"
        ></div>
      </div>
    </section>

    <section class="mb-16" v-if="manufacturer.list.length">
      <div class="container grid grid-cols-4 gap-4">
        <ProductCard
          v-for="product in manufacturer.list"
          :product="product"
          :key="product.id" />
      </div>
    </section>
  </main>
</template>
