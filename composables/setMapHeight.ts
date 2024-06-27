type Viewports = '300px' | '400px' | '500px'

export function setMapHeight(): Viewports {
  const viewport = useViewport()

  if (viewport.matches('mobile', 'mobileWide', 'mobileMedium')) {
    return '300px'
  } else if (viewport.matches('tablet', 'tabletWide', 'tabletMedium')) {
    return '400px'
  }

  return '500px'
}