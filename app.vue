<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translate(0, -10px);
}

.page-leave-to {
  transform: translate(0, 10px);
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>

