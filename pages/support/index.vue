<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
</script>

<template>
  <main>

    <Head>
      <Title>Технический сервис | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
        content="Технический сервис | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Технический сервис</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="flex justify-between items-center">
          <h1 class="section-title">Технический сервис</h1>
          <div class="flex gap-4">
            <Button class="rounded-full bg-background-dark border-2 shadow-md border-background-dark hover:bg-transparent hover:text-background-dark">
              технический сервис
            </Button>
            <Button class="rounded-full bg-background-dark border-2 shadow-md border-background-dark hover:bg-transparent hover:text-background-dark">
              методическая поддержка
            </Button>
            <Button class="rounded-full bg-background-dark border-2 shadow-md border-background-dark hover:bg-transparent hover:text-background-dark">
              обучение
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex justify-between gap-4">
        <div class="basis-1/2 flex flex-col gap-4">
          <p>
            Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра, чтобы
            качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси, Казахстана
            и Узбекистана.
          </p>
          <p>
            Наши инженеры повышают уровень своей квалификации, а современные рабочие инструменты и собственный склад
            запасных частей позволяют быстро реагировать на заявки, сводя к минимуму простои оборудования.
          </p>
        </div>
        <div class="basis-1/2">
          <NuxtImg
            src="/img/support-page/tech-service.webp"
            alt="tech-service"
            width="820"
            height="590" />
        </div>
      </div>
    </section>

    <section class="mb-12 xl:mb-16">
      <div class="container flex justify-between gap-4">
        <div class="basis-1/3 flex flex-col gap-4">
          <p>
            Группа компаний БиоЛайн уделяет особое внимание развитию и оснащению собственного сервисного центра, чтобы
            качественно и оперативно обслуживать многочисленные объекты на всей территории России, Беларуси, Казахстана
            и Узбекистана.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>