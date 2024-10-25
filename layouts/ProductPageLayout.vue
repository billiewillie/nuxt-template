<script
  setup
  lang="ts">
import type { ProductPageApi } from '~/types'

const props = defineProps<{
  data: ProductPageApi
}>()
</script>

<template>

  <main class="flex-auto">

    <section class="mb-16 pt-8">
      <div class="container">
        <Breadcrumb class="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">Главная</NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <template
              v-for="(item, index) in props.data.bread_crumbs"
              :key="item.slug">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as-child>
                  <NuxtLink :to="item.url">
                    {{ item.title }}
                  </NuxtLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </template>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{{ props.data.title }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">{{ props.data.title }}</h1>
      </div>
    </section>

<!--    <section class="mb-16">-->
<!--      <div class="container">-->
<!--        <BaseProductOrderForm />-->
<!--      </div>-->
<!--    </section>-->

  </main>
</template>