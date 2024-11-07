<script
  setup
  lang="ts">
import { useAsyncData, useFetch, useRuntimeConfig } from '#app'
import { Separator } from '~/components/ui/separator'
import URLs from '~/data/urls'
import CATEGORIES from '~/data/categories'
import type { IndexPageApi, NewProductList } from '~/types'
import { type Ref, ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import {
  type DateValue,
  getLocalTimeZone,
  today
} from '@internationalized/date'
import EventCardSkeleton from '~/components/base/EventCardSkeleton.vue'

const date = ref<Date>(new Date())

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>

const newProductsCategory = ref<string>('')
const newProducts = ref<Array<NewProductList>>([]) as Ref<Array<NewProductList>>

const {
  data,
  error
}: {
  data: Ref<IndexPageApi>;
  error: Ref<any>;
} = await useFetch(`${API_ENDPOINT}${URLs.index}`)

if (data?.value) {
  newProducts.value = data.value.new_products.list
}

async function setNewProductsCategory(category: string) {
  newProductsCategory.value = category
  const { data } = await useFetch(`${API_ENDPOINT}${URLs.newProducts}/${category}`)
  if (data?.value) {
    console.log(data.value)
    newProducts.value = data.value
  }
}
</script>

<template>
  <main>
    <Head>
      <Title>Группа компаний ООО «БиоЛайн»</Title>
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
        content="Группа компаний ООО «БиоЛайн»"
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
        content="Группа компаний ООО «БиоЛайн»"
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

    <!-- Slider -->
    <section class="relative mb-24 xl:mb-32 xl:h-[750px]">
      <Carousel class="relative w-full h-full">
        <CarouselContent
          :is-height-full="true"
          class="h-full"
        >
          <CarouselItem
            class="relative h-full"
            v-for="(_, index) in 3"
            :key="index"
          >
            <BaseImage
              src="/img/index-page-slider/slider-1.jpg"
              alt="slider image"
              class="!absolute left-0 top-0 h-full w-full"
              placeholder="bg-[#EBEEF6]"
              width="1920"
              height="860"
              quality="90"
            />

            <div class="container">
              <div class="relative py-20 xl:pt-40 max-w-[620px]">
                <h2 class="uppercase font-semibold ~text-[28px]/[33px]">
                  операционное и госпитальное оборудование
                </h2>
                <Separator class="my-4" />
                <p class="~text-[16px]/[18px]">
                  метод исследования тканей при их значительном увеличении
                  под микроскопом. Это один из наиболее распространённых
                  способов в медицине, он позволяет увидеть структуру тканей,
                  процессы происходящие в ней и патологические нарушения.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>

    <!-- каталог -->
    <section class="mb-24 xl:mb-32">
      <div class="container">
        <h2 class="section-title mb-12 xl:mb-16">Каталог</h2>
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <NuxtLink
            :to="`/catalog/${item.slug}`"
            v-for="item in CATEGORIES"
            class="aspect-video xl:aspect-square"
            :key="item.id"
          >
            <Card class="flex flex-col gap-6 p-4 xl:p-8 items-center justify-between text-center shadow-md square hover:shadow-lg transition-shadow h-full w-full">
              <div class="flex items-center h-1/2">
                <NuxtImg
                  :src="item.icon"
                  height="80"
                  width="80"
                  class="object-contain object-center h-[80px] w-[80px]"
                  :alt="item.title"
                />
              </div>
              <CardContent class="p-0 font-medium h-1/2">
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
          :opts="{ align: 'start' }"
        >
          <CarouselContent :is-visible="true">
            <template v-if="data?.news.length">
              <CarouselItem
                v-for="article in data.news"
                :key="article.id"
                class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              >
                <BaseNewsCard
                  :article="article"
                  image-loading="lazy"
                />
              </CarouselItem>
            </template>

            <template v-else>
              <CarouselItem
                v-for="(_, index) in 6"
                :key="index"
                class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              >
                <BaseNewsCardSkeleton />
              </CarouselItem>
            </template>
          </CarouselContent>

          <div
            class="absolute right-0 -top-[100px] md:-top-[108px] xl:-top-[120px] flex gap-4 items-center"
          >
            <div class="flex gap-4">
              <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
              <CarouselNext class="relative left-0 top-0 translate-y-0" />
            </div>
            <Button
              as-child
              class="hidden md:flex"
            >
              <NuxtLink
                to="/news"
                class="flex gap-2 items-center"
              >
                Все новости
                <ChevronRight class="w-4 h-4 -mr-[6px]" />
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
          :opts="{ align: 'start' }">
          <CarouselContent :is-visible="true">
            <template v-if="data?.new_products">
              <CarouselItem
                v-for="product in newProducts"
                :key="product.id"
                class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                <BaseProductCard :product="product" />
              </CarouselItem>
            </template>

            <template v-else>
              <CarouselItem
                v-for="(_, index) in 6"
                :key="index"
                class="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              >
                <BaseProductCardSkeleton />
              </CarouselItem>
            </template>
          </CarouselContent>
          <div class="absolute right-0 -top-[100px] md:-top-[108px] xl:-top-[120px] flex gap-4 items-center">
            <div class="flex gap-4">
              <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
              <CarouselNext class="relative left-0 top-0 translate-y-0" />
            </div>
            <Select
              :model-value="newProductsCategory"
              @update:model-value="setNewProductsCategory($event)">
              <SelectTrigger class="w-[180px] hidden md:flex">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <template v-if="data?.new_products">
                    <SelectItem
                      v-for="category in data.new_products.title"
                      :key="category.id"
                      :value="`${category.id}`">
                      {{ category.title }}
                    </SelectItem>
                  </template>
                </SelectGroup>
              </SelectContent>
            </Select>
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
        <LazyAppCalendar class="md:w-1/2 relative z-[1] bg-background" />

        <Carousel
          class="h-[inherit] md:w-1/2 relative"
          :opts="{ align: 'start' }"
        >
          <CarouselContent
            :is-visible="true"
            :is-height-full="true"
            class="h-full"
          >
            <template v-if="data?.calendar?.list.length">
              <CarouselItem
                v-for="event in data?.calendar.list"
                :key="event.id"
                class="lg:basis-1/2 h-full"
              >
                <BaseEventCard :event="event" />
              </CarouselItem>
            </template>

            <template v-else>
              <CarouselItem
                v-for="(_, index) in 3"
                :key="index"
                class="lg:basis-1/2 h-full"
              >
                <EventCardSkeleton />
              </CarouselItem>
            </template>
          </CarouselContent>
          <div class="hidden md:flex absolute right-0 -top-[108px] xl:-top-[120px] gap-4 items-center">
            <div class="flex gap-4">
              <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
              <CarouselNext class="relative left-0 top-0 translate-y-0" />
            </div>
            <Button as-child>
              <NuxtLink
                to="/events"
                class="flex gap-2 items-center"
              >
                Все события
                <ChevronRight class="w-4 h-4 -mr-[6px]" />
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
      <template v-if="data?.manufacturers">
        <ClientOnly>
          <NuxtMarquee
            :auto-fill="true"
            :pause-on-hover="true"
          >
            <NuxtLink
              v-for="manufacturer in data.manufacturers"
              :key="manufacturer.id"
              :to="manufacturer.url"
              class="h-[40px] mr-20 grayscale transition hover:grayscale-0"
            >
              <NuxtImg
                loading="lazy"
                :src="manufacturer.logo"
                :alt="manufacturer.title"
                class="w-full h-full object-contain object-center"
              />
            </NuxtLink>
          </NuxtMarquee>
        </ClientOnly>
      </template>
    </section>

    <BaseContactForm />
  </main>
</template>

<style>
.calendar-backdrop::before {
  display: none;
  content: '';
  position: absolute;
  top: -4%;
  left: -50%;
  width: calc(100% - 8px);
  height: 108%;
  background: hsl(225, 67%, 99%);
  z-index: 1;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 768px) {
  .calendar-backdrop::before {
    display: block;
  }
}
</style>
