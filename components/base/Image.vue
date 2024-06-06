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
    default: "160"
  },
  height: {
    type: String,
    default: "90"
  }
})

const isLoaded = ref(false)
</script>

<template>
  <div :class="cn('relative', props.aspectRatio)">
    <div :class="cn('absolute left-0 top-0 w-full h-full transition-opacity duration-500', { 'opacity-0': isLoaded }, props.placeholder)"></div>
    <NuxtPicture
      :src="props.src"
      class="w-full h-full object-cover object-top"
      :img-attrs="{class:'w-full h-full object-cover object-top'}"
      quality="90"
      :width="props.width"
      :height="props.height"
      :alt="props.alt"
      @load="isLoaded = true"
    />
  </div>
</template>

<style scoped>

</style>