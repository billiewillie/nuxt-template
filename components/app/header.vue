<script
  setup
  lang="ts">
import CONTACTS from '~/data/contacts'
import { VisuallyHidden } from 'radix-vue'
import NAVIGATION from '~/data/navigation'
</script>

<template>
  <header class="flex flex-col shadow-lg">
    <div class="hidden xl:flex bg-background-dark py-4 text-foreground-dark">
      <div class="container flex justify-between text-[14px]">
        <div class="flex">
          <div class="text-primary">{{ CONTACTS.spb.email }}</div>
          <span class="flex mx-4">|</span>
          <div>{{ CONTACTS.spb.phone }}</div>
          <span class="flex mx-4">|</span>
          <div>связаться с нами</div>
        </div>
        <div class="hidden xl:flex">
          <div>Сравнение (0)</div>
          <span class="flex mx-4">|</span>
          <div>Избранное (0)</div>
          <span class="flex mx-4">|</span>
          <div>Поиск</div>
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
        <BaseNavigation ul-class="hidden xl:flex gap-4" />
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
              <ul>
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