<script
  setup
  lang="ts">
import type { ProductPageApi } from '~/types'

const props = defineProps<{
  data: ProductPageApi
}>()
</script>

<template>
  <main class="flex-auto">

    <section class="mb-16 pt-14">
      <div class="container">
        <h1 class="section-title">
          {{ props.data.title }}
        </h1>
      </div>
    </section>

  </main>
</template>