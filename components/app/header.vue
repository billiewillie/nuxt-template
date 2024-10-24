<script
  setup
  lang="ts">
import { VisuallyHidden } from 'radix-vue'
import NAVIGATION from '~/data/navigation'
import BRANCHES from '~/data/branches'
import { isRouteActive } from '~/utils/isRouteActive'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'

const isAllowedToBeFixed = ref<boolean>(false)
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

const route = useRoute()
</script>

<template>
  <header class="header flex flex-col shadow-lg z-10">
    <div class="hidden xl:flex bg-background-dark py-4 text-foreground-dark">
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
          <a
            class="hover:underline underline-offset-4"
            :href="`mailto:${BRANCHES.spb.email}`">
            связаться с нами
          </a>
        </div>
        <div class="hidden xl:flex">
          <div class="flex items-center gap-2 cursor-pointer group">
            <Icon
              name="mynaui:chart-bar-one-solid"
              width="18"
              height="18"
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
              width="18"
              height="18"
              color="#3BA3A3"
            />
            <NuxtLink
              to="/wishlist"
              class="group-hover:underline underline-offset-4">
              Избранное <span class="tracking-widest">({{ getWishListCount() }})</span>
            </NuxtLink>
          </div>
          <span class="flex mx-4">|</span>
          <LazyAppSearch
            side="bottom"
            trigger="search"
          />
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
                        :aria-label="item.title"
                      >
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
                        Сравнение (0)
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
            class="flex h-full w-[110px]"
          >
            <NuxtImg
              src="/img/logo.svg"
              alt="logo"
              height="59"
              width="110"
            />
          </NuxtLink>
        </div>
        <nav class="hidden xl:flex -mr-4">
          <ul class="flex gap-2">
            <li
              v-for="item in NAVIGATION"
              :key="item.id"
            >
              <Button
                :variant="isRouteActive(item.slug, route) ? 'default' : 'ghost'"
                as-child
              >
                <NuxtLink
                  :to="item.href"
                  :aria-label="item.title"
                >
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
