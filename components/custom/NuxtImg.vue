<script
  lang="ts"
  setup>
import type { NuxtImgProps } from '@base/modules/image/types/nuxt-image'

/*
 * Small wrapper over NuxtImg
 * Supports fallback to default img tag when nuxt-img was unable to optimize the image.
 * This could happen if an image file is corrupted (e.g. wrongly saved by an image editing software)
 * However, providing a fallback is always a good practise
 */

interface Emits {
  (e: 'error', data: any): void

  (e: 'load', data: any): void
}

interface Props extends /* @vue-ignore */ NuxtImgProps {
  src?: string
  fallback?: string
}

const emit = defineEmits<Emits>()

const props = defineProps<Props>()

const attrs = useAttrs()

const propsWithoutFallbackAndSrc = computed(() => {
  const { fallback, src, ...restProps } = props

  return { ...attrs, ...restProps }
})

const hasError = ref(false)

const handleError = (data: any) => {
  emit('error', data)
  hasError.value = true
}
</script>

<template>
  <nuxt-img
    v-if="!hasError || !fallback"
    v-bind="propsWithoutFallbackAndSrc"
    :src="src"
    @error="handleError"
    @load="emit('load', $event)" />
  <img
    v-else
    v-bind="propsWithoutFallbackAndSrc"
    :src="fallback"
    alt="" />
</template>