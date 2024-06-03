<script
  setup
  lang="ts">
import NAVIGATION from '~/data/navigation'
</script>

<template>
  <header class="flex flex-col shadow-lg">
    <div class="bg-background-dark py-4 text-foreground-dark">
      <div class="container">
        <p>header</p>
      </div>
    </div>
    <div class="py-8">
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
    </div>
  </header>
</template>