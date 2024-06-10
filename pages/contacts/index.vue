<script setup>
import { ref } from 'vue'
import CONTACTS from '~/data/contacts'
import { SERVICE } from '~/data/constants'
import { useHead } from 'unhead'

const isLoaded = ref(false)

useHead({
  title: 'Контакты - Группа компаний ООО «БиоЛайн»',
  meta: [
    {
      name: 'description',
      content: 'Центральный офис группы компаний «БиоЛайн» находится в Санкт-Петербурге по адресу: Санкт-Петербург, ул. Профессора Попова, д. 23, лит. Е. Тел.: +7 (812) 320-49-49'
    },
    {
      name: 'keywords',
      content: 'Контакты, Медицинская компания, Компания «БиоЛайн», Головной офис'
    }
  ]
})
</script>

<template>

  <section class="mb-8 pt-14">
    <div class="container">
      <h1 class="section-title">Контакты</h1>
    </div>
  </section>

  <section class="mb-8">
    <div class="container flex gap-4">
      <div class="relative basis-2/3 3xl:min-h-[438px] rounded overflow-hidden">
        <div
          class="absolute left-0 top-0 w-full h-full bg-blue-500 transition-opacity duration-500"
          :class="{ 'opacity-0': isLoaded }"></div>
        <NuxtPicture
          src="/img/contacts-page-first.jpg"
          class="w-full h-full object-cover object-top"
          :img-attrs="{class:'w-full h-full object-cover object-top'}"
          quality="80"
          width="940"
          height="438"
          alt="центральный офис"
          @load="isLoaded = true"
        />
      </div>
      <div class="basis-1/3">
        <h2>Центральный офис</h2>
        <p>{{ CONTACTS.spb.index }}</p>
        <p>{{ CONTACTS.spb.country }}</p>
        <p>{{ CONTACTS.spb.city }}</p>
        <p>{{ CONTACTS.spb.address }}</p>
        <p>{{ CONTACTS.spb.phone }}</p>
        <p>{{ CONTACTS.spb.email }}</p>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <div class="container flex gap-4">
      <div class="relative basis-2/3 3xl:min-h-[438px] rounded overflow-hidden">
        <div
          class="absolute left-0 top-0 w-full h-full bg-[#ccc] transition-opacity duration-500"
          :class="{ 'opacity-0': isLoaded }"></div>
        <NuxtPicture
          src="/img/contacts-page-doctors.jpg"
          class="w-full h-full object-cover object-top"
          :img-attrs="{class:'w-full h-full object-cover object-top'}"
          quality="90"
          width="940"
          height="438"
          alt="центральный офис"
          @load="isLoaded = true"
        />
      </div>
      <div class="basis-1/3">
        <h2>Сервисная служба для всех регионов России</h2>
        <p>Телефон: {{ SERVICE.phone }}</p>
        <p>Email: {{ SERVICE.email }}</p>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <div class="container">
      <h2 class="section-title">Филиалы</h2>
    </div>
  </section>

  <BaseContactForm />

</template>