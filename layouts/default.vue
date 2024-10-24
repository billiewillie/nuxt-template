<template>
  <div class="flex flex-col min-h-screen justify-between">
    <AppHeader />
    <div class="flex-auto min-h-screen bg-background-main">
      <slot />
    </div>
    <LazyAppFooter />
  </div>
</template>