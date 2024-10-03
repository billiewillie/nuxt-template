<script setup lang="ts">
import { Separator } from '~/components/ui/separator';
import type { ProductCard } from '~/types';

const compareList = useCookie('compareList');
const wishList = useCookie('wishList');

function addToCompareList(id: number) {
  const currentList = compareList.value ? compareList.value : [];
  if (currentList?.includes(id)) {
    return;
  }
  compareList.value = JSON.stringify([...currentList, id]);
}

function removeFromCompareList(id: number) {
  const currentList = compareList.value ? compareList.value : [];
  compareList.value = JSON.stringify(
    currentList.filter((item: number) => item !== id)
  );
}

function addToWishList(id: number) {
  const currentList = wishList.value ? wishList.value : [];
  if (currentList?.includes(id)) {
    return;
  }
  wishList.value = JSON.stringify([...currentList, id]);
}

function removeFromWishList(id: number) {
  const currentList = wishList.value ? wishList.value : [];
  wishList.value = JSON.stringify(
    currentList.filter((item: number) => item !== id)
  );
}

defineEmits<{
  (f: 'removeFromCompare', id: number): void;
}>();

defineProps<{
  product: ProductCard;
  isCompared?: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="product.url"
    class="flex h-full"
  >
    <Card
      class="flex flex-col gap-6 p-6 shadow-md hover:shadow-lg w-full transition-shadow"
      :class="{ 'gap-4 p-4': isCompared }"
    >
      <CardHeader class="p-0">
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
          :class="{ '~text-[12px]/[18px]': isCompared }"
        >
          {{ product.title }}
        </h3>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0">
        <div class="flex gap-4 items-center">
          <div>
            <Icon
              v-if="isCompared"
              name="iconoir:trash"
              class="cursor-pointer"
              width="18"
              height="18"
              color="#575757"
              @click="((e: Event) => {
                e.preventDefault();
                removeFromCompareList(product.id);
                $emit('removeFromCompare', product.id);
              })"
            />
            <Icon
              v-else
              name="mdi:compare-horizontal"
              class="cursor-pointer"
              width="18"
              height="18"
              @click="((e: Event) => {
                e.preventDefault();
                addToCompareList(product.id)
              })"
              color="#575757"
            />
          </div>
          <Icon
            name="cil:star"
            class="cursor-pointer"
            width="19"
            height="19"
            @click="((e: Event) => {
              e.preventDefault();
              
            })"
            color="#575757"
          />
        </div>
        <Icon
          name="iconamoon:arrow-right-2-light"
          width="18"
          height="18"
          style="color: #575757"
        />
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
