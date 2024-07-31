<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import type { ProductCard } from '~/types'

defineProps<{
  product: ProductCard
}>()
</script>

<template>
  <NuxtLink
    to="/"
    class="flex h-full">
    <Card class="flex flex-col gap-6 p-6 shadow-md hover:shadow-lg w-full">
      <CardHeader class="p-0">
        <NuxtPicture
          :src="product.preview_img"
          :alt="product.title"
          :img-attrs="{class:'w-full h-full object-scale-down object-center'}"
          class="aspect-square"
          width="350"
          height="250"
        />
      </CardHeader>
      <CardContent class="flex flex-col p-0 flex-auto">
        <Separator class="w-full mb-6" />
        <h3 class="font-semibold text-xl">{{ product.title }}</h3>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0">
        <div class="flex gap-4 items-center">
          <Icon
            name="mdi:compare-horizontal"
            width="18"
            height="18"
            color="#575757" />
          <Icon
            name="cil:star"
            width="18"
            height="18"
            color="#575757" />
        </div>
        <Icon
          name="iconamoon:arrow-right-2-light"
          width="18"
          height="18"
          style="color: #575757" />
      </CardFooter>
    </Card>
  </NuxtLink>
</template>