<script setup>
import NAVIGATION from '~/data/navigation'
import BRANCHES from '../../data/branches'
</script>

<template>
  <footer class="bg-background-dark py-12 text-foreground-dark">
    <div class="container grid grid-cols-1 lg:grid-cols-3 text-center gap-12">
      <BaseNavigation ul-class="grid gap-4 grid-cols-2 text-left" />
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
        {{ BRANCHES.spb.index }}, {{ BRANCHES.spb.country }}, {{ BRANCHES.spb.city }},
        <br>
        {{ BRANCHES.spb.address }}
        <br />
        {{ BRANCHES.spb.phone }}
        <br />
        {{ BRANCHES.spb.email }}
      </div>
    </div>
  </footer>
</template>
