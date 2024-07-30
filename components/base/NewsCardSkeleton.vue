<script
  setup
  lang="ts">
import { Card, CardContent } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
</script>

<template>
  <div class="p-0 h-full">
    <Card class="flex flex-col gap-6 pb-6 shadow-md hover:shadow-lg">
      <CardHeader class="p-0">
        <Skeleton class="h-[226px] w-full" />
      </CardHeader>
      <CardContent class="flex flex-col gap-4 p-0 px-6 flex-auto">
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
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0 px-6">
        <div class="flex gap-2 items-center">
          <Icon
            name="solar:calendar-linear"
            class="mr-2"
            width="18"
            height="18"
            color="#575757" />
          <Skeleton class="h-4 w-20" />
        </div>
        <Icon
          name="iconamoon:arrow-right-2-light"
          width="18"
          height="18"
          style="color: #575757" />
      </CardFooter>
    </Card>
  </div>
</template>