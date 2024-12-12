<script
  setup
  lang="ts">
import type { Ref } from 'vue'
import { useRuntimeConfig } from '#app'
import type { ProductCategoryPageApi, ProductPageApi } from '~/types'
import ProductPageLayout from '~/layouts/ProductPageLayout.vue'
import ProductCategoryPageLayout from '~/layouts/ProductCategoryPageLayout.vue'
import ProductExpendablePageLayout from '~/layouts/ProductExpendablePageLayout.vue'

const route = useRoute()
const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const {
  data
}: {
  data: Ref<ProductCategoryPageApi | ProductPageApi>
} = await useFetch(`${API_ENDPOINT}${route.fullPath}`)

const page = {
  catalog: ProductCategoryPageLayout,
  expendable_material: ProductExpendablePageLayout,
  products: ProductPageLayout
}
</script>

<template>
  <component
    :is="page[data.is_page]"
    :data="data" />
</template>