<script setup>
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import PARTNERS from '~/data/partners'
import CATEGORIES from '~/data/categories'
</script>

<template>

  <section class="relative mb-40 h-[750px]">
    <NuxtPicture
      src="/img/index-page-slider/slider-1.jpg"
      class="absolute left-0 top-0 h-full w-full"
      quality="90"
      :imgAttrs="{class:'w-full h-full object-cover object-top'}"
      alt="slider image"
    />
    <div class="container">
      <div class="relative pt-40 w-1/2">
        <h2 class="uppercase">операционное и госпитальное оборудование</h2>
        <Separator />
        <p>
          метод исследования тканей при их значительном увеличении под микроскопом. Это один из наиболее
          распространённых способов в медицине, он позволяет увидеть структуру тканей, процессы происходящие в ней
          и патологические нарушения.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <h2 class="section-title mb-16">Каталог</h2>
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="item in CATEGORIES"
          :key="item.id"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <NuxtImg
            :src="item.icon"
            class="w-[80px] object-contain object-center"
            :alt="item.title" />
          <CardContent class="p-0 font-medium">
            <p class="text-2xl">{{ item.title }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <section class="mb-40">
    <div class="container mb-20">
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
            v-for="(_, index) in 9"
            :key="index"
            class="md:basis-1/2 lg:basis-1/5">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-32 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <section class="mb-40">
    <div class="container mb-20">
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
            v-for="(_, index) in 9"
            :key="index"
            class="md:basis-1/2 lg:basis-1/5">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-32 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <section class="mb-40">
    <div class="container mb-20">
      <h2 class="section-title">Календарь событий</h2>
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
            v-for="(_, index) in 9"
            :key="index"
            class="md:basis-1/2 lg:basis-1/5">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="absolute right-0 -top-32 border">
          <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
          <CarouselNext class="relative left-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>

  <section class="mb-40">
    <div class="container mb-20">
      <h2 class="section-title">Партнёры</h2>
    </div>
    <NuxtMarquee
      :auto-fill="true"
      :pause-on-hover="true">
      <NuxtLink
        v-for="partner in PARTNERS"
        :key="partner.id"
        :to="`/manufacturers/${partner.slug}`"
        class="h-[70px] mr-10 grayscale transition hover:grayscale-0">
        <NuxtImg
          loading="lazy"
          :src="partner.logo"
          :alt="partner.title"
          class="w-full h-full object-contain object-center" />
      </NuxtLink>
    </NuxtMarquee>
  </section>

  <section class="relative h-[750px]">
    <NuxtPicture
      src="/img/contacts-form-bg.jpg"
      class="absolute left-0 top-0 h-full w-full"
      quality="90"
      :imgAttrs="{class:'w-full h-full object-cover object-top'}"
      alt="contacts form image"
    />
    <div class="container flex justify-end items-center h-full">
      <div class="bg-background relative p-10 rounded w-1/2">
        <h2 class="text-center text-2xl">
          Заполните форму с контактными данными и наш специалист свяжется с Вами:
        </h2>
        <form action="">
          <input
            type="text"
            placeholder="Ваше имя"
            class="mb-4" />
          <button
            class="w-full"
            type="submit">Отправить
          </button>
        </form>
      </div>
    </div>
  </section>

</template>
