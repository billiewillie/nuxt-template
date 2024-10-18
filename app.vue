<script
  setup
  lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translate(0, -10px);
}

.page-leave-to {
  transform: translate(0, 10px);
}
</style>
