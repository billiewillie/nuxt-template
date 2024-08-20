<script
  setup
  lang="ts">

import type { ProductCard } from '~/types'
import { X } from 'lucide-vue-next'

const activeList = ref([
  {
    id: 1,
    title: 'товар 1',
    characteristic_groups: [
      {
        id: 1,
        title: 'Объектив',
        value: '40x'
      },
      {
        id: 1,
        title: 'Объектив',
        value: '40x'
      }
    ]
  },
  {
    id: 2,
    title: 'товар 2'
  }
])

const activeCategory = ref('микроскопы')

const categories = ref([
  {
    id: 1,
    title: 'микроскопы',
    products: [
      {
        id: 11,
        title: 'Автоматизированная система для дезагрегации тканей BD Medimachine II',
        characteristics: [
          {
            id: 123,
            value: 'Большой'
          },
          {
            id: 1234,
            value: 'Windows'
          }
        ]
      },
      {
        id: 12,
        title: 'Автоматизированная лошадь BD 5',
        characteristics: [
          {
            id: 123,
            value: 'Маленький'
          },
          {
            id: 1234,
            value: 'MacOS'
          }
        ]
      },
      {
        id: 11,
        title: 'Автоматизированная система для дезагрегации тканей BD Medimachine II',
        characteristics: [
          {
            id: 123,
            value: 'Большой'
          },
          {
            id: 1234,
            value: 'Windows'
          }
        ]
      }
    ],
    characteristics: [
      {
        id: 123,
        title: 'Экран'
      },
      {
        id: 1234,
        title: 'Операционная система'
      }
    ]
  },
  {
    id: 2,
    title: 'гистология',
    products: [
      {
        id: 11,
        title: 'Ротационный микротом Leica HistoCore BIOCUT с ручным приводом',
        characteristics: [
          {
            id: 45,
            value: 'ок. 20 мкм'
          },
          {
            id: 56,
            value: '0,51–61 мкм'
          }
        ]
      },
      {
        id: 12,
        title: 'Ротационный микротом Leica RM 2125 RTS',
        characteristics: [
          {
            id: 45,
            value: 'ок. 20 км'
          },
          {
            id: 56,
            value: '0,5–60 мкм'
          }
        ]
      },
      {
        id: 11,
        title: 'Автоматизированная система для дезагрегации тканей BD Medimachine II',
        characteristics: [
          {
            id: 123,
            value: 'Большой'
          },
          {
            id: 1234,
            value: 'Windows'
          }
        ]
      }
    ],
    characteristics: [
      {
        id: 45,
        title: 'Шаг толщины среза'
      },
      {
        id: 56,
        title: 'Диапазон толщины среза'
      }
    ]
  }
])

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

// function setActiveCategory(category: string) {
//   activeCategory.value = category
// }
//
// function removeCategory(category: string) {
//   categories.value = categories.value.filter(item => item !== category)
//   console.log(categories)
// }
</script>

<template>
  <main>

    <Head>
      <Title>Сравнение | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Сравнение | Группа компаний ООО «БиоЛайн»" />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app" />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/compare" />
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
        content="Сравнение | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Сравнение</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 class="section-title mb-12">Сравнение</h1>

        <div class="flex flex-wrap gap-4">
          <!--          <Button-->
          <!--            :variant="activeCategory === category ? 'secondary' : 'outline'"-->
          <!--            v-for="category in categories"-->
          <!--            :key="category"-->
          <!--            class="rounded-full text-sm p-2 h-8 md:h-10 md:p-4 border"-->
          <!--            @click="setActiveCategory(category)">-->
          <!--            {{ category }} {{ activeList.length }} -->
          <!--            <X-->
          <!--              v-show="activeCategory === category"-->
          <!--              @click="(e) => {-->
          <!--                e.preventDefault();-->
          <!--                removeCategory(category);-->
          <!--              }"-->
          <!--              class="w-4 h-4 text-muted-foreground" />-->
          <!--          </Button>-->
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <Carousel>
          <CarouselContent>
            <CarouselItem
              v-for="product in activeList"
              class="basis-1/4"
              :key="product.id">
              <p>{{ product.title }}</p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <!--        <BaseProductCard-->
        <!--          v-for="(_, index) in 3"-->
        <!--          :key="index"-->
        <!--          :product="product" />-->
      </div>
    </section>

  </main>
</template>