<script setup>
import { ref } from 'vue'
import CONTACTS from '~/data/contacts'
import { SERVICE } from '~/data/constants'
import { Card, CardContent } from '~/components/ui/card'
import BRANCHES from '~/data/branches'
import BRANCH_PARTNERS from '~/data/branch-partners'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'

// create branches object without spb
const branchesFiltered = Object.fromEntries(
  Object
    .entries(BRANCHES)
    .filter(([key]) => key !== 'spb')
)

const isLoaded = ref(false)

const coordinates = ref(BRANCHES.spb.map)
</script>

<template>

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

  <section class="mb-12 pt-14">
    <div class="container">
      <h1 class="section-title">Контакты</h1>
    </div>
  </section>

  <section class="mb-12">
    <div class="container flex gap-4">
      <div class="relative basis-2/3 3xl:min-h-[438px] rounded overflow-hidden">
        <div
          class="absolute left-0 top-0 w-full h-full bg-blue-500 transition-opacity duration-500"
          :class="{ 'opacity-0': isLoaded }"></div>
        <NuxtPicture
          src="/img/contacts-page-first.jpg"
          class="w-full h-full object-cover object-top"
          :img-attrs="{class:'w-full h-full object-cover object-top'}"
          quality="80"
          width="940"
          height="438"
          alt="центральный офис"
          @load="isLoaded = true"
        />
      </div>
      <div class="basis-1/3">
        <h2>Центральный офис</h2>
        <p>{{ CONTACTS.spb.index }}</p>
        <p>{{ CONTACTS.spb.country }}</p>
        <p>{{ CONTACTS.spb.city }}</p>
        <p>{{ CONTACTS.spb.address }}</p>
        <p>{{ CONTACTS.spb.phone }}</p>
        <p>{{ CONTACTS.spb.email }}</p>
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
        height="500px"
      >
        <yandex-map-default-scheme-layer />
        <yandex-map-default-features-layer />
        <yandex-map-marker
          :settings="{
            hintContent: 'Центральный офис', coordinates: coordinates
          }">
          <div class="marker" />
        </yandex-map-marker>
      </yandex-map>
    </div>
  </section>

  <section class="mb-20">
    <div class="container flex gap-4">
      <div class="relative basis-2/3 3xl:min-h-[438px] rounded overflow-hidden">
        <div
          class="absolute left-0 top-0 w-full h-full bg-[#ccc] transition-opacity duration-500"
          :class="{ 'opacity-0': isLoaded }"></div>
        <NuxtPicture
          src="/img/contacts-page-doctors.jpg"
          class="w-full h-full object-cover object-top"
          :img-attrs="{class:'w-full h-full object-cover object-top'}"
          quality="90"
          width="940"
          height="438"
          alt="центральный офис"
          @load="isLoaded = true"
        />
      </div>
      <div class="basis-1/3">
        <h2>Сервисная служба для всех регионов России</h2>
        <p>Телефон: {{ SERVICE.phone }}</p>
        <p>Email: {{ SERVICE.email }}</p>
      </div>
    </div>
  </section>

  <section class="mb-20">
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

  <section class="mb-20">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="branch in BRANCH_PARTNERS"
          :key="branch.id"
          class="flex flex-col gap-6 p-4">
          <CardHeader class="p-0 font-medium">
            <CardTitle>{{ branch.title }}</CardTitle>
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

</template>