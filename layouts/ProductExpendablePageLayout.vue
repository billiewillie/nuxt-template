<script
  setup
  lang="ts">
import type { ProductCard, ProductPageApi } from '~/types'
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

const product = ref<ProductCard>({
  id: 1,
  title: 'Микроскоп Leica DM3000',
  preview_img: '/img/items/item-1.jpg',
  url: 'http://localhost:3000',
  is_favourites: 0,
  is_comparison: 0,
  description: 'description 1',
  is_new: false
})

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
  <main class="flex-auto">

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

    <!--    <section class="mb-16">-->
    <!--      <div class="container">-->
    <!--        <p>dfsdfsd</p>-->
    <!--        <BaseProductsExpandableOrderForm />-->
    <!--      </div>-->
    <!--    </section>-->

  </main>
</template>