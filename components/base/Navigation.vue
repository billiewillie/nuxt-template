<script
  setup
  lang="ts">

import NAVIGATION from '~/data/navigation'

defineProps({
  ulClass: {
    type: String,
  }
})
</script>

<template>
  <nav>
    <ul :class="ulClass">
      <li
        v-for="item in NAVIGATION"
        :key="item.id">
        <NuxtLink :to="item.href">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

</style>