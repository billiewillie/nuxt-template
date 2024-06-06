<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarGridRow, type CalendarGridRowProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<CalendarGridRowProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow :class="cn('grid grid-cols-7', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarGridRow>
</template>
