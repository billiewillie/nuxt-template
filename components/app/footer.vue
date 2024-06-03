<script setup>
import NAVIGATION from '~/data/navigation'
import CONTACTS from '~/data/contacts'
</script>

<template>
  <footer class="bg-background-dark py-20 text-foreground-dark">
    <div class="container grid grid-cols-1 md:grid-cols-3 text-center">
      <nav>
        <ul class="flex flex-col gap-4 items-start">
          <li
            v-for="item in NAVIGATION"
            :key="item.title"
            class="text-sm">
            {{ item.title }}
          </li>
        </ul>
      </nav>
      <div>
        <NuxtLink to="/">
          <NuxtImg
            src="/img/logo.svg"
            class="mx-auto w-40" />
        </NuxtLink>
      </div>
      <div>
        {{ CONTACTS.spb.index }}
      </div>
    </div>
  </footer>
</template>
