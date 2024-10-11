<script setup lang="ts">
import { MANUFACTURER_BUTTONS } from '~/data/constants';
import type { ManufacturerCategory, Manufacturer } from '~/types';
import type { Ref } from 'vue';
import URLs from '~/data/urls';

interface ManufacturersPageApi {
  id: number;
  title: string;
  logo: string;
  content: string;
  article: string;
  url: string;
  metadata: any;
  sort: number;
  lang_id: number;
  created_at: string;
  list: Array<Manufacturer>;
}

const activeCategory = ref<ManufacturerCategory | null>(null);

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public;

const { data: categories }: { data: Ref<ManufacturersPageApi> } = await useFetch(`${API_ENDPOINT}${URLs.manufacturers}`);

if (categories.value && categories.value.manufacturers.length) {
  activeCategory.value = categories.value.manufacturers[0] as ManufacturerCategory;
}
</script>

<template>
  <main>
    <Head>
      <Title>Производители | Группа компаний ООО «БиоЛайн»</Title>
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

    <section class="mb-12 xl:mb-16 pt-14">
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
              <BreadcrumbPage>Производители “БиоЛайн”</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div class="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
          <h1 class="section-title">Производители</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <template v-if="categories">
              <Button
                v-for="manufacturer in MANUFACTURER_BUTTONS"
                :variant="manufacturer.value === activeCategory?.url ? 'default' : 'outline'"
                @click="activeCategory = categories.manufacturers.find(({ url }) => url === manufacturer.value) as ManufacturerCategory"
                :key="manufacturer.value"
              >
                {{ manufacturer.title }}
              </Button>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
        <NuxtLink
          v-for="manufacturer in activeCategory?.list"
          :key="manufacturer.id"
          :to="manufacturer.url"
        >
          <Card class="flex flex-col gap-4 h-full">
            <CardHeader class="flex flex-col flex-start gap-4">
              <NuxtImg
                :src="manufacturer.logo"
                height="60"
                class="h-[60px] flex self-start"
                :alt="manufacturer.title"
              />
              <h2 class="font-bold ~text-[20px]/[24px]">
                {{ manufacturer.title }}
              </h2>
            </CardHeader>
            <CardContent>
              <p class="text-xl"><b>Leica Biosystems</b> - разработчик решений и средств автоматизации рабочих процессов для проведения патогистологических исследований.</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
