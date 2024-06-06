<script
  setup
  lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/ui/calendar'
import NEWS from '~/data/news'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Календарь мероприятий</h1>
    </div>
  </section>

  <section class="mb-4">
    <div class="container grid grid-cols-1 xl:grid-cols-4 gap-y-4 xl:gap-y-0 xl:gap-x-4">
      <Calendar
        v-model="value"
        :weekday-format="'short'"
        class="rounded-md border col-span-3" />
      <div class="flex flex-col basis-full xl:basis-1/4 border rounded">
        <select>
          <option>
            тип события
          </option>
          <option>
            тип события
          </option>
        </select>
        <select>
          <option>
            тип события
          </option>
          <option>
            тип события
          </option>
        </select>
        <select>
          <option>
            тип события
          </option>
          <option>
            тип события
          </option>
        </select>
        <button>Применить</button>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-4">
        <NuxtLink
          v-for="article in NEWS"
          :key="article.id"
          :to="`/news/${article.slug}`">
          <Card class="flex flex-col gap-6 pb-6">
            <CardHeader class="p-0">
              <BaseImage
                :src="article.preview"
                alt="alt"
                aspect-ratio="aspect-[7/5]"
                placeholder="bg-[#e4e7ef]"
                width="350"
                height="250"
              />
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

</template>
