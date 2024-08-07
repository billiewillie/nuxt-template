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
const result = ref({
  expendable_material: {
    title: 'Расходные материалы',
    list: []
  },
  manufacturers: {
    title: 'Производители',
    list: []
  },
  news: {
    title: 'Новости',
    list: []
  },
  products: {
    title: 'Продукция',
    list: []
  },
  stock: {
    title: 'На складе',
    list: []
  }
})

async function search(): Promise<void> {
  if (inputValue.value.length >= SEARCH_LENGTH) {
    result.value = await $fetch(
      'https://search.telvla.ru/search/show',
      {
        method: 'POST',
        body: {
          search: inputValue.value.trim(),
          category: category.value.value,
          subcategory: subcategory.value ?? ''
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })

    console.log(result.value)
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
      <section class="mb-12">
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
      <section>
        <div class="container">
          <h3 class="title mb-4">Продукция</h3>
          <Separator class="my-4" />
        </div>
      </section>
    </SheetContent>
  </Sheet>
</template>