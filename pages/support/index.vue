<script setup>
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>

  <Head>
    <Title>Технический сервис | Группа компаний ООО «БиоЛайн»</Title>
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
      content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
      content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
      <Breadcrumb class="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink to="/">Главная</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Технический сервис</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 class="section-title">Технический сервис</h1>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="(_,index) in 5"
          :key="index"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <NuxtImg
            src="/img/categories/icons/1.svg"
            class="w-[80px] object-contain object-center"
            alt="alt" />
          <CardContent class="p-0 font-medium">
            <p>
              Четкое планирование и прогнозирование профессиональной подготовки персонала и обеспечение современной
              системы корпоративного обучения
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>