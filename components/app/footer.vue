<script
  setup
  lang="ts">
import BRANCHES from '~/data/branches'
</script>

<template>
  <footer class="bg-background-dark py-12 text-foreground-dark">
    <div class="container grid grid-cols-1 lg:grid-cols-3 text-center gap-12">
      <BaseNavigation
        ul-class="grid gap-4 grid-cols-2 text-left"
        link-class="hover:underline underline-offset-4" />
      <div>
        <NuxtLink to="/">
          <NuxtImg
            src="/img/logo.svg"
            alt="logo"
            height="86"
            width="161"
            class="lg:mx-auto w-40" />
        </NuxtLink>
      </div>
      <div class="flex flex-col items-start text-left">
        <h3 class="text-primary font-semibold mb-4">Центральный офис:</h3>
        <p class="leading-8 flex flex-col items-start text-left">
          {{ BRANCHES.spb.index }}, {{ BRANCHES.spb.country }}, {{ BRANCHES.spb.city }},
          {{ BRANCHES.spb.address }}
          <a
            :href="`tel:${BRANCHES.spb.phone}`"
            class="underline underline-offset-4">
            {{ BRANCHES.spb.phone }}
          </a>
          <a
            :href="`mailto:${BRANCHES.spb.email}`"
            class="underline underline-offset-4">
            {{ BRANCHES.spb.email }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
