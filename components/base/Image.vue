<script
  setup
  lang="ts">
import { ref } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps({
  src: {
    type: String,
    default: '/img/news/prev.jpg'
  },
  alt: {
    type: String,
    default: 'alt'
  },
  aspectRatio: {
    type: String,
    default: 'aspect-[16/9]'
  },
  placeholder: {
    type: String,
    default: 'bg-[#e4e7ef]'
  },
  width: {
    type: String,
    default: '160'
  },
  height: {
    type: String,
    default: '90'
  },
  loading: {
    type: String,
    default: 'eager'
  }
})

let isLoaded = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  })
})
</script>

<template>
  <div :class="cn('relative', props.aspectRatio)">
    <div :class="cn({ 'opacity-0': isLoaded },'absolute left-0 top-0 w-full h-full transition-opacity duration-500', props.placeholder)"></div>
    <NuxtPicture
      :src="props.src"
      class="w-full h-full object-cover object-top"
      :img-attrs="{class:'w-full h-full object-cover object-top'}"
      quality="90"
      :width="props.width"
      :height="props.height"
      :alt="props.alt"
      :loading="props.loading"
    />
  </div>
</template>