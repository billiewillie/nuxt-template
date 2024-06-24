<template>

  <Head>
    <Title>Производители | Группа компаний ООО «БиоЛайн»</Title>
    <Meta
      name="description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="og:image"
      content="/img/og-logo.jpg" />
    <Meta
      name="twitter:image"
      content="/img/og-logo.jpg" />
    <Meta
      name="og:title"
      content="Производители | Группа компаний ООО «БиоЛайн»" />
    <Meta
      name="og:description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="og:site_name"
      content="bioline.vercel.app" />
    <Meta
      name="og:url"
      content="https://bioline.vercel.app/contacts" />
    <Meta
      name="og:image:width"
      content="1200" />
    <Meta
      name="og:image:height"
      content="630" />
    <Meta
      name="og:type"
      content="article" />
    <Meta
      name="og:locale"
      content="ru_RU" />
    <Meta
      name="twitter:title"
      content="Производители | Группа компаний ООО «БиоЛайн»" />
    <Meta
      name="twitter:description"
      content="Группа компаний ООО «БиоЛайн» - один из ведущих поставщиков продукции для лабораторий и учреждений научного и медицинского профиля." />
    <Meta
      name="twitter:site"
      content="bioline.vercel.app" />
    <Meta
      name="twitter:card"
      content="summary_large_image" />
  </Head>

  <section class="mb-16 pt-14">
    <div class="container">
      <h2 class="section-title">Производитель “БиоЛайн”</h2>
    </div>
  </section>

  <section>
    <div class="container grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4 mb-16">
      <NuxtLink
        v-for="i in 9"
        :key="i"
        to="/">
        <Card class="flex flex-col gap-4">
          <CardHeader>
            <NuxtImg
              src="/img/partners/leica-microsystems.svg"
              width="80"
              height="80"
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