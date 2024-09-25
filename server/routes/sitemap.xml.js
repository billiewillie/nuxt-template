export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'text/xml')
  const { API_ENDPOINT } = useRuntimeConfig().public

  const data = await $fetch(`${API_ENDPOINT}/sitemap/generate`)

  return data
})
