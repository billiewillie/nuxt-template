<script
  setup
  lang="ts">
import { ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { cn } from '@/lib/utils'

const datesOfEvents = ref<Record<string, Array<string>>>({
  '11-01': [
    'Конференция «Инновационные технологии в диагностике и лечении патологии головы и шеи»',
    'Опухоли ЖКТ (РООП)'
  ],
  '11-02': [
    'Конференция «Инновационные технологии в диагностике и лечении патологии головы и шеи»'
  ]
})
const date = ref<Date>(new Date())
const value = ref<DateValue>(today(getLocalTimeZone()))

const props = withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})

const events = ref([
  {
    description: 'Название события',
    isComplete: false,
    dates: {
      start: '2024-11-01',
      end: '2024-11-03'
    },
    color: 'green'
  },
  {
    description: 'Название события 34223423  2524',
    isComplete: false,
    dates: {
      start: '2024-11-01',
      end: '2024-11-03'
    },
    color: 'green'
  }
])

const attributes = computed(() => [
  // Attributes for events
  ...events.value.map(todo => ({
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

function setNewDate() {
  console.log(value.value)
}
</script>

<template>
  <div :class="cn('calendar-wrapper min-h-[400px] flex flex-col', props.class)">
    <ClientOnly>
      <VDatePicker
        trim-weeks
        v-model="date"
        locale="ru"
        :attributes="attributes" />
    </ClientOnly>
  </div>
</template>

<style>
.vc-popover-content-wrapper .vc-popover-content {
  @apply !h-auto;
}
.calendar-wrapper > div:nth-child(1) {
  @apply flex flex-col h-full w-full flex-grow;
}

.vc-pane-layout {
  @apply w-full;
}

.vc-pane {
  @apply h-full ;
}

.calendar-wrapper > div > div:first-child {
  @apply flex flex-col h-[42px] top-0 items-center z-10;
}

.calendar-wrapper > div > div:first-child button {
  @apply opacity-100 bg-black text-white border-none;
}

.vc-title-wrapper {
  @apply text-white m-auto;
}

.vc-header .vc-title-wrapper {
  @apply flex z-10 h-[42px];
}

.vc-pane-container,
.vc-pane-layout,
.vc-weeks {
  @apply h-full flex flex-col flex-grow;
}

.vc-pane {
  @apply flex flex-col;
}

.vc-header {
  @apply flex items-center justify-between mt-0 bg-foreground h-[42px] rounded-t-lg;
}

.calendar-wrapper .vc-weekday {
  @apply font-bold text-black;
}

.vc-weekdays {
  @apply mb-2;
}

.calendar-wrapper .vc-weeks {
  @apply p-3 mt-0;
}

.calendar-wrapper .vc-weeks > .vc-week {
  @apply flex-grow;
}

.vc-week {
  @apply border-t border-l border-gray-400;
}

.vc-day {
  @apply border-r border-gray-400;
}

.vc-week:last-child {
  @apply border-b;
}

.vc-day-content {
  @apply h-full w-full !rounded-none justify-start items-start leading-none p-2;
}

.vc-highlight.vc-highlight-bg-solid {
  @apply h-full w-full !rounded-none bg-primary text-primary-foreground;
}

.vc-day-box-center-bottom {
  @apply justify-end;
}

.vc-day-layer {
  @apply right-2 bottom-2;
}

.vc-highlights, .vc-highlights .vc-day-layer {
  @apply right-0 bottom-0;
}

.vc-dot {
  @apply w-2 h-2;
}

.vc-header .vc-arrow:hover {
  @apply bg-foreground;
}

.vc-focus:focus-within {
  @apply shadow-none;
}

.vc-bordered {
  @apply rounded-md;
}
</style>