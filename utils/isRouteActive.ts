export function isRouteActive(slug: string, route: any): boolean {
  let isActive = false
  const activePage = route.fullPath.split('/')[1]

  if (activePage === slug) {
    isActive = true
  }

  return isActive
}