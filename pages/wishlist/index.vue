<script
  setup
  lang="ts">
import type { ProductCard } from '~/types'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import URLs from '~/data/urls'
import { toast } from '~/components/ui/toast'
import { useId, useRuntimeConfig } from '#app'
import { FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const wishList = useCookie('wishList')
const wishListExpandableMaterials = useCookie('wishListExpendableMaterials')

const wishListData = ref<ProductCard[] | null>(null)
const wishListExpandableMaterialsData = ref<ProductCard[] | null>(null)

const nameId = useId()
const emailId = useId()
const contactId = useId()

async function getWishList() {
  const wishlistValue = wishList.value ? wishList.value : []
  const wishlistExpandableMaterialsValue = wishListExpandableMaterials.value
    ? wishListExpandableMaterials.value
    : []

  const { data } = await useFetch(
    'https://telvla.ru/wishlist/list',
    {
      method: 'POST',
      body: {
        products: wishlistValue,
        expendableMaterials: wishlistExpandableMaterialsValue
      }
    }
  )

  wishListData.value = data.value.products
  wishListExpandableMaterialsData.value = data.value.expendable_material
}

getWishList()

const formSchema = toTypedSchema(z.object({
  name: z
    .string()
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  contact: z
    .string({ message: 'Обязательное поле' })
    .min(7, { message: 'Минимальная длина 7 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' })
}))

const formSchemaEmail = toTypedSchema(z.object({
  email: z
    .string({ message: 'Обязательное поле' })
    .email({ message: 'Некорректная почта' })
}))

const form = useForm({
  validationSchema: formSchema
})
const formEmail = useForm({
  validationSchema: formSchemaEmail
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
    name: values.name,
    contact: values.contact,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  console.log(data)
  const responseData = await $fetch(
    `${API_ENDPOINT}${URLs.wishlistPageForm}`,
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

const onSubmitEmail = formEmail.handleSubmit(async (values) => {
  const data = {
    email: values.email,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  console.log(data)
  const responseData = await $fetch(
    `${API_ENDPOINT}${URLs.wishlistPageForm}`,
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
      <Title>Избранное | Группа компаний ООО «БиоЛайн»</Title>
      <Meta
        name="description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="twitter:image"
        content="/img/og-logo.jpg"
      />
      <Meta
        name="og:title"
        content="Избранное | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="og:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="og:site_name"
        content="bioline.vercel.app"
      />
      <Meta
        name="og:url"
        content="https://bioline.vercel.app/wishlist"
      />
      <Meta
        name="og:image:width"
        content="1200"
      />
      <Meta
        name="og:image:height"
        content="630"
      />
      <Meta
        name="og:type"
        content="article"
      />
      <Meta
        name="og:locale"
        content="ru_RU"
      />
      <Meta
        name="twitter:title"
        content="Избранное | Группа компаний ООО «БиоЛайн»"
      />
      <Meta
        name="twitter:description"
        content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля."
      />
      <Meta
        name="twitter:site"
        content="bioline.vercel.app"
      />
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>

    <section class="mb-12 xl:mb-16 pt-8">
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
              <BreadcrumbPage>Избранное</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">Избранное</h1>
      </div>
    </section>

    <ClientOnly>
      <section class="mb-12 xl:mb-16">
        <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <BaseProductCard
            v-for="product in wishListData"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </ClientOnly>

    <ClientOnly v-if="wishListExpandableMaterialsData && wishListExpandableMaterialsData.length">
      <section class="mb-12 xl:mb-16">
        <div class="container">
          <Table class="mb-6 w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Артикул / №</TableHead>
                <TableHead>Название</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="product in wishListExpandableMaterialsData"
                :key="product.id"
              >
                <TableCell>{{ product.articule }}</TableCell>
                <TableCell>{{ product.title }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </ClientOnly>

    <section class="mb-12 xl:mb-16">
      <div class="container flex flex-col justify-between md:flex-row gap-4">
        <div class="md:w-1/2 text-white p-4 bg-transparent border-none shadow-none">
          <h3 class="font-bold ~text-[22px]/[28px] text-black leading-[1.2] mb-4">
            Не нашли что искали?<br>Наш специалист свяжется с Вами:
          </h3>
          <form
            @submit="onSubmit"
            class="flex flex-col gap-4 mb-4 w-80">
            <FormField
              v-slot="{ componentField }"
              name="name">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    class="text-black"
                    :id="nameId"
                    placeholder="ФИО"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="flex">
              <FormField
                v-slot="{ componentField }"
                name="contact">
                <FormItem class="flex-auto">
                  <FormControl>
                    <Input
                      type="text"
                      :id="contactId"
                      class="rounded-r-none text-black"
                      placeholder="Телефон"
                      v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <Button
                type="submit"
                aria-label="submit"
                class="uppercase rounded-l-none">
                <Icon
                  name="weui:arrow-filled"
                  width="12"
                  height="24" />
              </Button>
            </div>
          </form>
          <p class="~text-[12px]/[14px] text-black">
            Я согласен(на) на обработку персональных данных. ООО "БиоЛайн" гарантирует конфиденциальность получаемой
            информации.
          </p>
        </div>
        <div class="md:w-1/2 text-white p-4 bg-transparent border-none shadow-none">
          <h3 class="font-bold ~text-[22px]/[28px] text-black leading-[1.2] mb-4">
            Отправьте список из избранного себе на почту!
          </h3>
          <form
            @submit="onSubmitEmail"
            class="flex mb-4 w-80">
            <FormField
              v-slot="{ componentField }"
              name="email">
              <FormItem class="w-full">
                <FormControl>
                  <Input
                    type="text"
                    :id="emailId"
                    class="rounded-r-none text-black"
                    placeholder="E-mail"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button
              type="submit"
              aria-label="submit"
              class="uppercase rounded-l-none">
              <Icon
                name="weui:arrow-filled"
                width="12"
                height="24" />
            </Button>
          </form>
          <p class="~text-[12px]/[14px] text-black">
            Нажимая стрелку «Далее», я даю согласие на получение рекламной рассылки и обработку персональных данных.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>
