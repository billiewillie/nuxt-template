<script
  setup
  lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import type { Events } from '~/types'
import { useFetch, useRuntimeConfig } from '#app'
import URLs from '~/data/urls'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import EventCardSkeleton from '~/components/base/EventCardSkeleton.vue'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>

const date = ref<Date>(new Date())
const month = date.value.getMonth() + 1

const {
  data: events
}: {
  data: Ref<Events>
} = await useFetch(`${API_ENDPOINT}${URLs.events}/${month}/10`)

console.log(events.value)
</script>

<template>
  <main>

    <Head>
      <Title>Календарь | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Календарь | Группа компаний ООО «БиоЛайн»" />
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
        content="Календарь | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Календарь мероприятий</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 class="section-title">Календарь мероприятий</h1>
      </div>
    </section>

    <section class="mb-4">
      <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 xl:gap-y-0 gap-x-4">

        <AppCalendar class="xl:col-span-3 bg-background relative z-10" />

        <div class="flex flex-col border rounded justify-between p-4 bg-background">
          <Select>
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  v-for="category in events.categories"
                  :key="category.id"
                  :value="category.title">
                  {{ category.title }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Тип мероприятия" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  v-for="type in events.type_events"
                  :key="type.id"
                  :value="type.title">
                  {{ type.title }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>Применить</Button>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="container">
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          <template v-if="events.list.length">
            <BaseEventCard
              v-for="event in events.list"
              :key="event.id"
              :event="event" />
          </template>

          <template v-else>
            <EventCardSkeleton
              v-for="index in 3"
              :key="index" />
          </template>

        </div>
      </div>
    </section>

  </main>
</template>
