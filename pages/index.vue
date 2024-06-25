<script
  setup
  lang="ts">
import { useFetch, useRuntimeConfig, useSeoMeta } from '#app'
import { Separator } from '~/components/ui/separator'
import { Card, CardContent } from '~/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import URLs from '~/data/urls'
import CATEGORIES from '~/data/categories'
import type { IndexPageApi } from '~/types'
import { Calendar } from '@/components/ui/v-calendar'
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const date = ref(new Date())

const { API_ENDPOINT } = useRuntimeConfig().public

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

const { data }: { data: IndexPageApi } = await useFetch(`${API_ENDPOINT}${URLs.index}`)

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>

  <!-- Slider -->
  <section class="relative mb-24 xl:mb-32 xl:h-[750px]">
    <NuxtPicture
      src="/img/index-page-slider/slider-1.jpg"
      class="absolute left-0 top-0 h-full w-full"
      quality="90"
      :imgAttrs="{class:'w-full h-full object-cover object-top'}"
      alt="slider image"
    />
    <div class="container">
      <div class="relative py-20 xl:pt-40 xl:w-1/2 max-w-[660px]">
        <h2 class="uppercase font-semibold ~text-[28px]/[36px]">операционное и госпитальное оборудование</h2>
        <Separator class="my-4" />
        <p>
          метод исследования тканей при их значительном увеличении под микроскопом. Это один из наиболее
          распространённых способов в медицине, он позволяет увидеть структуру тканей, процессы происходящие в ней
          и патологические нарушения.
        </p>
      </div>
    </div>
  </section>

  <!-- каталог -->
  <section class="mb-24 xl:mb-32">
    <div class="container">
      <h2 class="section-title mb-12 xl:mb-16">Каталог</h2>
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
        <Card
          v-for="item in CATEGORIES"
          :key="item.id"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <NuxtImg
            :src="item.icon"
            class="object-contain object-center w-[80px] h-[80px]"
            width="80"
            height="80"
            :alt="item.title" />
          <CardContent class="p-0 font-medium">
            <p class="~text-[18px]/[22px]">{{ item.title }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <!--новости-->
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Новости</h2>
    </div>
    <div class="container">
      <Carousel
        class="relative w-full"
        :opts="{
            align: 'start',
          }"
      >
        <CarouselContent :is-visible="true">
          <CarouselItem
            v-for="article in data.news"
            :key="article.id"
            class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
            <BaseNewsCard :article="article" />
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-32 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <!--новинки-->
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Новинки</h2>
    </div>
    <div class="container">
      <Carousel
        class="relative w-full"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent :is-visible="true">
          <CarouselItem
            v-for="product in data.new_products.list"
            :key="product.id"
            class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
            <NuxtLink
              to="/"
              class="flex h-full">
              <Card class="flex flex-col gap-6 p-6">
                <CardHeader class="p-0">
                  <NuxtPicture
                    :src="product.preview_img"
                    :alt="product.title"
                    :img-attrs="{class:'w-full h-full object-scale-down object-center'}"
                    class="aspect-square"
                    width="350"
                    height="250"
                  />
                </CardHeader>
                <CardContent class="flex flex-col p-0 flex-auto">
                  <Separator class="w-full mb-6" />
                  <h3 class="font-semibold text-xl">{{ product.title }}</h3>
                </CardContent>
                <CardFooter class="flex items-center justify-between p-0">
                  <div class="flex gap-4 items-center">
                    <Icon
                      name="mdi:compare-horizontal"
                      width="18"
                      height="18"
                      color="#575757" />
                    <Icon
                      name="cil:star"
                      width="18"
                      height="18"
                      color="#575757" />
                  </div>
                  <Icon
                    name="iconamoon:arrow-right-2-light"
                    width="18"
                    height="18"
                    style="color: #575757" />
                </CardFooter>
              </Card>
            </NuxtLink>
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-32 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <!--календарь-->
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Календарь событий</h2>
    </div>
    <div class="container relative flex flex-col md:flex-row gap-4">

      <Calendar
        v-model="date"
        :first-day-of-week="2"
        locale="ru"
        wrapper-class="xl:w-1/2 bg-background relative z-10"
        class="rounded-md border">
      </calendar>

      <Carousel
        class="xl:absolute xl:left-[calc(50%+1rem)] xl:w-[calc(50%-2rem)] 2xl:w-[calc(50%-180px-1rem)] h-full"
        :opts="{
          align: 'start',
        }">
        <CarouselContent
          :is-visible="true"
          :is-height-full="true"
          class="h-full">
          <CarouselItem
            v-for="event in data.calendar.list"
            :key="event.id"
            class="md:basis-1/2 h-full">
            <div class="p-0 h-full">
              <Card class="h-full">
                <CardHeader class="p-0">
                  <NuxtImg
                    :src="event.preview_img"
                    :alt="event.title"
                    height="150"
                    class="w-full h-[150px] object-cover object-top"
                  />
                </CardHeader>
                <CardContent class="flex flex-col justify-center p-6">
                  <h3 class="text-3xl font-semibold">{{ event.title }}</h3>
                  <p>{{ event.annotation }}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-28 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <!--партнёры-->
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Партнёры</h2>
    </div>
    <NuxtMarquee
      :auto-fill="true"
      :pause-on-hover="true">
      <NuxtLink
        v-for="manufacturer in data.manufacturers"
        :key="manufacturer.id"
        :to="manufacturer.url"
        class="h-[70px] mr-10 grayscale transition hover:grayscale-0">
        <NuxtImg
          loading="lazy"
          :src="manufacturer.logo"
          :alt="manufacturer.title"
          class="w-full h-full object-contain object-center" />
      </NuxtLink>
    </NuxtMarquee>
  </section>

  <BaseContactForm />

</template>
