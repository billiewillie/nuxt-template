<script
  setup
  lang="ts">
import type { Article } from '~/types'

const props = defineProps<{
  article: Article
  imageLoading: 'eager' | 'lazy'
}>()
</script>

<template>
  <NuxtLink
    :to="article.url"
    class="flex h-full">
    <Card class="flex flex-col gap-6 pb-6 shadow-md hover:shadow-lg">
      <CardHeader class="p-0">
        <NuxtPicture
          :src="article.preview_img"
          :alt="article.title"
          class="aspect-[7/5]"
          :img-attrs="{class:'w-full h-full object-cover object-center'}"
          width="350"
          height="250"
          :loading="imageLoading"
        />
      </CardHeader>
      <CardContent class="flex flex-col gap-4 p-0 px-6 flex-auto">
        <CardTitle class="text-xl">{{ article.title }}</CardTitle>
        <Separator />
        <CardDescription class="text-base text-foreground">
          {{ article.annotation }}
        </CardDescription>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-0 px-6">
        <div class="flex gap-4 items-center">
          <Icon
            name="solar:calendar-linear"
            width="18"
            height="18"
            color="#575757" />
          <time
            class="text-[#575757]"
            :datetime="article.created_at">
            {{ article.created_at }}
          </time>
        </div>
        <Icon
          name="iconamoon:arrow-right-2-light"
          width="18"
          height="18"
          style="color: #575757" />
      </CardFooter>
    </Card>
  </NuxtLink>
</template>