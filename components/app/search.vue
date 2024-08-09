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

    news.value = response.news ?? []
    stock.value = response.stock ?? []
    products.value = response.products ?? []
    manufacturers.value = response.manufacturers ?? []
    expendable_material.value = response.expendable_material ?? []

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
      class="h-full">
      <SheetHeader>
        <VisuallyHidden>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </VisuallyHidden>
      </SheetHeader>
      <section class="mb-20">
        <div class="container">
          <div class="flex gap-4 mb-2">
            <div
              v-for="item in SEARCH_CATEGORIES"
              class="cursor-pointer"
              :class="{'underline': category.value === item.value}"
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
      <section class="mb-20" v-if="products.length">
        <div class="container">
          <h3 class="title mb-4">Продукция</h3>
          <Separator class="my-4" />
          <div
            v-for="item in products"
            :key="item.id">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
      <section class="mb-20" v-if="stock.length">
        <div class="container">
          <h3 class="title mb-4">На складе</h3>
          <Separator class="my-4" />
          <div
            v-for="product in products"
            :key="product.id">
            <p>{{ product.title }}</p>
          </div>
        </div>
      </section>
      <section class="mb-20" v-if="expendable_material.length">
        <div class="container">
          <h3 class="title mb-4">Расходные материалы</h3>
          <Separator class="my-4" />
          <div
            v-for="material in expendable_material"
            :key="material.id">
            <p>{{ material.title }}</p>
          </div>
        </div>
      </section>
      <section class="mb-20" v-if="news.length">
        <div class="container">
          <h3 class="title mb-4">Новости</h3>
          <Separator class="my-4" />
          <div
            v-for="article in news"
            :key="article.id">
            <p>{{ article.title }}</p>
          </div>
        </div>
      </section>
      <section class="mb-20" v-if="manufacturers.length">
        <div class="container">
          <h3 class="title mb-4">Производители</h3>
          <Separator class="my-4" />
          <div
            v-for="manufacturer in manufacturers"
            :key="manufacturer.id">
            <p>{{ manufacturer.title }}</p>
          </div>
        </div>
      </section>
    </SheetContent>
  </Sheet>
</template>