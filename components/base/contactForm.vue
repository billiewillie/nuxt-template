<script
  setup
  lang="ts">
import { toast } from '@/components/ui/toast'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import * as z from 'zod'
import { useId } from '#app'

const nameId = useId()
const emailId = useId()
const phoneId = useId()
const cityId = useId()
const messageId = useId()
const jobId = useId()
const labId = useId()
const checkId = useId()

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
  job: z
    .string()
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' })
    .optional(),
  phone: z
    .string({ message: 'Обязательное поле' })
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(15, { message: 'Максимальная длина 15 символов' }),
  city: z
    .string()
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(20, { message: 'Максимальная длина 20 символов' })
    .optional(),
  lab: z
    .string()
    .min(2, { message: 'Минимальная длина 2 символа' })
    .max(50, { message: 'Максимальная длина 50 символов' })
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

const onSubmit = form.handleSubmit((values) => {
  toast({
    title: 'Успешная отправка',
  })
})
</script>

<template>
  <section class="relative h-[750px]">
    <NuxtPicture
      src="/img/contacts-form-bg.jpg"
      class="absolute left-0 top-0 h-full w-full"
      quality="90"
      :imgAttrs="{class:'w-full h-full object-cover object-top'}"
      alt="contacts form image"
    />
    <div class="container flex justify-end items-center h-full">
      <div class="bg-background relative p-10 rounded w-1/2 shadow-lg">
        <h2 class="text-center text-2xl mb-4">
          Заполните форму с контактными данными и наш специалист свяжется с Вами:
        </h2>
        <form
          @submit="onSubmit"
          class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
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
              <FormItem class="row-span-3">
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
              name="job">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    :id="jobId"
                    placeholder="Место работы"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="lab">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    :id="labId"
                    placeholder="Лаборатория"
                    v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex gap-4">
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
              <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md">
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
    </div>
  </section>
</template>

<style scoped>

</style>