<template>
  <div class="flex flex-col min-h-screen justify-between">
    <AppHeader />
    <div class="flex-auto">
      <slot />
    </div>
    <LazyAppFooter />
  </div>
</template>