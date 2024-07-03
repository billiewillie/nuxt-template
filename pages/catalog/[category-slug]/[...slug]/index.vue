<script
  setup
  lang="ts">
import ProductCategoryPageLayout from '~/layouts/ProductCategoryPageLayout.vue'
import { useRuntimeConfig } from '#app'
import type { ProductCategoryPageApi, ProductPageApi } from '~/types'
import type { Ref } from 'vue'
import { CATALOG_INNER_PAGE_TYPE } from '~/data/constants'
import ProductExpendablePageLayout from '~/layouts/ProductExpendablePageLayout.vue'
import ProductPageLayout from '~/layouts/ProductPageLayout.vue'

const route = useRoute()
const { API_ENDPOINT } = useRuntimeConfig().public

const { data }: {
  data: Ref<ProductCategoryPageApi | ProductPageApi>
} = await useFetch(`${API_ENDPOINT}${route.fullPath}`)

const page = {
  catalog: ProductCategoryPageLayout,
  expendable_material: ProductExpendablePageLayout,
  products: ProductPageLayout
}

console.log(page['catalog'])
</script>

<template>

  <component
    :is="page[data.is_page]"
    :data="data" />

</template>