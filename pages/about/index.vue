<script setup>
import CATEGORIES from '~/data/categories'
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>

  <Head>
    <Title>О компании | Группа компаний ООО «БиоЛайн»</Title>
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
      content="О компании | Группа компаний ООО «БиоЛайн»" />
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
      content="О компании | Группа компаний ООО «БиоЛайн»" />
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

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">О компании</h1>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="(item, index) in 6"
          :key="index"
          class="flex flex-col gap-6 p-4 items-center text-center">

          <CardHeader class="flex flex-row gap-8 items-center">
            <NuxtImg
              src="/img/categories/icons/1.svg"
              class="w-[50px] object-contain object-center"
              alt="alt" />
            <CardTitle>Удобство работы с нами</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent class="p-0 font-medium">
            <p class="text-xl">
              Мы признательны всем, кто ежедневно делает свой вклад в сохранение здоровья людей,
              мы восхищаемся вашим трудолюбием
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>
