<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarNext, type CalendarNextProps, useForwardProps } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-10 w-10 bg-transparent p-0 opacity-100 hover:opacity-100 hover:bg-transparent border-none',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRight class="h-4 w-4 text-white" />
    </slot>
  </CalendarNext>
</template>
