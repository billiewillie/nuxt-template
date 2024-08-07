<script
  setup
  lang="ts">
import { Input } from '@/components/ui/input'
import { VisuallyHidden } from 'radix-vue'
import { SEARCH_CATEGORIES } from '~/data/constants'

const inputValue = ref('')
const result = ref([])

function search() {
  $fetch('https://search.telvla.ru/search/show', {
    method: 'POST',
    body: {
      search: 'для',
      category: 'all',
      subcategory: ''
    },
    onResponse({ request, response }) {
      result.value = response._data
      console.log(result.value)
    },

  })
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
          <ul class="flex gap-4 mb-2">
            <li
              v-for="item in SEARCH_CATEGORIES"
              :key="item.value">
              <p>{{ item.title }}</p>
            </li>
          </ul>
          <ul class="flex gap-4 mb-12">
            <li
              v-for="item in SEARCH_CATEGORIES"
              :key="item.value">
              <p>{{ item.title }}</p>
            </li>
          </ul>
          <div class="relative w-full items-center">
            <Input
              id="search"
              type="text"
              placeholder="Поиск..."
              autocomplete="off"
              autocorrect="off"
              v-model="inputValue"
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
          <div
            class="item fruit"
            v-for="fruit in search()"
            :key="fruit">
            <p>{{ fruit }}</p>
          </div>
          <div
            class="item error"
            v-if="inputValue && !search().length">
            <p>No results found!</p>
          </div>
        </div>
      </section>
    </SheetContent>
  </Sheet>
</template>