<script
  setup
  lang="ts">
import { useFetch, useRuntimeConfig } from '#app'
import { Separator } from '~/components/ui/separator'
import { Card, CardContent } from '~/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import URLs from '~/data/urls'
import CATEGORIES from '~/data/categories'
import type { IndexPageApi } from '~/types'
import { type Ref, ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const date = ref(new Date())

const { API_ENDPOINT } = useRuntimeConfig().public

const { data }: { data: IndexPageApi } = await useFetch(`${API_ENDPOINT}${URLs.index}`)

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>

  <Head>
    <Title>Группа компаний ООО «БиоЛайн»</Title>
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
      content="Группа компаний ООО «БиоЛайн»" />
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
      content="Группа компаний ООО «БиоЛайн»" />
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
        <NuxtLink
          :to="`/catalog/${item.slug}`"
          v-for="item in CATEGORIES"
          :key="item.id">
          <Card class="flex flex-col gap-6 p-4 items-center text-center shadow-md hover:shadow-lg transition-shadow h-full">
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
        </NuxtLink>
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
        }">
        <CarouselContent :is-visible="true">
          <CarouselItem
            v-for="article in data.news"
            :key="article.id"
            class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
            <BaseNewsCard
              :article="article"
              image-loading="lazy" />
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-[100px] md:-top-[108px] xl:-top-[120px] flex gap-4 items-center">
          <div class="flex gap-4">
            <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
            <CarouselNext class="relative left-0 top-0 translate-y-0" />
          </div>
          <Button as-child class="hidden md:flex">
            <NuxtLink
              to="/news"
              class="flex gap-2 items-center">
              Все новости
              <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </Button>
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
              <Card class="flex flex-col gap-6 p-6 shadow-md hover:shadow-lg w-full">
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
        <div class="absolute right-0 -top-[100px] md:-top-[108px] xl:-top-[120px] flex gap-4 items-center">
          <div class="flex gap-4">
            <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
            <CarouselNext class="relative left-0 top-0 translate-y-0" />
          </div>
          <Select>
            <SelectTrigger class="w-[180px] hidden md:flex">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  v-for="category in data.new_products.title"
                  :key="category.id"
                  :value="category.title">
                  {{ category.title }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button as-child class="hidden md:flex">
            <NuxtLink
              to="/news"
              class="flex gap-2 items-center">
              Все новинки
              <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </Button>
        </div>
      </Carousel>
    </div>
  </section>

  <!--события-->
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Календарь событий</h2>
    </div>

    <div class="container relative flex flex-col md:flex-row gap-4 calendar-backdrop">

      <LazyAppCalendar class="md:w-1/2 relative z-20 bg-background" />

      <Carousel
        class="h-[inherit] md:w-1/2 relative"
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
            class="lg:basis-1/2 h-full">
            <BaseEventCard :event="event" />
          </CarouselItem>
        </CarouselContent>
        <div class="hidden md:flex absolute right-0 -top-[108px] xl:-top-[120px] gap-4 items-center">
          <div class="flex gap-4">
            <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
            <CarouselNext class="relative left-0 top-0 translate-y-0" />
          </div>
          <Button as-child>
            <NuxtLink
              to="/events"
              class="flex gap-2 items-center">
              Все события
              <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </Button>
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

<style>
.calendar-backdrop::before {

  display: none;
  content: '';
  position: absolute;
  top: -4%;
  left: 0;
  width: calc(50% - 8px);
  height: 108%;
  background: #fff;
  z-index: 1;
}

@media (min-width: 768px) {
  .calendar-backdrop::before {
    display: block;
  }
}
</style>
