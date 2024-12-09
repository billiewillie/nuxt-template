<script
  setup
  lang="ts">
import { ref } from 'vue'
import {
  type DateValue,
  getLocalTimeZone,
  today
} from '@internationalized/date'
import { cn } from '@/lib/utils'

const date = ref<Date>(new Date())

defineProps<{
  attributes?: {
    dates: {
      start: string,
      end: string
    },
    dot: {
      color: 'green',
      class?: string | undefined
    },
    popover: {
      label: string
    }
  }[]
}>()
</script>

<template>
  <div class="calendar-wrapper min-h-[400px] h-full flex flex-col shadow-md border">
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

.vc-popover-content-wrapper .vc-popover-content > div {
  @apply max-w-[360px];
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

.calendar-wrapper .vc-header button {
  @apply opacity-100 bg-background-dark text-white border-none;
}

.vc-title-wrapper {
  @apply text-white m-auto;
}

.vc-header .vc-title-wrapper {
  @apply flex z-10 h-[42px];
}

.vc-container {
  @apply border-none;
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
  @apply flex items-center justify-between mt-0 bg-background-dark h-[42px] rounded-t-lg;
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
  @apply h-1.5 w-1.5;
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