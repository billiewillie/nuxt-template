<script
  setup
  lang="ts">
import { Separator } from '~/components/ui/separator'
import type { ProductCard } from '~/types'
import { Badge } from '~/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip'

const compareList = useCookie(
  'compareList',
  {
    default: () => [],
    watch: true
  }
)

const wishList = useCookie(
  'wishList',
  {
    default: () => [],
    watch: true
  }
)

function setCompareList(id: number) {
  if (compareList.value.includes(id)) {
    compareList.value = compareList.value.filter((item: number) => item !== id)
  } else {
    compareList.value = [...compareList.value, id]
  }
}

function setWishList(id: number) {
  if (wishList.value.includes(id)) {
    wishList.value = wishList.value.filter((item: number) => item !== id)
  } else {
    wishList.value = [...wishList.value, id]
  }
}

defineProps<{
  product: ProductCard;
  isCompared?: boolean;
}>()
</script>

<template>
  <NuxtLink
    :to="product.url"
    class="flex h-full">
    <Card
      class="flex flex-col gap-6 p-6 shadow-md hover:shadow-lg w-full transition-shadow"
      :class="{ 'gap-4 p-4': isCompared }">
      <CardHeader class="p-0 relative">
        <Badge class="absolute uppercase -left-4 -top-4 rounded-tl rounded-tr-none rounded-br rounded-bl-none">
          New
        </Badge>
        <NuxtPicture
          :src="product.preview_img"
          :alt="product.title"
          :img-attrs="{
            class: 'w-full h-full object-scale-down object-center',
          }"
          class="aspect-square"
          width="253"
          height="253"
        />
      </CardHeader>
      <CardContent class="flex flex-col p-0 flex-auto">
        <Separator class="w-full mb-6" />
        <h3
          class="font-semibold ~text-[16px]/[18px] line-clamp-3"
          :class="{ '~text-[12px]/[18px]': isCompared }">
          {{ product.title }}
        </h3>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0">
        <div class="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  @click="(e) => {
                    e.preventDefault();
                    setCompareList(product.id);
                  }"
                  class="relative z-10 grid place-content-center w-7 h-7 transition-opacity group opacity-60 hover:opacity-100">
                  <Icon
                    name="mynaui:chart-bar-one-solid"
                    width="24"
                    height="24"
                    :color="compareList.includes(product.id) ? '#298687' : 'black'" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p v-if="compareList.includes(product.id)">Убрать из сравнения</p>
                <p v-else>Добавить в сравнение</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  @click="(e) => {
                    e.preventDefault();
                    setWishList(product.id);
                  }"
                  class="relative z-10 grid place-content-center w-7 h-7 transition-opacity group opacity-60 hover:opacity-100">
                  <Icon
                    name="lets-icons:star"
                    width="24"
                    height="24"
                    :class="wishList.includes(product.id) ? '*:stroke-[#298687]' : '*:stroke-black'"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p v-if="compareList.includes(product.id)">Убрать из избранного</p>
                <p v-else>Добавить в избранное</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                class="relative z-10 grid place-content-center w-7 h-7 transition-opacity group opacity-60 hover:opacity-100">
                <Icon
                  name="iconamoon:arrow-right-2-light"
                  width="28"
                  height="28"
                  color="black" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Перейти</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
