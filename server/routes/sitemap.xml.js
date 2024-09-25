export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'text/xml')
  const config = useRuntimeConfig(event)

  const data = await $fetch('https://telvla.ru/sitemap/generate')

  return data
})
