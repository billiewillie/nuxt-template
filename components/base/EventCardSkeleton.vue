<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
</script>

<template>
  <div class="p-0 h-full">
    <Card class="h-full shadow-md hover:shadow-lg">
      <CardHeader class="p-0">
        <Skeleton class="h-[150px] w-full" />
      </CardHeader>
      <CardContent class="flex flex-col justify-center p-6">
        <div class="flex items-center mb-4">
          <Icon
            name="solar:calendar-linear"
            class="mr-2"
            width="18"
            height="18"
            color="#575757" />
          <Skeleton class="h-4 w-20" />
        </div>
        <div class="space-y-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
        </div>
        <Separator class="w-full my-4" />
        <div class="space-y-2 mb-2">
          <Skeleton class="h-3 w-full" />
          <Skeleton class="h-3 w-full" />
          <Skeleton class="h-3 w-full" />
        </div>
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