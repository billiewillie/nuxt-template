<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import type { Event } from '~/types'

const props = defineProps<{
  event: Event
  isPlaceholder?: boolean
}>()
</script>

<template>
  <div class="p-0 h-full">
    <Card class="h-full shadow-md hover:shadow-lg">
      <CardHeader class="p-0">
        <NuxtImg
          :src="event.preview_img"
          :alt="event.title"
          height="150"
          class="w-full h-[150px] object-cover object-top"
        />
      </CardHeader>
      <CardContent class="flex flex-col justify-center p-6">
        <div class="flex items-center mb-4">
          <Icon
            name="solar:calendar-linear"
            class="mr-2"
            width="18"
            height="18"
            color="#575757" />
          <time
            class="text-[#575757] leading-none text-sm"
            :datetime="event.date_start">
            {{ event.date_start }}
          </time>
          <time
            v-if="event.date_end && event.date_end !== event.date_start"
            class="text-[#575757] leading-none text-sm"
            :datetime="event.date_end">
             - {{ event.date_end }}
          </time>
        </div>
        <h3 class="text-[18px] font-semibold line-clamp-3">
          НПК "Новые медицинские технологии в оториноларингологии. Прошлое, настоящее и будущее".
        </h3>
        <Separator class="w-full my-4" />
        <p class="text-base mb-4">
          Крокус Экспо
          <br>
          Московская обл., Красногорск, Международная ул., 16
        </p>
        <Icon
          name="iconamoon:arrow-right-2-light"
          class="flex self-end"
          width="18"
          height="18"
          color="#575757" />
      </CardContent>
    </Card>
  </div>
</template>