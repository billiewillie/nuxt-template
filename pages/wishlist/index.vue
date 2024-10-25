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

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const wishList = useCookie('wishList')
const wishListExpandableMaterials = useCookie('wishListExpendableMaterials')

const wishListData = ref<ProductCard[] | null>(null)
const wishListExpandableMaterialsData = ref<ProductCard[] | null>(null)

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
  contact: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 7 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' })
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
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

    <ClientOnly
      v-if="
        wishListExpandableMaterialsData &&
        wishListExpandableMaterialsData.length
      "
    >
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
        <Card class="bg-background-dark md:w-1/2 text-white p-4">
          <h3 class="font-bold ~text-[22px]/[28px]">Не нашли что искали? Наш специалист свяжется с Вами:</h3>
          <p class="~text-[12px]/[14px]">Я согласен(на) на обработку персональных данных. ООО "БиоЛайн" гарантирует конфиденциальность получаемой
            информации.</p>
        </Card>
        <Card class="bg-background-dark md:w-1/2 text-white p-4 ">
          <h3 class="font-bold ~text-[22px]/[28px]">Отправьте список из избранного себе на почту!</h3>
          <p class="~text-[12px]/[14px]">Нажимая стрелку «Далее», я даю согласие на получение рекламной рассылки и обработку персональных
            данных.</p>
        </Card>
      </div>
    </section>

    <!--    <section>-->
    <!--      <div class="container">-->
    <!--        <form-->
    <!--          @submit="onSubmit"-->
    <!--          class="flex flex-col gap-4">-->
    <!--          <div class="grid gap-16">-->
    <!--            <FormField-->
    <!--              v-slot="{ componentField }"-->
    <!--              name="contact">-->
    <!--              <FormItem>-->
    <!--                <FormControl>-->
    <!--                  <Input-->
    <!--                    type="text"-->
    <!--                    name="contact"-->
    <!--                    :id="contactId"-->
    <!--                    placeholder="Телефон или почта"-->
    <!--                    v-bind="componentField" />-->
    <!--                </FormControl>-->
    <!--                <FormMessage />-->
    <!--              </FormItem>-->
    <!--            </FormField>-->
    <!--          </div>-->
    <!--          <div class="grid gap-4">-->
    <!--            <Button-->
    <!--              type="submit"-->
    <!--              aria-label="submit"-->
    <!--              class="uppercase">-->
    <!--              отправить-->
    <!--            </Button>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </section>-->
  </main>
</template>
