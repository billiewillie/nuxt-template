<script
  setup
  lang="ts">
import { ref } from 'vue'
import type { Events } from '~/types'
import { useId, useRuntimeConfig } from '#app'
import URLs from '~/data/urls'
import { ChevronDown } from 'lucide-vue-next'

interface CategoryType {
  id: number,
  title: string,
  isChecked: boolean
}

interface Event {
  id: number,
  title: string,
  url: string,
  annotation: string,
  preview_img: string,
  description: string,
  isComplete: boolean,
  date_end: string,
  date_start: string,
  type_id: number,
  categories_id: Array<{ id: number; }>
  dates: {
    start: string,
    end: string
  },
  color: 'green'
}

const { API_ENDPOINT }: { API_ENDPOINT: string } = useRuntimeConfig().public

const dropdownMenuId = useId()
const year = ref<number | null>(new Date().getFullYear())
const month = ref<number | null>(new Date().getMonth() + 1)
const categories = ref<CategoryType[] | null>(null)
const activeEventType = ref<string | null>(null)
const activeEvents = ref<Event[]>([])
const typeIds = ref<number[]>([])
const events = ref<Events | null>(null)

const attributes = computed(() => [
  ...activeEvents.value.map(todo => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      ...(todo.isComplete && { class: 'opacity-75' })
    },
    popover: {
      label: todo.description
    }
  }))
])

async function getData() {
  events.value = await $fetch(`${API_ENDPOINT}${URLs.events}/${year.value}/${month.value}`) satisfies Events
}

async function setCategoriesAndTypes() {
  if (events.value) {
    categories.value = events.value.categories.map((category) => {
      return {
        id: category.id,
        title: category.title,
        isChecked: false
      }
    })

    typeIds.value = events.value.type_events.map((type) => {
      return type.id
    })
  }
}

async function pageInit() {
  await getData()
  await setCategoriesAndTypes()
  setActiveEvents()

  console.log(events.value?.type_events)
}

pageInit()

function setActiveEvents() {
  let filteredEvents

  if (categories.value && events.value?.all_events_month) {
    if (categories.value.length > 0 && categories.value.some((category) => category.isChecked)) {
      filteredEvents = events.value.all_events_month.filter(event => {
        return event.categories_id.some(item => {
          return categories.value?.find(category => category.id === item.id)?.isChecked
        })
      })
    } else {
      filteredEvents = events.value.all_events_month
    }

    if (activeEventType.value !== null) {
      const id = events.value?.type_events.find((type) => {
        return type.title === activeEventType.value
      })?.id
      filteredEvents = filteredEvents?.filter(({ type_id }) => {
        return type_id === id
      })
    }

    if (filteredEvents) {
      activeEvents.value = filteredEvents.map((event) => {
        return {
          id: event.id,
          description: event.title,
          annotation: event.annotation,
          preview_img: event.preview_img,
          categories_id: event.categories_id,
          type_id: event.type_id,
          title: event.title,
          url: event.url,
          isComplete: false,
          dates: {
            start: event.date_start,
            end: event.date_end
          },
          color: 'green',
          date_start: event.date_start,
          date_end: event.date_end
        }
      })
    }
  }
}

function dropFilter() {
  if (events.value?.categories) {
    categories.value = events.value.categories.map((category) => {
      return {
        id: category.id,
        title: category.title,
        isChecked: false
      }
    })
  }
  activeEventType.value = null
  setActiveEvents()
}

async function changeDate(newMonth: number, newYear: number) {
  let filteredEvents
  let newEvents

  events.value = await $fetch(`${API_ENDPOINT}${URLs.events}/${newYear}/${newMonth}`) satisfies Events

  if (categories.value && events.value?.all_events_month) {
    if (categories.value.length > 0 && categories.value.some((category) => category.isChecked)) {
      filteredEvents = events.value.all_events_month.filter(event => {
        return event.categories_id.some(item => {
          return categories.value?.find(category => category.id === item.id)?.isChecked
        })
      })
    } else {
      filteredEvents = events.value.all_events_month
    }

    if (activeEventType.value !== null) {
      const id = events.value?.type_events.find((type) => {
        return type.title === activeEventType.value
      })?.id
      filteredEvents = filteredEvents?.filter(({ type_id }) => {
        return type_id === id
      })
    }

    if (filteredEvents) {
      newEvents = filteredEvents.map((event) => {
        return {
          id: event.id,
          description: event.title,
          annotation: event.annotation,
          preview_img: event.preview_img,
          categories_id: event.categories_id,
          type_id: event.type_id,
          title: event.title,
          url: event.url,
          isComplete: false,
          dates: {
            start: event.date_start,
            end: event.date_end
          },
          color: 'green',
          date_start: event.date_start,
          date_end: event.date_end
        }
      })

    }
    // activeEvents.value = newEvents
    console.log(activeEvents)

  }

  activeEvents.value.push({
    id: 12,
    categories_id: [
      {
        id: 8
      },
      {
        id: 7
      }
    ],
    type_id: 2,
    annotation: 'Конференция «Инновационные технологии в диагностике и лечении патологии головы и шеи»',
    color: 'green',
    date_end: '2024-01-02',
    date_start: '2024-01-01',
    dates: { start: '2024-01-01', end: '2024-01-02' },
    description: 'Конференция «Инновационные технологии в диагностике и лечении патологии головы и шеи»',
    isComplete: false,
    preview_img: 'https://telvla.ru/upload/image/events/previews/test.webp',
    title: 'Конференция «Инновационные технологии в диагностике и лечении патологии головы и шеи»',
    url: '/events/test8'
  })
}
</script>

<template>
  <main>

    <Head>
      <Title>События | Группа компаний ООО «БиоЛайн»</Title>
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
        content="Календарь | Группа компаний ООО «БиоЛайн»" />
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
        content="Календарь | Группа компаний ООО «БиоЛайн»" />
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
              <BreadcrumbPage>Календарь мероприятий</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="section-title">Календарь мероприятий</h1>
      </div>
    </section>

    <section class="mb-4">
      <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 xl:gap-y-0 gap-x-4">

        <div class="xl:col-span-2 pt-0 bg-background relative">
          <AppCalendar
            :attributes="attributes"
            @change-date="changeDate" />
        </div>

        <div class="flex flex-col border rounded-lg justify-between p-4 bg-background shadow-md gap-4">
          <div class="flex flex-col gap-4 h-full">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  variant="outline"
                  :id="dropdownMenuId"
                  class="w-full font-normal justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 [&>span]:line-clamp-1 text-left hover:bg-transparent">
                  Категории 
                  <ChevronDown class="w-4 h-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-[298px]">
                <DropdownMenuLabel>Можно выбрать несколько</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  v-for="category in events?.categories"
                  @click="setActiveEvents()"
                  v-model:checked="categories.find((item: CategoryType) => item.id === category.id)!.isChecked"
                  :key="category.id"
                  :value="category.title">
                  {{ category.title }}
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Select
              v-model="activeEventType"
              @update:model-value="activeEventType = $event; setActiveEvents()">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Тип мероприятия" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="type in events?.type_events"
                    :key="type.id"
                    :value="type.title">
                    {{ type.title }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              @click="dropFilter"
              class="mt-auto">
              Сбросить фильтры
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!--    <section class="mb-16">-->
    <!--      <div class="container">-->
    <!--        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">-->

    <!--          <template v-if="pending">-->
    <!--            <EventCardSkeleton-->
    <!--              v-for="index in 3"-->
    <!--              :key="index" />-->
    <!--          </template>-->

    <!--          <template v-if="events.all_events_month && events.all_events_month.length">-->
    <!--            <BaseEventCard-->
    <!--              v-for="event in activeEvents"-->
    <!--              :key="event.id"-->
    <!--              :event="event" />-->
    <!--          </template>-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

  </main>
</template>