<script
  setup
  lang="ts">
import { type Ref, ref } from 'vue'
import { SERVICE } from '~/data/constants'
import { Card, CardContent } from '~/components/ui/card'
import { setMapHeight } from '~/composables/setMapHeight'
import BRANCHES from '~/data/branches'
import BRANCH_PARTNERS from '~/data/branch-partners'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'

const coordinates = ref(BRANCHES.spb.map) as Ref<number[]>

const viewport = useViewport() as Ref<boolean>

// create branches object without spb
const branchesFiltered = Object.fromEntries(
  Object
    .entries(BRANCHES)
    .filter(([key, _]): boolean => key !== 'spb')
)
</script>

<template>

  <main>

    <Head>
      <Title>Контакты | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Контакты | Группа компаний ООО «БиоЛайн»" />
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
        content="Контакты | Группа компаний ООО «БиоЛайн»" />
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
        <Breadcrumb class="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Контакты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 class="section-title">Контакты</h1>
      </div>
    </section>

    <section class="mb-12">
      <div class="container flex flex-col md:flex-row gap-4">
        <BaseImage
          class="basis-full md:basis-1/2 lg:basis-2/3 rounded overflow-hidden"
          src="/img/contacts-page-first.jpg"
          alt="центральный офис"
          width="884"
          height="438"
          placeholder="bg-[#2264B4]"
        />
        <div class="basis-full md:basis-1/2 lg:basis-1/3">
          <h2 class="font-bold mb-2">Центральный офис</h2>
          <span>{{ BRANCHES.spb.index }}, </span>
          <span>{{ BRANCHES.spb.country }}, </span>
          <span>{{ BRANCHES.spb.city }}</span>
          <p class="mb-2">{{ BRANCHES.spb.address }}</p>
          <p class="mb-2">{{ BRANCHES.spb.phone }}</p>
          <p class="mb-2">{{ BRANCHES.spb.email }}</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="container">
        <yandex-map
          :settings="{
          location: {
            center: coordinates,
            zoom: 16,
          },
        }"
          width="100%"
          :height="setMapHeight()"
        >
          <yandex-map-default-scheme-layer />
          <yandex-map-default-features-layer />
          <yandex-map-marker
            :settings="{
              hintContent: 'Центральный офис',
              coordinates: coordinates
            }">
            <div class="marker" />
          </yandex-map-marker>
        </yandex-map>
      </div>
    </section>

    <section class="mb-24 xl:mb-32">
      <div class="container flex flex-col md:flex-row gap-4">
        <BaseImage
          class="basis-full md:basis-1/2 lg:basis-2/3 rounded overflow-hidden 2xl:min-h-[438px]"
          src="/img/contacts-page-doctors.jpg"
          alt="сервисная служба"
          width="940"
          height="438"
          quality="90"
          placeholder="bg-[#DDDED9]"
        />
        <Card class="basis-full md:basis-1/2 lg:basis-1/3 p-4">
          <CardHeader class="font-medium p-0">
            <h2 class="~text-[18px]/[22px]">Сервисная служба для всех регионов России</h2>
          </CardHeader>
          <Separator class="my-2" />
          <CardContent class="p-0">
            <p>Телефон: {{ SERVICE.phone }}</p>
            <p>Email: {{ SERVICE.email }}</p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="mb-12">
      <div class="container">
        <h2 class="section-title mb-12">Филиалы</h2>
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
          <Card
            v-for="branch in branchesFiltered"
            :key="branch.id"
            class="flex flex-col gap-6 p-4">
            <CardHeader class="p-0 font-medium">
              <CardTitle>{{ branch.title }}</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent class="p-0 font-medium">
              <span v-if="branch.index">{{ branch.index }}, </span>
              <span v-if="branch.country">{{ branch.country }}, </span>
              <span v-if="branch.city">{{ branch.city }}, </span>
              <p v-if="branch.address">{{ branch.address }}</p>
              <p>{{ branch.phone }}</p>
              <p v-if="branch.email">{{ branch.email }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section class="mb-24 xl:mb-32">
      <div class="container">
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
          <Card
            v-for="branch in BRANCH_PARTNERS"
            :key="branch.id"
            class="flex flex-col gap-6 p-4">
            <CardHeader class="p-0 font-medium">
              <CardTitle class="leading-7">
                {{ branch.title }}
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent class="p-0 font-medium">
              <span>{{ branch.index }}</span>,
              <span>{{ branch.country }}</span>
              <p>{{ branch.city }}</p>
              <p>{{ branch.address }}</p>
              <p>{{ branch.phone }}</p>
              <p>{{ branch.email }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <BaseContactForm />

  </main>

</template>