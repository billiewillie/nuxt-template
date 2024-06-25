<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'radix-vue'
import { ChevronLeft } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-10 w-10 bg-transparent p-0 opacity-100 hover:opacity-100 hover:bg-transparent border-none',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronLeft class="h-4 w-4 text-white" />
    </slot>
  </CalendarPrev>
</template>
