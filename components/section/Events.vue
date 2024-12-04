<script
  setup
  lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import EventCardSkeleton from '~/components/base/EventCardSkeleton.vue'
import type { IndexPageApi } from '~/types'

const { data } = defineProps<{
  data: IndexPageApi
}>()

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

const activeEvents = ref<Event[]>([])

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

function setActiveEvents() {
  activeEvents.value = data.calendar.all_events_month.map((event) => {
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

  console.log(activeEvents.value)
}

setActiveEvents()
</script>

<template>
  <section class="mb-24 xl:mb-32">
    <div class="container mb-16">
      <h2 class="section-title">Календарь событий</h2>
    </div>

    <div class="container relative flex flex-col md:flex-row gap-4 calendar-backdrop">
      <div class="md:w-1/2 relative z-[1] bg-background">
        <AppCalendar :attributes="attributes" />
      </div>
      <Carousel
        class="h-[inherit] md:w-1/2 relative"
        :opts="{ align: 'start' }">
        <CarouselContent
          :is-visible="true"
          :is-height-full="true"
          class="h-full">
          <template v-if="data?.calendar?.list.length">
            <CarouselItem
              v-for="event in data?.calendar.list"
              :key="event.id"
              class="lg:basis-1/2 h-full">
              <BaseEventCard :event="event" />
            </CarouselItem>
          </template>

          <template v-else>
            <CarouselItem
              v-for="(_, index) in 3"
              :key="index"
              class="lg:basis-1/2 h-full">
              <EventCardSkeleton />
            </CarouselItem>
          </template>
        </CarouselContent>
        <div class="hidden md:flex absolute right-0 -top-[108px] xl:-top-[120px] gap-4 items-center">
          <div class="flex gap-4">
            <CarouselPrevious class="relative left-0 top-0 translate-y-0" />
            <CarouselNext class="relative left-0 top-0 translate-y-0" />
          </div>
          <Button as-child>
            <NuxtLink
              to="/events"
              class="flex gap-2 items-center"
            >
              Все события
              <ChevronRight class="w-4 h-4 -mr-[6px]" />
            </NuxtLink>
          </Button>
        </div>
      </Carousel>
    </div>
  </section>
</template>

<style>
.calendar-backdrop::before {
  display: none;
  content: '';
  position: absolute;
  top: -4%;
  left: -50%;
  width: calc(100% - 8px);
  height: 108%;
  background: hsl(225, 67%, 99%);
  z-index: 1;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 768px) {
  .calendar-backdrop::before {
    display: block;
  }
}
</style>