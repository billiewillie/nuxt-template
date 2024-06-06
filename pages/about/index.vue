<script setup>
import CATEGORIES from '~/data/categories'
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">О компании</h1>
    </div>
  </section>

  <section class="mb-40">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="(item, index) in 6"
          :key="index"
          class="flex flex-col gap-6 p-4 items-center text-center">

          <CardHeader class="flex flex-row gap-8 items-center">
            <NuxtImg
              src="/img/categories/icons/1.svg"
              class="w-[50px] object-contain object-center"
              alt="alt" />
            <CardTitle>Удобство работы с нами</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent class="p-0 font-medium">
            <p class="text-xl">
              Мы признательны всем, кто ежедневно делает свой вклад в сохранение здоровья людей,
              мы восхищаемся вашим трудолюбием
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>
