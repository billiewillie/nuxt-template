<template>

  <section class="mb-16 pt-14">
    <div class="container">
      <h2 class="section-title">Производитель “БиоЛайн”</h2>
    </div>
  </section>

  <section>
    <div class="container grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4 mb-16">
      <NuxtLink
        v-for="i in 9"
        :key="i"
        to="/">
        <Card class="flex flex-col gap-4">
          <CardHeader>
            <NuxtImg
              src="/img/partners/leica-microsystems.svg"
              width="80"
              class="mb-8"
              alt="leica microsystems" />
            <h2 class="font-bold">Leica Biosystems</h2>
          </CardHeader>
          <CardContent>
            <p class="text-2xl">
              <b>Leica Biosystems</b> - разработчик решений и средств автоматизации рабочих процессов для проведения
              патогистологических исследований.
            </p>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </section>

</template>
<script setup>
</script>