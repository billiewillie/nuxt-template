<script
  setup
  lang="ts">
import { X } from 'lucide-vue-next'
import { useElementSize } from '@vueuse/core'
import { setColumnWidth, setTableWidth } from '~/composables/setTableWidth'

const compareList = useCookie('compareList')
const categories = ref([])
const activeCategory = ref({})
const table = ref<HTMLElement | null>(null)
const tableWrapper = ref<HTMLElement | null>(null)
const tableWrapperWidth = ref<number>(0)
const tableTransition = ref<number>(0)
const isAllowedToScrollRight = ref<boolean>(false)
const isTableHeaderVisible = ref<boolean>(false)
let productImageHeight = ref<number>(0)

function setActiveCategory(id: number): void {
  tableTransition.value = 0
  activeCategory.value = categories.value.find(category => {
    return category.id === id
  })
}

function removeCategory(categoryId: number): void {
  tableTransition.value = 0

  categories.value = categories.value.filter(category => {
    return category.id !== categoryId
  })

  if (categories.value && categories.value.length) {
    setActiveCategory(categories.value[0].id)
  } else {
    activeCategory.value = {}
  }
}

function removeFromCompare(productId: number): void {
  activeCategory.value.products = activeCategory.value.products.filter(product => {
    return product.id !== productId
  })

  if (!activeCategory.value.products || !activeCategory.value.products.length) {
    removeCategory(activeCategory.value.id)
  }

  if (tableTransition.value < 0) {
    tableTransition.value += setColumnWidth(tableWrapperWidth.value)
  }

  setIsAllowedToScrollRight()
}

function sliderRight(): void {
  tableTransition.value -= setColumnWidth(tableWrapperWidth.value)
  setIsAllowedToScrollRight()
}

function sliderLeft(): void {
  if (tableTransition.value < 0) {
    tableTransition.value += setColumnWidth(tableWrapperWidth.value)
    setIsAllowedToScrollRight()
  }
}

function setIsAllowedToScrollRight(): void {
  if (activeCategory.value.products && activeCategory.value.products.length) {
    isAllowedToScrollRight.value = (setColumnWidth(tableWrapperWidth.value) * activeCategory.value.products.length
      - -tableTransition.value
      - tableWrapperWidth.value) > 0
  }
}

watch(() => tableWrapper.value, () => {
  tableWrapperWidth.value = useElementSize(tableWrapper).width.value
  setIsAllowedToScrollRight()
})

onMounted(async (): Promise<void> => {
  await setActiveCategory(categories.value[0].id)

  await nextTick()
  await nextTick()

  const table = document.getElementById('table-body')
  productImageHeight = document.querySelectorAll('table img')[0].getBoundingClientRect().height
  const windowHeight = document.documentElement.clientHeight

  const observer = new IntersectionObserver(
    (entries) => {
      isTableHeaderVisible.value = entries[0].isIntersecting
    },
    {
      rootMargin: `0px 0px -${windowHeight - productImageHeight}px 0px`,
      threshold: 0
    }
  )

  observer.observe(table as HTMLElement)
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

        <div class="flex flex-wrap gap-2">
          <ClientOnly>
            <Button
              :variant="activeCategory.id === category.id ? 'secondary' : 'outline'"
              v-for="category in categories"
              :key="category.id"
              class="rounded-full text-sm p-2 h-8 md:h-10 md:p-4 border"
              @click="setActiveCategory(category.id); setIsAllowedToScrollRight()"
            >
              {{ category.title }} 
              <div
                v-show="activeCategory.title === category.title"
                @click="(e) => {
                  e.stopPropagation();
                  removeCategory(category.id);
                }"
                class="w-5 h-5 rounded-full bg-background-dark flex items-center justify-center">
                <X class="w-4 h-4 text-background" />
              </div>
            </Button>
          </ClientOnly>
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container">
        <ClientOnly>
          <div
            ref="tableWrapper"
            class="relative">
            <Table
              ref="table"
              id="table"
              :transition="tableTransition"
              :class="setTableWidth(activeCategory, tableWrapperWidth)">
              <TableHeader>
                <TableRow class="!border-b-0">
                  <TableHead
                    v-for="product in activeCategory.products"
                    class="p-1"
                    :style="`min-width: ${setColumnWidth(tableWrapperWidth)}px; max-width: ${setColumnWidth(tableWrapperWidth)}px;`"
                    :key="product.id">
                    <BaseProductCard
                      :product="product"
                      is-compared
                      @removeFromCompare="removeFromCompare(product.id)" />
                  </TableHead>
                </TableRow>
                <TableRow class="h-8 !border-b-0" />
              </TableHeader>
              <TableBody id="table-body">
                <template
                  v-for="item in activeCategory.characteristics"
                  :key="item.id">
                  <TableRow>
                    <TableCell
                      class="relative xl:p-4"
                      colspan="10">
                      <p
                        :style="`left: ${-tableTransition}px;`"
                        class="absolute flex items-center ~text-[12px]/[16px] font-semibold text-gray-500 top-0 bottom-0 m-auto transition-all duration-700 p-2">
                        {{ item.title }}
                      </p>
                    </TableCell>
                  </TableRow>
                  <TableRow class="border-b-0">
                    <TableCell
                      class="p-2 xl:p-4 text-center"
                      v-for="product in activeCategory.products"
                      :key="product.id">
                      {{ product.characteristics.find(({id}) => id === item.id)?.value }}
                    </TableCell>
                  </TableRow>
                  <TableRow class="h-2 border-b-0" />
                </template>
              </TableBody>
            </Table>
            <div
              v-if="isAllowedToScrollRight"
              :style="`top: ${productImageHeight + 16}px;`"
              class="absolute -right-3 bg-background md:top-[220px] xl:top-[292px] text-lg cursor-pointer rounded-full border w-10 h-10 flex items-center justify-center leading-none"
              @click="sliderRight()">
              <Icon
                name="iconamoon:arrow-right-2-light"
                width="20"
                height="20"
                style="color: #575757" />
            </div>
            <div
              v-if="tableTransition < 0"
              @click="sliderLeft()"
              :style="`top: ${productImageHeight + 16}px;`"
              class="absolute -left-3 bg-background md:top-[220px] xl:top-[292px] text-lg cursor-pointer rounded-full border w-10 h-10 flex items-center justify-center leading-none">
              <Icon
                name="iconamoon:arrow-left-2-light"
                width="20"
                height="20"
                style="color: #575757" />
            </div>
          </div>
        </ClientOnly>
      </div>
    </section>

    <section
      :class="isTableHeaderVisible ? 'top-0' : '-top-[600px]'"
      class="fixed left-0 w-full bg-background z-10 transition-all duration-500"
    >
      <div class="container">
        <ClientOnly>
          <div
            class="relative">
            <Table
              :transition="tableTransition"
              :class="setTableWidth(activeCategory, tableWrapperWidth)">
              <TableHeader>
                <TableRow class="!border-b-0">
                  <TableHead
                    v-for="product in activeCategory.products"
                    class="p-1"
                    :style="`min-width: ${setColumnWidth(tableWrapperWidth)}px; max-width: ${setColumnWidth(tableWrapperWidth)}px;`"
                    :key="product.id">
                    <BaseProductCard
                      :product="product"
                      is-compared
                      @removeFromCompare="removeFromCompare(product.id)" />
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table>
            <div
              v-if="isAllowedToScrollRight"
              :style="`top: ${productImageHeight + 20}px;`"
              class="absolute -right-3 bg-background md:top-[220px] xl:top-[292px] text-lg cursor-pointer rounded-full border w-8 h-8 flex items-center justify-center leading-none z-20"
              @click="sliderRight()">
              <Icon
                name="iconamoon:arrow-right-2-light"
                width="18"
                height="18"
                style="color: #575757" />
            </div>
            <div
              v-if="tableTransition < 0"
              @click="sliderLeft()"
              :style="`top: ${productImageHeight + 20}px;`"
              class="absolute -left-3 bg-background md:top-[220px] xl:top-[292px] text-lg cursor-pointer rounded-full border w-8 h-8 flex items-center justify-center leading-none z-20">
              <Icon
                name="iconamoon:arrow-left-2-light"
                width="18"
                height="18"
                style="color: #575757" />
            </div>
          </div>
        </ClientOnly>
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