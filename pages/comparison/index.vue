<script
  setup
  lang="ts">
import { X } from 'lucide-vue-next'
import { watchOnce } from '@vueuse/core'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { CarouselApi } from '~/components/ui/carousel'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

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

const activeCategory = ref({})

function setActiveCategory(id: number): void {
  activeCategory.value = categories.value.filter(category => category.id === id)[0]
}

function removeCategory(): void {
  console.log('remove')
}

onMounted((): void => {
  setActiveCategory(categories.value[0].id)
})

watchOnce(api, (api) => {
  if (!api) return

  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap() + 1

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})
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
          <Button
            :variant="activeCategory.id === category.id ? 'secondary' : 'outline'"
            v-for="category in categories"
            :key="category.title"
            class="rounded-full text-sm p-2 h-8 md:h-10 md:p-4 border"
            @click="setActiveCategory(category.id)"
          >
            {{ category.title }} {{ category.products.length }} 
            <X
              v-show="activeCategory === category.title"
              @click="(e) => {
                e.preventDefault();
                console.log('remove category')
              }"
              class="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <Carousel
          class="relative w-full max-w-xs"
          @init-api="setApi">
          <CarouselContent>
            <CarouselItem
              v-for="(_, index) in 5"
              :key="index">
              <div class="p-1">
                <Card>
                  <CardContent class="flex aspect-square items-center justify-center p-6">
                    <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>


        <div class="py-2 text-center text-sm text-muted-foreground">
          Slide {{ current }} of {{ totalCount }}
        </div>
        <!--        <Carousel @init-api="setApi">-->
        <!--          <CarouselContent>-->
        <!--            <CarouselItem-->
        <!--              v-for="product in activeCategory.products"-->
        <!--              :key="product.id">-->
        <!--              <p>{{ product.title }}</p>-->
        <!--            </CarouselItem>-->
        <!--          </CarouselContent>-->
        <!--          <CarouselPrevious />-->
        <!--          <CarouselNext />-->
        <!--        </Carousel>-->
      </div>
    </section>

  </main>
</template>