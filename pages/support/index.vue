<script setup>
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Технический сервис</h1>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
        <Card
          v-for="(_,index) in 5"
          :key="index"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <NuxtImg
            src="/img/categories/icons/1.svg"
            class="w-[80px] object-contain object-center"
            alt="alt" />
          <CardContent class="p-0 font-medium">
            <p>
              Четкое планирование и прогнозирование профессиональной подготовки персонала и обеспечение современной
              системы корпоративного обучения
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>