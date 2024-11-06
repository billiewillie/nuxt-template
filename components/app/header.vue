<script
  setup
  lang="ts">
import { VisuallyHidden } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import NAVIGATION from '~/data/navigation'
import BRANCHES from '~/data/branches'
import { isRouteActive } from '~/utils/isRouteActive'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const route = useRoute()

const compareList = useCookie(
  'compareList',
  {
    default: () => [],
    watch: true
  }
)
const wishList = useCookie(
  'wishList',
  {
    default: () => [],
    watch: true
  }
)
const wishListExpandableMaterials = useCookie('wishListExpendableMaterials')

function getCompareListCount() {
  return compareList.value ? compareList.value.length : 0
}

function getWishListCount() {
  const wishListLength = wishList.value ? wishList.value.length : 0
  const wishListExpandableMaterialsLength = wishListExpandableMaterials.value
    ? wishListExpandableMaterials.value.length
    : 0
  return wishListLength + wishListExpandableMaterialsLength
}
</script>

<template>
  <header class="header flex flex-col shadow-lg z-10">
    <div class="hidden xl:flex xl:fixed xl:w-full xl:z-100 xl:top-0 xl:left-0 bg-background-dark py-4 text-foreground-dark">
      <div class="container flex justify-between text-[14px]">
        <div class="flex">
          <a
            :href="`mailto:${BRANCHES.spb.email}`"
            class="underline-offset-4 hover:underline">
            {{ BRANCHES.spb.email }}
          </a>
          <span class="flex mx-4">|</span>
          <div>{{ BRANCHES.spb.phone }}</div>
          <span class="flex mx-4">|</span>
          <BaseContactUsForm />
        </div>
        <div class="hidden xl:flex">
          <div class="flex items-center gap-2 cursor-pointer group">
            <Icon
              name="mynaui:chart-bar-one-solid"
              width="16"
              height="16"
              color="#3BA3A3" />
            <NuxtLink
              to="/comparison"
              class="group-hover:underline underline-offset-4">
              Сравнение <span class="tracking-widest">({{ getCompareListCount() }})</span>
            </NuxtLink>
          </div>
          <span class="flex mx-4">|</span>
          <div class="flex items-center gap-2 cursor-pointer group">
            <Icon
              name="lets-icons:star"
              width="16"
              height="16"
              color="#3BA3A3" />
            <NuxtLink
              to="/wishlist"
              class="group-hover:underline underline-offset-4">
              Избранное <span class="tracking-widest">({{ getWishListCount() }})</span>
            </NuxtLink>
          </div>
          <span class="flex mx-4">|</span>
          <LazyAppSearch
            side="bottom"
            trigger="search" />
        </div>
      </div>
    </div>
    <div class="py-2 xl:py-4 bg-background">
      <div class="container relative flex items-center gap-8 justify-between">
        <div class="basis-1/3 xl:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Icon
                name="icon-park-outline:application-menu"
                width="32"
                height="32"
                color="#3BA3A3"
              />
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
                    :key="item.id"
                  >
                    <SheetClose as-child>
                      <NuxtLink
                        :to="item.href"
                        :aria-label="item.title">
                        {{ item.title }}
                      </NuxtLink>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose as-child>
                      <NuxtLink
                        to="/comparison"
                        aria-label="comparison"
                      >
                        Сравнение <span class="tracking-widest">({{ getCompareListCount() }})</span>
                      </NuxtLink>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose as-child>
                      <NuxtLink
                        to="/wishlist"
                        aria-label="wishlist">
                        Избранное <span class="tracking-widest">({{ getWishListCount() }})</span>
                      </NuxtLink>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div class="basis-1/3 flex xl:basis-auto justify-center">
          <NuxtLink
            to="/"
            class="flex h-full w-[110px]">
            <NuxtImg
              src="/img/logo.svg"
              alt="logo"
              height="59"
              width="110" />
          </NuxtLink>
        </div>
        <nav class="hidden xl:flex -mr-4">
          <ul class="flex gap-2">
            <li
              v-for="item in NAVIGATION"
              :key="item.id">
              <DropdownMenu v-if="item.list">
                <DropdownMenuTrigger as-child>
                  <Button
                    :variant="isRouteActive(item.slug, route) ? 'default' : 'ghost'"
                    class="text-sm 2xl:text-base">
                    {{ item.title }} <ChevronDown class="w-4 h-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-96">
                  <DropdownMenuGroup>
                    <DropdownMenuSub
                      v-for="subItem in item.list"
                      :key="subItem.id">
                      <DropdownMenuSubTrigger>
                        <span>{{ subItem.title }}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem
                            v-for="subSubItem in subItem.list"
                            :key="subSubItem">
                            <NuxtLink :to="subSubItem.href">
                              {{ subSubItem.title}}
                            </NuxtLink>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                v-else
                :variant="isRouteActive(item.slug, route) ? 'default' : 'ghost'"
                class="text-sm 2xl:text-base"
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
        <div class="flex basis-1/3 justify-end xl:hidden">
          <LazyAppSearch side="left" />
        </div>
      </div>
    </div>
  </header>
</template>
