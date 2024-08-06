<script
  setup
  lang="ts">
import { VisuallyHidden } from 'radix-vue'
import NAVIGATION from '~/data/navigation'
import BRANCHES from '~/data/branches'
import { isRouteActive } from '~/utils/isRouteActive'
import { useRoute } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const route = useRoute()
</script>

<template>
  <header class="flex flex-col shadow-lg z-10">
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
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" class="p-0 h-auto">
                Поиск
              </Button>
            </SheetTrigger>
            <SheetContent :side="'bottom'" class="h-full">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label
                    for="name"
                    class="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label
                    for="username"
                    class="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    class="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose as-child>
                  <Button type="submit">
                    Save changes
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
    <div class="py-4 bg-background">
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