<script
  setup
  lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from '@/components/ui/toast'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import * as z from 'zod'
import { useId, useRuntimeConfig } from '#app'
import URLs from '~/data/urls'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const nameId: string = useId()
const contactId: string = useId()
const messageId: string = useId()

const { toast } = useToast()

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({ message: 'Напишите пожалуйста ваше имя' })
      .min(2, { message: 'Минимальная длина 2 символа' })
      .max(50, { message: 'Максимальная длина 50 символов' }),
    contact: z
      .string({ message: 'напишите пожалуйста телефон или почту' })
      .min(8, { message: 'Минимальная длина 7 символа' })
      .max(30, { message: 'Максимальная длина 50 символов' }),
    message: z
      .string({ message: 'Обязательное поле' })
      .min(10, { message: 'Минимальная длина сообщения 10 символов' })
      .optional()
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
    product_id: [1, 2],
    contact: values.contact,
    name: values.name,
    message: values.message,
    token: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  }
  console.log(data)
  const responseData = await $fetch(
    `${API_ENDPOINT}${URLs.feedbackForm}`,
    {
      method: 'POST',
      body: data
    }
  )
  if (responseData === '200') {
    toast({
      description: 'Заявка отправлена!'
    })
  }
})
</script>

<template>
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
    </div>
  </form>
</template>