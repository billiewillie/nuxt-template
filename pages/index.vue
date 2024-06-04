<script setup>
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
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
      <h2 class="section-title">Каталог</h2>
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-4">
        <Card
          v-for="i in 9"
          :key="i"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <Icon
            name="uil:github"
            size="80"
            color="black" />
          <Separator></Separator>
          <CardContent class="p-0">
            <p>Диагностика онкологических заболеваний</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <h2 class="section-title">Новости</h2>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <h2 class="section-title">Новинки</h2>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <h2 class="section-title">Календарь событий</h2>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <h2 class="section-title">Партнёры</h2>
    </div>
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
