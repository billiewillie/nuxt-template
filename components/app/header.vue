<script
  setup
  lang="ts">
import NAVIGATION from '~/data/navigation'
import CONTACTS from '~/data/contacts'
</script>

<template>
  <header class="flex flex-col shadow-lg">
    <div class="bg-background-dark py-4 text-foreground-dark">
      <div class="container flex justify-between text-[14px]">
        <div class="flex">
          <div class="text-primary">{{ CONTACTS.spb.email }}</div>
          <span class="flex mx-4">|</span>
          <div>{{ CONTACTS.spb.phone }}</div>
          <span class="flex mx-4">|</span>
          <div>связаться с нами</div>
        </div>
        <div class="hidden xl:flex">
          <div>Сравнение (0)</div>
          <span class="flex mx-4">|</span>
          <div>Избранное (0)</div>
          <span class="flex mx-4">|</span>
          <div>Поиск</div>
        </div>
      </div>
    </div>
    <div class="py-4">
      <div class="container relative flex items-center gap-8">
        <NuxtLink
          to="/"
          class="flex h-full w-[110px]">
          <NuxtImg
            src="/img/logo.svg"
            alt="logo"
            height="59"
            width="110"
          />
        </NuxtLink>
        <BaseNavigation ul-class="hidden xl:flex gap-4" />
      </div>
    </div>
  </header>
</template>