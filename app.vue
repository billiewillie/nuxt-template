<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from {
  opacity: 0;
  transform: translate(0, -10px);
}
.page-leave-to {
  opacity: 0;
  transform: translate(0, 10px);
}
</style>

