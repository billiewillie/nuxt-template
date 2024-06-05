<script setup>
import NEWS from '~/data/news'
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Вакансии</h1>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-4">
        <NuxtLink
          v-for="article in NEWS"
          :key="article.id"
          :to="`/news/${article.slug}`">
          <Card class="flex flex-col gap-6 pb-6">
            <CardHeader class="p-0">
              <!--              <BaseImage-->
              <!--                :src="article.preview"-->
              <!--                alt="alt"-->
              <!--                aspect-ratio="aspect-[7/5]"-->
              <!--                placeholder="bg-[#e4e7ef]"-->
              <!--                width="350"-->
              <!--                height="250"-->
              <!--              />-->
            </CardHeader>
            <CardContent class="flex flex-col gap-4 p-0 px-6">
              <CardTitle>{{ article.title }}</CardTitle>
              <CardDescription>{{ article.title }}</CardDescription>
            </CardContent>
            <CardFooter class="flex items-center justify-between p-0 px-6">
              <div class="flex gap-4 items-center">
                <Icon
                  name="solar:calendar-linear"
                  width="18"
                  height="18"
                  color="#575757" />
                <time
                  class="text-[#575757]"
                  :datetime="article.date">
                  {{ article.date }}
                </time>
              </div>
              <Icon
                name="iconamoon:arrow-right-2-light"
                width="18"
                height="18"
                style="color: #575757" />
            </CardFooter>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!--  <section class="mb-20">-->
  <!--    <div class="container">-->
  <!--      <h2 class="section-title mb-20">Наша компания постоянно развивается и сотрудники развиваются вместе с ней</h2>-->
  <!--      <p>text</p>-->
  <!--    </div>-->
  <!--  </section>-->

</template>