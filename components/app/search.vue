<script
  setup
  lang="ts">
import { Input } from '@/components/ui/input'
import { VisuallyHidden } from 'radix-vue'
import { SEARCH_CATEGORIES, SEARCH_LENGTH, SEARCH_RESULT_LENGTH } from '~/data/constants'
import type { SearchCategory } from '~/types'
import { setResultOutput } from '~/utils/setResultOutput'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const props = withDefaults(defineProps<{
  side?: string
  trigger?: string
}>(), {
  side: 'bottom',
  trigger: 'icon'
})

const inputValue = ref<string>('')
const category = ref<SearchCategory>(SEARCH_CATEGORIES[0])
const subcategories = ref<Array<{ title: string, value: string }> | []>(category.value.subCategories ?? [])
const subcategory = ref<{ title: string, value: string } | null>(null)
const products = ref<any>([])
const productsOutput = ref<any>([])
const stock = ref<any>([])
const stockOutput = ref<any>([])
const manufacturers = ref<any>([])
const manufacturersOutput = ref<any>([])
const news = ref<any>([])
const newsOutput = ref<any>([])
const expendableMaterial = ref<any>([])
const expendableMaterialOutput = ref<any>([])

const [isOpen, closeDialog] = dialogState()

async function search(): Promise<void> {
  if (inputValue.value.length >= SEARCH_LENGTH) {
    try {
      const response = await $fetch(
        'https://search.telvla.ru/search/show',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            search: inputValue.value.trim(),
            category: category.value.value,
            subcategory: subcategory.value ?? ''
          }
        })


      news.value = response.news ?? []
      newsOutput.value = setResultOutput(news.value, SEARCH_RESULT_LENGTH) ?? []

      stock.value = response.stock ?? []
      stockOutput.value = setResultOutput(stock.value, SEARCH_RESULT_LENGTH) ?? []

      products.value = response.products ?? []
      productsOutput.value = setResultOutput(products.value, SEARCH_RESULT_LENGTH) ?? []

      manufacturers.value = response.manufacturers ?? []
      manufacturersOutput.value = setResultOutput(manufacturers.value, SEARCH_RESULT_LENGTH) ?? []

      expendableMaterial.value = response.expendable_material ?? []
      expendableMaterialOutput.value = setResultOutput(expendableMaterial.value, SEARCH_RESULT_LENGTH) ?? []

      console.log(response)

    } catch (error) {
      news.value = []
      newsOutput.value = []

      stock.value = []
      stockOutput.value = []

      products.value = []
      productsOutput.value = []

      manufacturers.value = []
      manufacturersOutput.value = []

      expendableMaterial.value = []
      expendableMaterialOutput.value = []
    }

  } else {
    news.value = []
    newsOutput.value = []

    stock.value = []
    stockOutput.value = []

    products.value = []
    productsOutput.value = []

    manufacturers.value = []
    manufacturersOutput.value = []

    expendableMaterial.value = []
    expendableMaterialOutput.value = []
  }
}

function setSearchCategory(item): void {
  subcategory.value = null
  category.value = item
  subcategories.value = item.subCategories ?? []
}

function setSearchSubCategory(item): void {
  subcategory.value = item
}

</script>

<template>
  <Sheet v-model:open="isOpen">
    <SheetTrigger as-child>
      <div class="flex items-center gap-2 cursor-pointer group">
        <Icon
          name="mingcute:search-line"
          width="32"
          height="32"
          class="xl:w-[18px] xl:h-[18px]"
          color="#3BA3A3" />
        <p
          v-if="props.trigger === 'search'"
          class='group-hover:underline underline-offset-4'>Поиск</p>
      </div>
    </SheetTrigger>
    <SheetContent
      :side="props.side === 'left' ? 'left' : 'bottom'"
      class="h-full w-full overflow-y-scroll px-0">
      <SheetHeader>
        <VisuallyHidden>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </VisuallyHidden>
      </SheetHeader>
      <section class="mb-12 md:mb-16 xl:mb-20">
        <div class="container">
          <div class="flex gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6">
            <div
              v-for="item in SEARCH_CATEGORIES"
              class="cursor-pointer text-sm md:text-base lg:text-lg"
              :class="{'active-link': category.value === item.value}"
              @click="setSearchCategory(item)"
              :key="item.value">
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="flex gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10 h-10">
            <template v-if="subcategories">
              <div
                v-for="item in subcategories"
                :key="item.value">
                <Button
                  :variant="subcategory?.value === item.value ? 'secondary' : 'outline'"
                  @click="setSearchSubCategory(item)"
                  class="rounded-full text-sm p-2 h-8 md:h-10 md:p-4 border">
                  {{ item.title }}
                </Button>
              </div>
            </template>
          </div>
          <div class="relative w-full items-center">
            <Input
              id="search"
              type="text"
              placeholder="Поиск..."
              autocomplete="off"
              v-model="inputValue"
              @input="search()"
              class="pl-12 md:pl-16 xl:pl-20 h-10 md:h-16 xl:h-20 text-md md:text-xl xl:text-4xl" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-4">
            <Icon
              name="carbon:search"
              width="24"
              height="24"
              class="w-6 md:w-8 xl:w-12 h-6 md:h-8 xl:h-12"
              color="#575757" />
            </span>
          </div>
        </div>
      </section>
      <section
        class="mb-12 md:mb-16 xl:mb-20"
        v-if="products.length">
        <div class="container">
          <h3 class="title text-2xl font-semibold">Продукция</h3>
          <Separator class="mt-4 mb-6" />
          <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <BaseProductCard
              v-for="item in productsOutput"
              :key="item.id"
              :product="item" />
          </div>
          <Button @click="productsOutput = setResultOutput(products, productsOutput.length + SEARCH_RESULT_LENGTH)">
            Загрузить еще
          </Button>
        </div>
      </section>
      <section
        class="mb-12 md:mb-16 xl:mb-20"
        v-if="stock.length">
        <div class="container">
          <h3 class="title text-2xl font-semibold">На складе</h3>
          <Separator class="mt-4 mb-6" />
          <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <BaseProductCard
              v-for="item in stockOutput"
              :key="item.id"
              :product="item" />
          </div>
          <Button @click="productsOutput = setResultOutput(products, productsOutput.length + SEARCH_RESULT_LENGTH)">
            Загрузить еще
          </Button>
        </div>
      </section>
      <section
        class="mb-12 md:mb-16 xl:mb-20"
        v-if="expendableMaterial.length">
        <div class="container">
          <h3 class="title text-2xl font-semibold">Расходные материалы</h3>
          <Separator class="mt-4 mb-6" />
          <Table class="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead>Артикул / №</TableHead>
                <TableHead>Название</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="item in expendableMaterialOutput"
                :key="item.id">
                <TableCell>DS153769</TableCell>
                <TableCell>{{ item.title }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button @click="expendableMaterialOutput = setResultOutput(expendableMaterial, expendableMaterialOutput.length + SEARCH_RESULT_LENGTH)">
            Загрузить еще
          </Button>
        </div>
      </section>
    </SheetContent>
  </Sheet>
</template>