<script
  setup
  lang="ts">
import type { ProductCard } from '~/types'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

const product: ProductCard = {
  id: 1,
  title: 'Автоматизированная система для дезагрегации тканей BD Medimachine II',
  preview_img: 'https://telvla.ru/upload/image/products/previews/leica_vt1200_s.webp',
  url: '/catalog/diagnosis-oncological-diseases/gistologiya/vibratomy/poluavtomaticheskij-mikrotom-s-vibriruyushchim-lezviem-leica-vt1200-s',
  sort: 500,
  is_favourites: 1,
  is_comparison: 0,
  description: '',
  is_published: 1,
  keywords: '',
  tag: ''
}
</script>

<template>
  <main>

    <Head>
      <Title>Избранное | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Избранное | Группа компаний ООО «БиоЛайн»" />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app" />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/wishlist" />
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
        content="Избранное | Группа компаний ООО «БиоЛайн»" />
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

    <section class="mb-12 xl:mb-16 pt-14">
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
              <BreadcrumbPage>Избранное</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">Избранное</h1>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <BaseProductCard
          v-for="(_, index) in 8"
          :key="index"
          :product="product" />
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container">
        <Table class="mb-6 w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Артикул / №</TableHead>
              <TableHead>Название</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="(_, index) in 8"
              :key="index">
              <TableCell>DS153769</TableCell>
              <TableCell>Стереомикроскоп Nexcope NSZ-810</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>

  </main>
</template>