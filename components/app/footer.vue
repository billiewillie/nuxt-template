<script setup>
import NAVIGATION from '~/data/navigation.js'
</script>

<template>
  <footer class="bg-background-dark py-20 text-foreground-dark">
    <div class="container">
      <nav>
        <ul class="flex gap-4">
          <li
            v-for="item in NAVIGATION"
            :key="item.title"
            class="text-sm">
            {{ item.title }}
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
