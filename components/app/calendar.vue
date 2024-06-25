<script
  setup
  lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '~/lib/utils'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>

const props = withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <Calendar
    v-model="value"
    locale="ru"
    weekday-format="short"
    :class="cn('rounded-md border', props.class)" />
</template>

<style scoped>

</style>