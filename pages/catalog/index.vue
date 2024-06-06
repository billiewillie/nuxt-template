<script setup>
import { Card, CardContent } from '~/components/ui/card'
import CATEGORIES from '~/data/categories'
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Каталог</h1>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="item in CATEGORIES"
          :key="item.id"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <NuxtImg
            :src="item.icon"
            class="w-[80px] object-contain object-center"
            :alt="item.title" />
          <CardContent class="p-0 font-medium">
            <p class="text-2xl">Диагностика онкологических заболеваний</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>
