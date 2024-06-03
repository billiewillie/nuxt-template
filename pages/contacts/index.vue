<script setup>
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
</script>

<template>

  <section class="mb-16">
    <div class="container">
      <h2>Каталог</h2>
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-4">
        <Card
          v-for="i in 9"
          :key="i"
          class="flex flex-col gap-6 p-4 items-center text-center">
          <Icon
            name="uil:github"
            size="80"
            color="black" />
          <Separator></Separator>
          <CardContent class="p-0">
            <p>страница контактов</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

</template>
