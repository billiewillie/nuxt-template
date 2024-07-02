<script setup>
import ProductCategoryPageLayout from '~/layouts/ProductCategoryPageLayout.vue'
import { useRuntimeConfig } from '#app'
import URLs from '~/data/urls'

const route = useRoute()
const { API_ENDPOINT } = useRuntimeConfig().public

console.log(route.params)

</script>

<template>

  <div>hello</div>

<!--  <ProductCategoryPageLayout title="Диагностика онкологических заболеваний" />-->

</template>