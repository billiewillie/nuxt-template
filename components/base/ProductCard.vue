<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import type { ProductCard } from '~/types'

defineEmits<{
  (f: 'removeFromCompare', id: number): void
}>()

defineProps<{
  product: ProductCard
  isCompared?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="product.url"
    class="flex h-full">
    <Card
      class="flex flex-col gap-6 p-6 shadow-md hover:shadow-lg w-full transition-shadow"
      :class="{'gap-4 p-4' : isCompared}"
    >
      <CardHeader class="p-0">
        <NuxtPicture
          :src="product.preview_img"
          :alt="product.title"
          :img-attrs="{class:'w-full h-full object-scale-down object-center'}"
          class="aspect-square"
          width="253"
          height="253"
        />
      </CardHeader>
      <CardContent class="flex flex-col p-0 flex-auto">
        <Separator class="w-full mb-6" />
        <h3
          class="font-semibold ~text-[16px]/[18px] line-clamp-3"
          :class="{'~text-[12px]/[18px]' : isCompared}"
        >
          {{ product.title }}
        </h3>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0">
        <div class="flex gap-4 items-center">
          <Icon
            v-if="isCompared"
            name="iconoir:trash"
            class="cursor-pointer"
            width="18"
            height="18"
            @click="((e) => {
              e.preventDefault();
              $emit('removeFromCompare', product.id);
            })"
            color="#575757" />
          <Icon
            v-else
            name="mdi:compare-horizontal"
            class="cursor-pointer"
            width="18"
            height="18"
            @click="((e) => {
              e.preventDefault();
              console.log('compare')
            })"
            color="#575757" />
          <Icon
            name="cil:star"
            class="cursor-pointer"
            width="18"
            height="18"
            @click="((e) => {
              e.preventDefault();
              console.log('like')
            })"
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