<script
  setup
  lang="ts">

import NAVIGATION from '~/data/navigation'

defineProps({
  ulClass: {
    type: String
  }
})
</script>

<template>
  <nav>
    <ul :class="ulClass">
      <li
        v-for="item in NAVIGATION"
        :key="item.id">
        <NuxtLink
          :to="item.href"
          :aria-label="item.title">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

</template>