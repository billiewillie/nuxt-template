<script setup>
import { ref } from 'vue'
import CONTACTS from '~/data/contacts'
import { SERVICE } from '~/data/constants'
import { Card, CardContent } from '~/components/ui/card'
import BRANCHES from '~/data/branches'
import { useSeoMeta } from '#app'

const isLoaded = ref(false)

useSeoMeta({
  ogImage: '/img/og-logo.jpg',
  ogType: 'website',
  ogImageHeight: 630,
  ogImageWidth: 1200,
  ogLocale: 'ru_RU',
  ogSiteName: 'Группа компаний ООО «БиоЛайн»',
  ogTitle: 'Группа компаний ООО «БиоЛайн»',
  ogDescription: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.',
  ogUrl: 'https://bioline.ru',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Группа компаний ООО «БиоЛайн»',
  twitterDescription: 'Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля.',
  twitterImage: '/img/og-logo.jpg'
})
</script>

<template>

  <section class="mb-12 pt-14">
    <div class="container">
      <h1 class="section-title">Контакты</h1>
    </div>
  </section>

  <section class="mb-20">
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
          v-for="branch in BRANCHES"
          :key="branch.id"
          class="flex flex-col gap-6 p-4">
          <CardHeader class="p-0 font-medium">
            <CardTitle>{{ branch.city }}</CardTitle>
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