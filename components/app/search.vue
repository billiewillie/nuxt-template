<script
  setup
  lang="ts">
import { Input } from '@/components/ui/input'
import { VisuallyHidden } from 'radix-vue'
import { SEARCH_CATEGORIES, SEARCH_LENGTH } from '~/data/constants'
import type { SearchCategory } from '~/types'

const inputValue = ref<string>('')
const category = ref<SearchCategory>(SEARCH_CATEGORIES[0])
const subcategories = ref<Array<{ title: string, value: string }> | []>(category.value.subCategories ?? [])
const subcategory = ref<{ title: string, value: string } | null>(null)
const products = ref([])
const stock = ref([])
const manufacturers = ref([])
const news = ref([])
const expendable_material = ref([])

async function search(): Promise<void> {
  if (inputValue.value.length >= SEARCH_LENGTH) {
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

    news.value = response.news.slice(0, 10) ?? []
    stock.value = response.stock.slice(0, 10) ?? []
    products.value = response.products.slice(0, 10) ?? []
    manufacturers.value = response.manufacturers.slice(0, 10) ?? []
    expendable_material.value = response.expendable_material.slice(0, 10) ?? []

    console.log(response)
  } else {
    news.value = []
    stock.value = []
    products.value = []
    manufacturers.value = []
    expendable_material.value = []
  }
}

function setSearchCategory(item): void {
  category.value = item
  subcategories.value = item.subCategories ?? []
}
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="ghost"
        class="p-0 h-auto">
        Поиск
      </Button>
    </SheetTrigger>
    <SheetContent
      :side="'bottom'"
      class="h-full overflow-y-scroll">
      <SheetHeader>
        <VisuallyHidden>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </VisuallyHidden>
      </SheetHeader>
      <section class="mb-20">
        <div class="container">
          <div class="flex gap-4 mb-2">
            <div
              v-for="item in SEARCH_CATEGORIES"
              class="cursor-pointer text-lg"
              :class="{'active-link': category.value === item.value}"
              @click="setSearchCategory(item)"
              :key="item.value">
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="flex gap-4 mb-12 h-10">
            <template v-if="subcategories">
              <div
                v-for="item in subcategories"
                :key="item.value">
                <p>{{ item.title }}</p>
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
              class="pl-10 h-20" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                      <Icon
                        name="carbon:search"
                        width="24"
                        height="24"
                        color="#575757" />
                    </span>
          </div>
        </div>
      </section>
      <section>
        <div
          class="mb-20"
          v-if="products.length">
          <div class="container">
            <h3 class="title mb-4">Продукция</h3>
            <Separator class="my-4" />
            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
              <Card
                v-for="item in products"
                :key="item.id">
                <CardContent>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SheetContent>
  </Sheet>
</template>