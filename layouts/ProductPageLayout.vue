<script
  setup
  lang="ts">
import type { ProductPageApi } from '~/types'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { VisuallyHidden } from 'radix-vue'
import { Button } from '~/components/ui/button'
import { useId, useRuntimeConfig } from '#app'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import URLs from '~/data/urls'
import { toast } from '~/components/ui/toast'
import dateFormatter from '~/utils/dateFormatter'

const {
  API_ENDPOINT
}: {
  API_ENDPOINT: string
} = useRuntimeConfig().public

const nameId = useId()
const contactId = useId()
const messageId = useId()
const checkId = useId()
const [isOpen, _]: any = dialogState()
const formSchema = toTypedSchema(z.object({
  name: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  contact: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 8 символа' })
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

const tabs = ref([
  {
    id: 1,
    isActive: true,
    title: 'Описание',
    image: 'https://telvla.ru/upload/image/products/previews/sealsafe.webp',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 2,
    isActive: false,
    title: 'Технические характеристики',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 3,
    isActive: false,
    title: 'Оптика',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 4,
    isActive: false,
    title: 'Проточная система',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 5,
    isActive: false,
    title: 'Анализ данных',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 6,
    isActive: false,
    title: 'Опции',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  },
  {
    id: 7,
    isActive: false,
    title: 'Ресурсы',
    content: '<p><b>Проточный цитометр BD FACSCanto™ II</b> – прибор для полноценного многопараметрического анализа, позволяющий свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки обеспечивает простоту эксплуатации.\n' +
      '\n' +
      'Специализированное клиническое программное обеспечение FACSCanto™ разработано для автоматизации сбора и анализа данных при проведении клинических исследований.</p>'
  }
])

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
    product_id: props.data.id,
    contact: values.contact,
    name: values.name,
    message: values.message,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  const responseData = await $fetch(
    `${API_ENDPOINT}${URLs.indexPageForm}`,
    {
      method: 'POST',
      body: data
    }
  )
  if (responseData === '200') {
    form.resetForm()
    isOpen.value = false
    toast({
      description: 'Заявка отправлена!'
    })
  } else {
    toast({
      description: 'Произошла ошибка!',
      variant: 'destructive'
    })
  }
})

const props = defineProps<{
  data: ProductPageApi
}>()

const compareList = useCookie(
  'compareList',
  {
    default: () => [],
    watch: true
  }
)

const wishList = useCookie(
  'wishList',
  {
    default: () => [],
    watch: true
  }
)

function setCompareList(id: number) {
  if (compareList.value.includes(id)) {
    compareList.value = compareList.value.filter((item: number) => item !== id)
  } else {
    compareList.value = [...compareList.value, id]
  }
}

function setWishList(id: number) {
  if (wishList.value.includes(id)) {
    wishList.value = wishList.value.filter((item: number) => item !== id)
  } else {
    wishList.value = [...wishList.value, id]
  }
}

function setActiveTab(id: number): void {
  if (id === tabs.value.find(item => item.isActive)?.id) return
  tabs.value = tabs.value.map((tab) => {
    return {
      ...tab,
      isActive: tab.id === id
    }
  })
}
</script>

<template>
  <main class="flex-auto bg-white h-full">

    <Head>
      <Title>Product | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Каталог | Группа компаний ООО «БиоЛайн»" />
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
        content="Каталог | Группа компаний ООО «БиоЛайн»" />
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

    <section class="mb-16 pt-8">
      <div class="container">
        <ClientOnly>
          <Breadcrumb class="mb-12">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as-child>
                  <NuxtLink to="/">Главная</NuxtLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <template
                v-for="item in props.data.bread_crumbs"
                :key="item.slug">
                <BreadcrumbItem>
                  <div class="flex items-center">
                    <BreadcrumbSeparator />
                     
                    <BreadcrumbLink as-child>
                      <NuxtLink :to="item.url">
                        {{ item.title }}
                      </NuxtLink>
                    </BreadcrumbLink>
                  </div>
                </BreadcrumbItem>
              </template>
              <BreadcrumbItem>
                <div class="flex items-center">
                  <BreadcrumbSeparator />
                   
                  <BreadcrumbPage>{{ props.data.title }}</BreadcrumbPage>
                </div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ClientOnly>

        <div class="flex flex-col xl:flex-row justify-between xl:items-center gap-8 xl:gap-16">
          <div class="flex">
            <NuxtImg
              class="hidden xl:flex w-20 mr-11"
              :src="props.data.manufacturers[0].logo" />
            <h1 class="section-title section-title--product">
              {{ props.data.title }}
            </h1>
          </div>
          <div class="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    @click="(e) => {
                    e.preventDefault();
                    setCompareList(props.data.id);
                  }"
                    class="relative z-10 grid place-content-center w-7 h-7 transition-opacity group opacity-60 hover:opacity-100">
                    <Icon
                      name="mynaui:chart-bar-one-solid"
                      width="24"
                      height="24"
                      :color="compareList.includes(props.data.id) ? '#298687' : 'black'" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p v-if="compareList.includes(props.data.id)">Убрать из сравнения</p>
                  <p v-else>Добавить в сравнение</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    @click="(e) => {
                    e.preventDefault();
                    setWishList(props.data.id);
                  }"
                    class="relative z-10 grid place-content-center w-7 h-7 transition-opacity group opacity-60 hover:opacity-100">
                    <Icon
                      name="lets-icons:star"
                      width="24"
                      height="24"
                      :class="wishList.includes(props.data.id) ? '*:stroke-[#298687]' : '*:stroke-black'"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p v-if="compareList.includes(props.data.id)">Убрать из избранного</p>
                  <p v-else>Добавить в избранное</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Dialog v-model:open="isOpen">
              <DialogTrigger as-child>
                <Button class="rounded-full">оставить заявку</Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle class="text-center">Связаться с нами</DialogTitle>
                  <VisuallyHidden>
                    <DialogDescription></DialogDescription>
                  </VisuallyHidden>
                </DialogHeader>
                <form
                  @submit="onSubmit"
                  class="flex flex-col gap-8">
                  <div class="flex flex-col gap-8">
                    <FormField
                      v-slot="{ componentField }"
                      name="name">
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
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
                            :id="contactId"
                            placeholder="E-mail или телефон"
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
                    placeholder="Сообщение"
                    :id="messageId"
                    class="resize-none h-full"
                    v-bind="componentField"
                  />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </FormField>
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
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="container flex gap-4">
        <Button
          v-for="tab in tabs"
          :key="tab.id"
          @click="setActiveTab(tab.id)"
          class="rounded-full bg-transparent text-foreground shadow-tab hover:bg-transparent hover:text-foreground hover:shadow-tab-hover transition-all"
          :class="{'bg-background-dark text-white hover:bg-transparent hover:text-foreground': tab.isActive }">
          {{ tab.title }}
        </Button>
      </div>
    </section>

    <section>
      <div class="container flex flex-col gap-8 pb-8">
        <template
          v-for="tab in tabs"
          :key="tab.id">
          <template v-if="tabs.find(item => item.isActive)?.id === tab.id">
            <div
              class="flex"
              v-if="tab.id === 1">
              <div class="basis-1/3">
                <BaseImage
                  :src="tab.image"
                  alt="slider image"
                  class="aspect-auto"
                  placeholder="bg-[#EBEEF6]"
                  quality="90" />
              </div>
              <div class="basis-2/3 flex flex-col gap-4">
                <p class="font-bold">Описание</p>
                <hr />
                <div>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                  <br>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                </div>
                <hr />
                <div class="flex gap-4">
                  <NuxtLink
                    to="/pdf/blank.pdf"
                    class="flex flex-col"
                    target="_blank"
                    external>
                    <Icon
                      name="vscode-icons:file-type-pdf2"
                      color="#575757"
                      width="64"
                      height="64" />
                    <p>Регистрационное удостоверение</p>
                    <span class="uppercase underline text-primary underline-offset-4">
                скачать
              </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              v-else-if="tab.id === 2"
              class="flex flex-col xl:flex-row xl:columns-2 gap-x-4">
              <div class="flex basis-1/2 flex-col">
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">Лазеры</div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Полупроводниковые лазеры 405 нм (30 мВ) и 488 нм (20 мВ), HeNe лазер 633 нм (17 мВт)
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Регистрируемые параметры
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      До 8 флуоресцентных параметров, до 10 оптических параметров
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Проточная кювета
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      180 × 430 мкм в поперечном сечении
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Чувствительность регистрации флуоресценции (MESF)
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      < 100 эквивалентов FITC, < 50 эквивалентов PE
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Разрешение по параметрам светорассеяния
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      FSC - 1.0 мкм, SSC - 0.5 мкм
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Собирающая линза
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      1.2 N, соединена с проточной кюветой при помощи оптического геля
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Детекторы светорассеяния
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Детектор FSC: фотодиод, 488/10 BP
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Детектор SSC: фотоэлектронный умножитель (ФЭУ), 488/10 BP
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">Светофильтры</div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Синий лазер: 530/30; 585/42; >670; 780/60 нм
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Красный лазер: 660/20; 780/60 нм
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Фиолетовый лазер: 450/50; 510/50 нм
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex basis-1/2 flex-col">
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">Лазеры</div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Полупроводниковые лазеры 405 нм (30 мВ) и 488 нм (20 мВ), HeNe лазер 633 нм (17 мВт)
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Регистрируемые параметры
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      До 8 флуоресцентных параметров, до 10 оптических параметров
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Проточная кювета
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      180 × 430 мкм в поперечном сечении
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Чувствительность регистрации флуоресценции (MESF)
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      < 100 эквивалентов FITC, < 50 эквивалентов PE
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Разрешение по параметрам светорассеяния
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      FSC - 1.0 мкм, SSC - 0.5 мкм
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Собирающая линза
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      1.2 N, соединена с проточной кюветой при помощи оптического геля
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">
                    Детекторы светорассеяния
                  </div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Детектор FSC: фотодиод, 488/10 BP
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Детектор SSC: фотоэлектронный умножитель (ФЭУ), 488/10 BP
                    </p>
                  </div>
                </div>
                <div>
                  <div class="bg-gray-100 py-2 px-4 xl:px-6 rounded-t-md">Светофильтры</div>
                  <div>
                    <p class="py-2 px-4 xl:px-6">
                      Синий лазер: 530/30; 585/42; >670; 780/60 нм
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Красный лазер: 660/20; 780/60 нм
                    </p>
                    <hr>
                    <p class="py-2 px-4 xl:px-6">
                      Фиолетовый лазер: 450/50; 510/50 нм
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-16"
              v-if="tab.id === 3">
              <div class="flex gap-4">
                <div class="basis-1/2">
                  <BaseImage
                    class="aspect-auto"
                    src="/img/product-page/optica-1.jpg"
                    alt="оптика"
                    width="884"
                    height="438"
                    placeholder="bg-[#2264B4]" />
                </div>
                <div class="basis-1/2">
                  <p>оптика возбуждения</p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      Конструкция оптической системы включает в себя два или три источника излучения (488 нм, 633 нм,
                      405 нм (опция).
                    </li>
                    <li>
                      Пространственное разделение лучей лазеров обеспечивает истинную многопараметровость анализа,
                      позволяя в одном исследовании использовать флуорохромы с близкими спектрами эмиссии, но
                      возбуждаемые на различных длинах волн.
                    </li>
                    <li>
                      Фиксация всех элементов оптической системы не требует ежедневной юстировки пользователем и
                      обуславливает воспроизводимость результатов от эксперимента к эксперименту.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="basis-1/2">
                  <BaseImage
                    class="aspect-auto"
                    src="/img/product-page/optica-1.jpg"
                    alt="оптика"
                    width="884"
                    height="438"
                    placeholder="bg-[#2264B4]" />
                </div>
                <div class="basis-1/2">
                  <p>оптика возбуждения</p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      Конструкция оптической системы включает в себя два или три источника излучения (488 нм, 633 нм,
                      405 нм (опция).
                    </li>
                    <li>
                      Пространственное разделение лучей лазеров обеспечивает истинную многопараметровость анализа,
                      позволяя в одном исследовании использовать флуорохромы с близкими спектрами эмиссии, но
                      возбуждаемые на различных длинах волн.
                    </li>
                    <li>
                      Фиксация всех элементов оптической системы не требует ежедневной юстировки пользователем и
                      обуславливает воспроизводимость результатов от эксперимента к эксперименту.
                    </li>
                  </ul>
                  <p>
                    Походы, реализованные в конструкции оптической системы прибора, позволяют обеспечить самый высокий
                    в классе уровень флуоресцентной чувствительности.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="basis-1/2">
                  <p>оптика возбуждения</p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      Конструкция оптической системы включает в себя два или три источника излучения (488 нм, 633 нм,
                      405 нм (опция).
                    </li>
                    <li>
                      Пространственное разделение лучей лазеров обеспечивает истинную многопараметровость анализа,
                      позволяя в одном исследовании использовать флуорохромы с близкими спектрами эмиссии, но
                      возбуждаемые на различных длинах волн.
                    </li>
                    <li>
                      Фиксация всех элементов оптической системы не требует ежедневной юстировки пользователем и
                      обуславливает воспроизводимость результатов от эксперимента к эксперименту.
                    </li>
                  </ul>
                  <p>
                    Походы, реализованные в конструкции оптической системы прибора, позволяют обеспечить самый высокий
                    в классе уровень флуоресцентной чувствительности.
                  </p>
                </div>
                <div class="basis-1/2">
                  <p>оптика возбуждения</p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      Конструкция оптической системы включает в себя два или три источника излучения (488 нм, 633 нм,
                      405 нм (опция).
                    </li>
                    <li>
                      Пространственное разделение лучей лазеров обеспечивает истинную многопараметровость анализа,
                      позволяя в одном исследовании использовать флуорохромы с близкими спектрами эмиссии, но
                      возбуждаемые на различных длинах волн.
                    </li>
                    <li>
                      Фиксация всех элементов оптической системы не требует ежедневной юстировки пользователем и
                      обуславливает воспроизводимость результатов от эксперимента к эксперименту.
                    </li>
                  </ul>
                  <p>
                    Походы, реализованные в конструкции оптической системы прибора, позволяют обеспечить самый высокий
                    в классе уровень флуоресцентной чувствительности.
                  </p>
                </div>
              </div>
            </div>
            <div
              v-else-if="tab.id === 4"
              class="flex flex-col">
              <div class="flex mb-12">
                <div class="basis-1/3">
                  <BaseImage
                    :src="tab.image"
                    alt="slider image"
                    class="aspect-auto"
                    placeholder="bg-[#EBEEF6]"
                    quality="90" />
                </div>
                <div class="flex basis-2/3 flex-col">
                  <p>Проточная система</p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      Полностью автоматизированные протоколы промывки прибора перед включением и выключением системы,
                      управляемые из программного обеспечения дополнительные протоколы промывки прибора.
                    </li>
                    <li>
                      Автоматическая промывка иглы (SIT Flush) между пробами.
                    </li>
                    <li>
                      Отдельная стойка для размещения обслуживающих растворов непосредственно в фабричных упаковках.
                    </li>
                    <li>
                      Дегазация проточной жидкости перед подачей в проточную кювету.
                    </li>
                    <li>
                      Датчики уровня жидкости во всех емкостях с обслуживающими растворами. Информация об уровне
                      наполнения контейнеров отображается в программном обеспечении.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col">
                <p>специализированное программное обеспечение</p>
                <hr class="my-4">
                <div class="flex flex-col gap-2 mb-4">
                  <p class="font-bold">Программные модули для клинического ПО BD FACSCanto:</p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                </div>
                <div class="flex flex-col gap-2">
                  <p class="font-bold">Программные модули для клинического ПО BD FACSCanto:</p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col xl:flex-row gap-4"
              v-if="tab.id === 5">
              <div class="basis-1/2 flex flex-col gap-4">
                <p class="~text-[16px]/[18px]">
                  ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ДЛЯ КЛИНИЧЕСКИХ ИССЛЕДОВАНИЙ BD FACS Canto™
                </p>
                <hr />
                <div>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                  <br>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                </div>
              </div>
              <div class="basis-1/2 flex flex-col gap-4">
                <p class="~text-[16px]/[18px]">
                  УНИВЕРСАЛЬНОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ FACSDiva™
                </p>
                <hr />
                <ul class="list-disc pl-5 flex flex-col gap-4">
                  <li>
                    Полностью автоматизированные протоколы промывки прибора перед включением и выключением системы,
                    управляемые из программного обеспечения дополнительные протоколы промывки прибора.
                  </li>
                  <li>
                    Автоматическая промывка иглы (SIT Flush) между пробами.
                  </li>
                  <li>
                    Отдельная стойка для размещения обслуживающих растворов непосредственно в фабричных упаковках.
                  </li>
                  <li>
                    Дегазация проточной жидкости перед подачей в проточную кювету.
                  </li>
                  <li>
                    Датчики уровня жидкости во всех емкостях с обслуживающими растворами. Информация об уровне наполнения контейнеров отображается в программном обеспечении.
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-else-if="tab.id === 6"
              class="flex flex-col">
              <div class="flex flex-col md:flex-row mb-12 gap-4">
                <div class="flex md:basis-1/2 xl:basis-1/4 flex-col">
                  <div class="mb-8">
                    <BaseImage
                      :src="tab.image"
                      alt="slider image"
                      class="aspect-auto"
                      placeholder="bg-[#EBEEF6]"
                      quality="90" />
                  </div>
                  <p class="font-bold">
                    Модуль BD™ High Throughput Sampler (HTS) для автоматической подачи проб из планшетов
                  </p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Совместимость с 96-луночными и 384-луночными планшетами
                    </li>
                    <li>
                      2 режима работы: стандартный и высокопроизводительный
                    </li>
                    <li>
                      ≤ 15 минут на 96-луночный планшет
                    </li>
                    <li>
                      кроссконтаминация ≤0,5% в высокпроизводительном режиме
                    </li>
                  </ul>
                </div>
                <div class="flex md:basis-1/2 xl:basis-1/4 flex-col">
                  <div class="mb-8">
                    <BaseImage
                      :src="tab.image"
                      alt="slider image"
                      class="aspect-auto"
                      placeholder="bg-[#EBEEF6]"
                      quality="90" />
                  </div>
                  <p class="font-bold">
                    Модуль BD™ High Throughput Sampler (HTS) для автоматической подачи проб из планшетов
                  </p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Совместимость с 96-луночными и 384-луночными планшетами
                    </li>
                    <li>
                      2 режима работы: стандартный и высокопроизводительный
                    </li>
                    <li>
                      ≤ 15 минут на 96-луночный планшет
                    </li>
                    <li>
                      кроссконтаминация ≤0,5% в высокпроизводительном режиме
                    </li>
                  </ul>
                </div>
                <div class="flex md:basis-1/2 xl:basis-1/4 flex-col">
                  <div class="mb-8">
                    <BaseImage
                      :src="tab.image"
                      alt="slider image"
                      class="aspect-auto"
                      placeholder="bg-[#EBEEF6]"
                      quality="90" />
                  </div>
                  <p class="font-bold">
                    Модуль BD™ High Throughput Sampler (HTS) для автоматической подачи проб из планшетов
                  </p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Совместимость с 96-луночными и 384-луночными планшетами
                    </li>
                    <li>
                      2 режима работы: стандартный и высокопроизводительный
                    </li>
                    <li>
                      ≤ 15 минут на 96-луночный планшет
                    </li>
                    <li>
                      кроссконтаминация ≤0,5% в высокпроизводительном режиме
                    </li>
                  </ul>
                </div>
                <div class="flex md:basis-1/2 xl:basis-1/4 flex-col">
                  <div class="mb-8">
                    <BaseImage
                      :src="tab.image"
                      alt="slider image"
                      class="aspect-auto"
                      placeholder="bg-[#EBEEF6]"
                      quality="90" />
                  </div>
                  <p class="font-bold">
                    Модуль BD™ High Throughput Sampler (HTS) для автоматической подачи проб из планшетов
                  </p>
                  <hr class="my-2">
                  <ul class="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Совместимость с 96-луночными и 384-луночными планшетами
                    </li>
                    <li>
                      2 режима работы: стандартный и высокопроизводительный
                    </li>
                    <li>
                      ≤ 15 минут на 96-луночный планшет
                    </li>
                    <li>
                      кроссконтаминация ≤0,5% в высокпроизводительном режиме
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col">
                <p class="font-bold ~text-[16px]/[18px]">Специализированное программное обеспечение</p>
                <hr class="my-4">
                <div class="flex flex-col gap-2 mb-4">
                  <p class="font-bold">Программные модули для клинического ПО BD FACSCanto:</p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                </div>
                <div class="flex flex-col gap-2">
                  <p class="font-bold">Программные модули для клинического ПО BD FACSCanto:</p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                  <p>
                    <b>BD™ Stem Cell Enumeration Software module</b> – модуль разработанный для автоматизированного
                    гейтирования, вычисления статистики и предоставления результатов по выделению жизнеспособных
                    популяций CD45+/CD34+ гемопоэтических стволовых клеток для расчёта дозы при трансплантации.
                    BD™ HLA-B27 Software module автоматизирует анализ антигена HLA-B27, который имеет клиническое
                    значение для оценки анкилозирующего спондилоартрита, псориаза, реактивного артрита и воспалительных
                    заболеваний кишечника.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex"
              v-if="tab.id === 7">
              <div class="basis-1/3">
                <BaseImage
                  :src="tab.image"
                  alt="slider image"
                  class="aspect-auto"
                  placeholder="bg-[#EBEEF6]"
                  quality="90" />
              </div>
              <div class="basis-2/3 flex flex-col gap-4">
                <p class="font-bold">Описание</p>
                <hr />
                <div>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                  <br>
                  <p>
                    Проточный цитометр BD FACSCanto™ II – прибор для полноценного многопараметрического анализа,
                    позволяющий
                    свободно комбинировать до 8 флуоресцентных меток с минимальными ограничениями в выборе сочетаний
                    флуорохромов. Автоматизация процедуры запуска, контроля качества, выключения и плановой промывки
                    обеспечивает простоту эксплуатации.
                  </p>
                </div>
                <hr />
                <div class="flex gap-4">
                  <NuxtLink
                    to="/pdf/blank.pdf"
                    class="flex flex-col"
                    target="_blank"
                    external>
                    <Icon
                      name="vscode-icons:file-type-pdf2"
                      color="#575757"
                      width="64"
                      height="64" />
                    <p>Регистрационное удостоверение</p>
                    <span class="uppercase underline text-primary underline-offset-4">
                скачать
              </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </template>
        <div class="flex flex-col gap-4">
          <p>Подобрали для Вас</p>
          <hr>
          <div class="flex gap-4">
            <Card
              v-for="(_, index) in 4"
              class="basis-1/4"
              :key="index">
              <CardHeader>
                <BaseImage
                  class="w-full"
                  :img-attrs="{ class: 'w-full h-full object-scale-down object-center' }"
                  :src="props.data.preview_img"
                  :alt="props.data.title"
                  aspect-ratio="aspect-square"
                  placeholder="bg-white"
                  width="390"
                  height="390"
                />
              </CardHeader>
              <CardContent class="flex flex-col gap-4 p-0 px-6 flex-auto">
                <CardTitle class="~text-[16px]/[18px] leading-[1.2]">
                  {{ props.data.title }}
                </CardTitle>
                <Separator />
                <CardDescription class="~text-[14px]/[16px] text-foreground">
                  annotation
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
.text-destructive {
  @apply absolute top-9;
}
</style>