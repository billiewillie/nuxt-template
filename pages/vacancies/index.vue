<script
  setup
  lang="ts">
import { useRuntimeConfig } from '#app'
import URLs from '~/data/urls'

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const { data }: { data: Ref<any> } = await useFetch(`${API_ENDPOINT}${URLs.vacancies}`)
</script>

<template>
  <main>

    <Head>
      <Title>Вакансии | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Вакансии | Группа компаний ООО «БиоЛайн»" />
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
        content="Вакансии | Группа компаний ООО «БиоЛайн»" />
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

    <section class="mb-12 xl:mb-16 pt-8">
      <div class="container">
        <Breadcrumb class="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Вакансии</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">Вакансии</h1>
      </div>
    </section>

    <section class="mb-12 xl:mb-16 group">
      <div
        class="container vacancies-page flex flex-col gap-4"
        v-html="data.content">
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex flex-col gap-4">
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=2&title=Санкт-Петербург"
            async />
        </ClientOnly>
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=1&title=Москва"
            async />
        </ClientOnly>
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=4&title=Новосибирск"
            async />
        </ClientOnly>
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=3&title=Екатеринбург"
            async />
        </ClientOnly>
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=1530&title=Ростов-на-дону"
            async />
        </ClientOnly>
        <ClientOnly>
          <component
            :is="'script'"
            class="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=191518&links_color=009999&border_color=FFFFFF&area=1975&title=Хабаровск"
            async />
        </ClientOnly>
      </div>
    </section>

  </main>
</template>

<style>
.vacancies-page ul {
  padding-left: 2rem;
  list-style: disc;
  margin-top: -8px;
}
</style>