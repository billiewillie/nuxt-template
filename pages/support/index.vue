<script
  setup
  lang="ts">
import { useId, useRuntimeConfig } from '#app'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import URLs from '~/data/urls'
import { toast } from '~/components/ui/toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Button } from '~/components/ui/button'
import { VisuallyHidden } from 'radix-vue'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const nameId = useId()
const emailId = useId()
const cityId = useId()
const companyId = useId()
const lineOfWorkId = useId()
const phoneId = useId()
const messageId = useId()
const checkId = useId()

const [isOpen, _] = dialogState()

const formSchema = toTypedSchema(z.object({
  name: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  email: z
    .string({ message: 'Обязательное поле' })
    .email({ message: 'Некорректная почта' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' }),
  phone: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(15, { message: 'Максимальная длина 15 символов' }),
  city: z
    .string()
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(20, { message: 'Максимальная длина 20 символов' })
    .optional(),
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
    email: values.email,
    name: values.name,
    phone: values.phone,
    city: values.city,
    message: values.message,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  console.log(data)
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

interface Topic {
  id: number
  title: string
  slug: string
  image: string
  isActive: boolean
}

const topics = ref<Topic[]>([
  {
    id: 1,
    title: 'Технический сервис',
    slug: 'tech-service',
    image: '/img/support-page/tech-service.webp',
    isActive: true
  },
  {
    id: 2,
    title: 'Методическая поддержка',
    slug: 'method-service',
    image: '/img/support-page/method-service.webp',
    isActive: false
  },
  {
    id: 3,
    title: 'Обучение',
    slug: 'education',
    image: '/img/support-page/education.webp',
    isActive: false
  }
])

function setActiveTopic(id: number): void {
  if (id === topics.value.find(item => item.isActive)?.id) return
  topics.value = topics.value.map((topic) => {
    return {
      ...topic,
      isActive: topic.id === id
    }
  })
}
</script>

<template>
  <main>

    <Head>
      <Title>Технический сервис | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Технический сервис</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="flex flex-col gap-8 justify-between xl:items-center xl:flex-row">
          <h1 class="section-title">
            {{ topics.find(item => item.isActive)?.title }}
          </h1>
          <div class="flex gap-4 flex-wrap">
            <Button
              v-for="topic in topics"
              :key="topic.id"
              @click="setActiveTopic(topic.id)"
              class="rounded-full bg-transparent text-foreground shadow-tab hover:bg-transparent hover:text-foreground hover:shadow-tab-hover transition-all"
              :class="{'bg-background-dark text-white hover:bg-transparent hover:text-foreground': topic.isActive }">
              {{ topic.title }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-20">
      <div class="container flex flex-col md:flex-row justify-between gap-8">
        <div class="basis-1/2 flex flex-col gap-4 md:pr-8 xl:pr-32">
          <template v-if="topics.find(item => item.isActive)?.id === 1">
            <div>
              <p>
                Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра,
                чтобы
                качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси,
                Казахстана
                и Узбекистана.
              </p>
              <br>
              <p>
                Наши инженеры повышают уровень своей квалификации, а современные рабочие инструменты и собственный склад
                запасных частей позволяют быстро реагировать на заявки, сводя к минимуму простои оборудования.
              </p>
            </div>
            <div class="mt-auto">
              <div class="gap-2 flex items-center mb-4">
                <Icon
                  name="line-md:phone"
                  color="#0B9798"
                  width="24"
                  height="24" />
                <a
                  href="tel:+78004443349"
                  class="text-primary -mt-0.5">
                  +7 (800) 444 33 49
                </a>
              </div>
              <div class="gap-2 flex items-center mb-4">
                <Icon
                  name="line-md:email"
                  color="#0B9798"
                  width="24"
                  height="24" />
                <a
                  href="mailto:service@bioline.ru"
                  class="text-primary -mt-0.5">
                  service@bioline.ru
                </a>
              </div>
              <Button
                @click="isOpen = true"
                class="uppercase">
                оставить заявку на сервис
              </Button>
            </div>
          </template>
          <template v-if="topics.find(item => item.isActive)?.id === 2">
            <p>
              Любые вопросы планирования эксперимента, оптимизации условий его проведения, подбора панели реагентов,
              решения возникающих сложностей Вы можете адресовать нашим специалистам методической поддержки
              пользователей.
            </p>
            <div class="mt-auto">
              <p class="mb-4">
                <b>
                  Вы можете связаться с нами по единому адресу электронной почты:
                </b>
              </p>
              <div class="gap-2 flex items-center mb-4">
                <Icon
                  name="line-md:email"
                  color="#0B9798"
                  width="24"
                  height="24" />
                <a
                  href="mailto:support@bioline.ru"
                  class="text-primary -mt-0.5">
                  support@bioline.ru
                </a>
              </div>
              <Button
                class="uppercase"
                @click="isOpen = true">
                оставить заявку на поддержку
              </Button>
            </div>
          </template>
          <template v-if="topics.find(item => item.isActive)?.id === 3">
            <div>
              <p>
                Компания “БиоЛайн” совместно с ведущими научно-исследовательскими и лечебными учреждениями России
                предлагает Вашему вниманию курсы и сертификационные циклы с целью усовершенствования профессиональных
                знаний, умений и навыков, а также углубленного освоения теоретических знаний по проточной цитометрии,
                иммунодиагностики и патоморфологии.
              </p>
              <br>
              <p>
                Наша компания располагает собственным учебным центром, оснащенным современным аналитическим
                оборудованием,
                производства компаний <b class="underline underline-offset-4">Becton Dickinson</b>, <b class="underline underline-offset-4">Leica</b>, <b class="underline underline-offset-4">Akoya</b> и др.
              </p>
            </div>
            <div class="mt-auto">
              <Button
                @click="isOpen = true"
                class="uppercase">
                оставить заявку на обучение
              </Button>
            </div>
          </template>
        </div>
        <div class="basis-1/2">
          <NuxtImg
            :src="topics.find(topic => topic.isActive)?.image"
            :alt="topics.find(topic => topic.isActive)?.title"
            width="820"
            height="590" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex justify-between gap-4">
        <template v-if="topics.find(item => item.isActive)?.id === 1">
          <div class="flex flex-col gap-4">
            <h2 class="section-title mb-12">Мы осуществляем:</h2>
            <div class="grid xl:grid-cols-3 gap-8 xl:gap-16">
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconTechService1 />
                </i>
                <p>Инсталляция оборудования, подключение к инженерным коммуникациям</p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconTechService2 />
                </i>
                <p>Обучение работе на оборудовании</p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconTechService3 />
                </i>
                <p>Гарантийное и постгарантийное обслуживание</p>
              </div>
            </div>
          </div>
        </template>
        <template v-if="topics.find(item => item.isActive)?.id === 3">
          <div class="flex flex-col gap-4">
            <h2 class="section-title mb-12">Мы предлагаем различные формы обучения:</h2>
            <div class="grid xl:grid-cols-3 gap-8 xl:gap-16">
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning1 />
                </i>
                <p>
                  Индивидуальные и в небольших группах, базовые тренинги и углубленные курсы, освоение конкретных
                  методик постановки эксперимента.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning2 />
                </i>
                <p>
                  Каждый курс ориентирован на практическое освоение материала. Мы гарантируем, что по окончании обучения
                  каждый из учащихся будет готов к самостоятельной работе.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning3 />
                </i>
                <p>
                  Возможен выезд специалиста в Вашу лабораторию.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning4 />
                </i>
                <p>
                  Программа курса обучения, осваиваемые методики, необходимые реагенты и материал для эксперимента
                  согласовываются индивидуально.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning5 />
                </i>
                <p>
                  Каждый из наших тренеров сертифицирован компанией производителем оборудования.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <i class="h-[64px]">
                  <IconLearning6 />
                </i>
                <p>
                  Вы можете подписаться на получение информации о планируемых сертификационных курсах и он-лайн
                  вебинарах от производителей или оставить заявку на обучение.
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <Dialog v-model:open="isOpen">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle class="text-center">Связаться с нами</DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <form
          @submit="onSubmit"
          class="flex flex-col gap-4">
          <div class="flex flex-col gap-4">
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
              name="email">
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    :id="emailId"
                    placeholder="E-mail"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="city">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    :id="cityId"
                    placeholder="Город"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="company">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    :id="companyId"
                    placeholder="Организация"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="lineOfWork">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    :id="lineOfWorkId"
                    placeholder="Вид работ"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="phone">
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    :id="phoneId"
                    placeholder="Телефон"
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
                    default-checked
                    @update:checked="handleChange" />
                </FormControl>
                <div class="leading-none">
                  <FormLabel
                    :forId="checkId"
                    class="text-[12px] font-thin leading-none">
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
  </main>
</template>