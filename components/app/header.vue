<script
  setup
  lang="ts">
import { VisuallyHidden } from 'radix-vue'
import NAVIGATION from '~/data/navigation'
import BRANCHES from '~/data/branches'
import { isRouteActive } from '~/utils/isRouteActive'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="flex flex-col shadow-lg">
    <div class="hidden xl:flex bg-background-dark py-4 text-foreground-dark">
      <div class="container flex justify-between text-[14px]">
        <div class="flex">
          <div class="text-primary">{{ BRANCHES.spb.email }}</div>
          <span class="flex mx-4">|</span>
          <div>{{ BRANCHES.spb.phone }}</div>
          <span class="flex mx-4">|</span>
          <div>связаться с нами</div>
        </div>
        <div class="hidden xl:flex">
          <NuxtLink to="/comparison">Сравнение (0)</NuxtLink>
          <span class="flex mx-4">|</span>
          <NuxtLink to="/wishlist">Избранное (0)</NuxtLink>
          <span class="flex mx-4">|</span>
          <NuxtLink to="/search">Поиск</NuxtLink>
        </div>
      </div>
    </div>
    <div class="py-4">
      <div class="container relative flex items-center gap-8 justify-between">
        <NuxtLink
          to="/"
          class="flex h-full w-[110px]">
          <NuxtImg
            src="/img/logo.svg"
            alt="logo"
            height="59"
            width="110"
          />
        </NuxtLink>
        <nav class="-mr-4">
          <ul class="hidden xl:flex gap-2">
            <li
              v-for="item in NAVIGATION"
              :key="item.id">
              <Button
                :variant="isRouteActive(item.slug, route) ? 'default' : 'ghost'"
                as-child>
                <NuxtLink
                  :to="item.href"
                  :aria-label="item.title">
                  {{ item.title }}
                </NuxtLink>
              </Button>
            </li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger as-child>
            <Button
              variant="outline"
              class="xl:hidden">
              Open
            </Button>
          </SheetTrigger>
          <SheetContent class="xl:hidden">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </VisuallyHidden>
            </SheetHeader>
            <nav>
              <ul class="flex flex-col gap-4">
                <li
                  v-for="item in NAVIGATION"
                  :key="item.id">
                  <SheetClose as-child>
                    <NuxtLink
                      :to="item.href"
                      :aria-label="item.title">
                      {{ item.title }}
                    </NuxtLink>
                  </SheetClose>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>