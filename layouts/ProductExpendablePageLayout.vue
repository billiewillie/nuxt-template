<script
  setup
  lang="ts">
import type { ProductPageApi } from '~/types'

const props = defineProps<{
  data: ProductPageApi
}>()
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ props.data.title }}</h1>
    </div>
  </section>
</template>