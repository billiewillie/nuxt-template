<template>
  <section>
    <div class="container">
      <h1 class="~text-[20px]/[40px]">
        <span>new text</span>
      </h1>
    </div>
  </section>
  <section>
    <div class="container grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4">
      <div
        v-for="i in 7"
        :key="i"
        class="border-2 p-2 rounded">
        card {{ i }}
      </div>
    </div>
  </section>
</template>
