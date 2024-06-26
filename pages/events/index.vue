<script
  setup
  lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import NEWS from '~/data/news'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
const date = ref(new Date())

</script>

<template>

  <Head>
    <Title>Календарь | Группа компаний ООО «БиоЛайн»</Title>
    <Meta
      name="description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="og:image"
      content="/img/og-logo.jpg" />
    <Meta
      name="twitter:image"
      content="/img/og-logo.jpg" />
    <Meta
      name="og:title"
      content="Календарь | Группа компаний ООО «БиоЛайн»" />
    <Meta
      name="og:description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="og:site_name"
      content="bioline.vercel.app" />
    <Meta
      name="og:url"
      content="https://bioline.vercel.app/contacts" />
    <Meta
      name="og:image:width"
      content="1200" />
    <Meta
      name="og:image:height"
      content="630" />
    <Meta
      name="og:type"
      content="article" />
    <Meta
      name="og:locale"
      content="ru_RU" />
    <Meta
      name="twitter:title"
      content="Календарь | Группа компаний ООО «БиоЛайн»" />
    <Meta
      name="twitter:description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="twitter:site"
      content="bioline.vercel.app" />
    <Meta
      name="twitter:card"
      content="summary_large_image" />
  </Head>

  <section class="mb-16 pt-14">
    <div class="container">
      <h1 class="section-title">Календарь мероприятий</h1>
    </div>
  </section>

  <section class="mb-4">
    <div class="container grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-y-0 xl:gap-x-4">

      <AppCalendar class="col-span-2 bg-background relative z-10" />

      <div class="flex flex-col border rounded justify-between p-4">
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
