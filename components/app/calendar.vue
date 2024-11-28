<script
  setup
  lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { CalendarNext, CalendarPrev, CalendarRoot } from 'radix-vue'
import { cn } from '~/lib/utils'

const value = ref<DateValue>(today(getLocalTimeZone()))

const props = withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})

function setNewDate() {
  console.log(value.value)
}
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid }"
    locale="ru"
    :class="cn('rounded-md border shadow-md', props.class)"
    fixed-weeks>
    <CalendarHeader class="flex items-center justify-between bg-background-dark pt-0">
      <CalendarPrev class="inline-flex items-center cursor-pointer text-white justify-center rounded-[9px] bg-transparent w-8 h-8 active:scale-98 active:transition-all focus:shadow-none">
        <ChevronLeft class="w-4 h-4" />
      </CalendarPrev>
      <CalendarHeading class="text-[15px] text-white font-medium" />
      <CalendarNext class="inline-flex items-center cursor-pointer text-white justify-center rounded-[9px] bg-transparent w-8 h-8 active:scale-98 active:transition-all focus:shadow-none">
        <ChevronRight class="w-4 h-4" />
      </CalendarNext>
    </CalendarHeader>
    <div class="flex flex-col space-y-4 p-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="w-full border-collapse select-none space-y-1">
        <CalendarGridHead>
          <CalendarGridRow class="mb-1 grid w-full grid-cols-7">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="text-xs text-black font-bold">
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid border-l border-t border-gray-300">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="grid grid-cols-7 border-b border-gray-300">
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="relative text-sm border-r border-gray-300 h-14">
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="relative w-full h-full flex flex-col whitespace-nowrap text-sm font-normal text-black outline-none data-[disabled]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9">
                <div class="text-left w-full basis-1/2 pt-2 pl-2">
                  {{ weekDate.day }}
                </div>
                <div class="hidden xl:flex items-end w-full justify-end basis-1/2 pb-2 pr-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <div class="w-3 h-3 border-2 border-white rounded-full bg-primary hover:bg-white hover:border-primary transition-all"></div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Title</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CalendarCellTrigger>
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>