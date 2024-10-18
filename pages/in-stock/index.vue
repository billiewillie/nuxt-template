<script
  setup
  lang="ts">
import type { InStockCategory } from '~/types'
import URLs from '~/data/urls'
import type { Ref } from 'vue'
import { useId, useRuntimeConfig } from '#app'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { toast } from '~/components/ui/toast'
import { FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'

const activeCategory = ref<InStockCategory | null>(null)

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const { data }: { data: Ref<InStockCategory[]> } = await useFetch(`${API_ENDPOINT}${URLs.inStock}`)

activeCategory.value = data.value[0]

const nameId = useId()
const contactId = useId()
const messageId = useId()
const checkId = useId()

const formSchema = toTypedSchema(z.object({
  name: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  contact: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 7 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  message: z
    .string()
    .min(10, { message: 'Минимальная длина сообщения 10 символов' })
    .max(160, { message: 'Максимальная длина сообщения 160 символов' })
    .optional(),
  checkbox: z.boolean({ message: 'Подтвердите согласие' })
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
    stock_id: 1,
    contact: values.contact,
    name: values.name,
    message: values.message,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  console.log(data)
  const responseData = await $fetch(
    `${API_ENDPOINT}${URLs.inStockPageForm}`,
    {
      method: 'POST',
      body: data
    }
  )
  if (responseData === '200') {
    form.resetForm()
    toast({
      title: 'Заявка отправлена!'
    })
  } else {
    toast({
      title: 'Произошла ошибка!',
      variant: 'destructive'
    })
  }
})
</script>

<template>

  <main>

    <Head>
      <Title>На складе | Группа компаний ООО «БиоЛайн»</Title>
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
        content="На складе | Группа компаний ООО «БиоЛайн»" />
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
        content="На складе | Группа компаний ООО «БиоЛайн»" />
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

    <section class="mb-12 xl:mb-16 pt-14">
      <div class="container">
        <Breadcrumb class="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>На складе</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
          <h1 class="section-title">На складе</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <Button
              v-for="category in data"
              :key="category.id"
              :variant="category.id === activeCategory?.id ? 'default' : 'outline'"
              @click="activeCategory = category">
              {{ category.title }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="container">
        <div class="flex flex-col gap-4">
          <Card
            v-for="product in activeCategory.list"
            :key="product.id"
            class="flex flex-col gap-6 p-4 lg:p-8 items-center text-center">
            <CardContent class="flex flex-col xl:flex-row w-full p-0 gap-8">
              <div class="flex basis-full xl:basis-1/3 justify-center">
                <BaseImage
                  class="w-full xl:w-[390]"
                  :src="product.preview_img"
                  :alt="product.title"
                  aspect-ratio="aspect-square"
                  placeholder="bg-white"
                  width="390"
                  height="390"
                />
              </div>

              <div class="basis-2/3 flex flex-col items-start gap-6">
                <h2 class="font-bold text-2xl">{{ product.title }}</h2>
                <Separator />
                <div
                  v-html="product.content"
                  class="text-left"></div>
              </div>
            </CardContent>
            <CardFooter class="flex flex-col md:flex-row gap-4 justify-between w-full p-0">
              <div class="flex basis-1/3">
                <Icon
                  name="iconoir:star"
                  width="24"
                  height="24"
                  color="#575757" />
              </div>
              <div class="flex basis-1/3 justify-center">
                <Button variant="outline">
                  Отправить запрос
                </Button>
              </div>
              <div class="flex basis-1/3 justify-end">
                <span>Перейти на страницу</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <form
          @submit="onSubmit"
          class="flex flex-col gap-4">
          <div class="grid gap-16">
            <FormField
              v-slot="{ componentField }"
              name="name">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    name="name"
                    :id="nameId"
                    placeholder="ФИО"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="contact">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    name="contact"
                    :id="contactId"
                    placeholder="Телефон или почта"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="message">
              <FormItem>
                <FormControl>
            <Textarea
              name="message"
              :id="messageId"
              placeholder="Сообщение"
              v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-4">
            <Button
              type="submit"
              aria-label="submit"
              class="uppercase">
              отправить
            </Button>
            <FormField
              v-slot="{ value, handleChange }"
              type="checkbox"
              name="checkbox">
              <FormItem class="flex items-start lg:col-span-2 gap-x-2 space-y-0 rounded-md">
                <FormControl :id="checkId">
                  <Checkbox
                    :checked="value"
                    @update:checked="handleChange" />
                </FormControl>
                <div class="space-y-1 leading-none">
                  <FormLabel :forId="checkId">
                    Я согласен(на) на обработку персональных данных.
                    ООО "БиоЛайн" гарантирует конфиденциальность получаемой информации.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            </FormField>
          </div>
        </form>
      </div>
    </section>

  </main>

</template>