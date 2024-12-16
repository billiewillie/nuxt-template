<script
  setup
  lang="ts">
import { toast } from '@/components/ui/toast'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useId, useRuntimeConfig } from '#app'
import URLs from '~/data/urls'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { VisuallyHidden } from 'radix-vue'
import { FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const nameId = useId()
const emailId = useId()
const phoneId = useId()
const cityId = useId()
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
</script>

<template>
  <div>
    <Dialog v-model:open="isOpen">
      <DialogTrigger as-child>
        <Button
          variant="link"
          class="underline-offset-4 hover:underline p-0 h-auto text-white font-normal">
          связаться с нами
        </Button>
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
              class="relative"
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
</template>

<style scoped>
.text-destructive {
  @apply absolute top-9;
}
</style>