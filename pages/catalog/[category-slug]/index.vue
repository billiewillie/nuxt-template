<script
  setup
  lang="ts">
import ProductCategoryPageLayout from '~/layouts/ProductCategoryPageLayout.vue'
import type { ProductCategoryPageApi } from '~/types'
import type { Ref } from 'vue'
import { useRuntimeConfig } from '#app'
import URLs from '~/data/urls'

const route = useRoute()

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const { data: category }: {
  data: Ref<ProductCategoryPageApi>
} = await useFetch(`${API_ENDPOINT}${URLs.catalog}/${route.params.categoryslug}`)

console.log(category.value)
</script>

<template>

  <ProductCategoryPageLayout :data="category" />

</template>