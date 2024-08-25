<script
  setup
  lang="ts">
import { X } from 'lucide-vue-next'
import { useElementSize } from '@vueuse/core'
import { setColumnWidth, setTableWidth } from '~/composables/setTableWidth'

const categories = ref([
  {
    id: 1,
    title: '1111',
    products: [
      {
        id: 11,
        title: '11 Автоматизированная система для дезагрегации тканей BD Medimachine II',
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
    title: '2222',
    products: [
      {
        id: 21,
        title: '21 Ротационный микротом Leica HistoCore BIOCUT с ручным приводом',
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
        id: 22,
        title: '22 Ротационный микротом Leica RM 2125 RTS',
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
  },
  {
    id: 3,
    title: '333333',
    products: [
      {
        id: 31,
        title: '31 Автоматизированная система для дезагрегации тканей BD Medimachine II',
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
        id: 32,
        title: '32  Автоматизированная система для дезагрегации тканей BD Medimachine II',
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
        id: 33,
        title: '33 Автоматизированная система для дезагрегации тканей BD Medimachine II',
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
    id: 4,
    title: '444444',
    products: [
      {
        id: 41,
        title: '41 Ротационный микротом Leica HistoCore BIOCUT с ручным приводом',
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
        id: 42,
        title: '42 Ротационный микротом Leica RM 2125 RTS',
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
        id: 43,
        title: '43 Ротационный микротом Leica RM 2125 RTS',
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
        id: 44,
        title: '44 Ротационный микротом Leica RM 2125 RTS',
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
  },
  {
    id: 5,
    title: '55555',
    products: [
      {
        id: 51,
        title: '51 Ротационный микротом Leica HistoCore BIOCUT с ручным приводом',
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
        id: 52,
        title: '52 Ротационный микротом Leica RM 2125 RTS',
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
        id: 53,
        title: '53 Ротационный микротом Leica RM 2125 RTS',
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
        id: 54,
        title: '54 Ротационный микротом Leica RM 2125 RTS',
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
        id: 55,
        title: '55 Ротационный микротом Leica RM 2125 RTS',
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

const table = ref<HTMLElement | null>(null)
const tableWrapper = ref<HTMLElement | null>(null)
const tableWrapperWidth = ref<number>(0)
const tableTransition = ref<number>(0)

function setActiveCategory(id: number): void {
  tableTransition.value = 0
  activeCategory.value = categories.value.filter(category => {
    return category.id === id
  })[0]
}

function removeCategory(): void {
  console.log('remove')
}

onMounted((): void => {
  setActiveCategory(categories.value[0].id)
})

watch(() => tableWrapper.value, () => {
  tableWrapperWidth.value = useElementSize(tableWrapper).width.value
})

function sliderRight(): void {
  tableTransition.value -= setColumnWidth(tableWrapperWidth.value)
}
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

    <section class="mb-12 xl:mb-16 pt-6 xl:pt-14">
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
        <div
          ref="tableWrapper"
          class="relative">
          <Table
            :transition="tableTransition"
            :class="setTableWidth(activeCategory, tableWrapperWidth)">
            <TableHeader>
              <TableRow>
                <TableHead
                  v-for="product in activeCategory.products"
                  class="py-2 px-2 text-[13px]"
                  :style="`min-width: ${setColumnWidth(tableWrapperWidth)}px; max-width: ${setColumnWidth(tableWrapperWidth)}px;`"
                  :key="product.id">
                  {{ product.title }}
                </TableHead>
              </TableRow>
              <TableRow class="h-2 !border-b-0"></TableRow>
            </TableHeader>
            <TableBody>
              <template
                v-for="item in activeCategory.characteristics"
                :key="item.id">
                <TableRow>
                  <TableCell
                    class="font-semibold text-[12px] relative"
                    colspan="10">
                    <p>{{ item.title }}</p>
                  </TableCell>
                </TableRow>
                <TableRow class="border-b-0">
                  <TableCell
                    v-for="product in activeCategory.products"
                    :key="product.id">
                    {{ product.characteristics.find(char => char.id === item.id)?.value }}
                  </TableCell>
                </TableRow>
                <TableRow class="h-2 border-b-0"></TableRow>
              </template>
            </TableBody>
          </Table>
          <div
            class="absolute right-0 -top-8 text-lg"
            @click="sliderRight()">>
          </div>
          <div class="absolute left-0 -top-8 text-lg"><</div>
        </div>
      </div>
    </section>

  </main>
</template>

<style>
.table-one-element {
  @apply w-1/2 md:w-1/3 xl:w-1/4;
}

.table-two-elements {
  @apply w-full md:w-2/3 xl:w-1/2;
}

.table-three-elements {
  @apply w-full xl:w-3/4;
}
</style>