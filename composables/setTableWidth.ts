export function setColumnWidth(tableWrapperWidth: any) {
  const viewport = useViewport()

  if (viewport.matches('mobile', 'mobileWide', 'mobileMedium')) {
    return tableWrapperWidth / 2
  } else if (viewport.matches('tablet', 'tabletWide', 'tabletMedium')) {
    return tableWrapperWidth / 3
  }

  return tableWrapperWidth / 4
}

export function setTableWidth(activeCategory: any, tableWrapperWidth: number) {

  if (activeCategory.products && activeCategory.products.length) {
    if (activeCategory.products.length === 1) {
      return setWidthOfTableWithOneElement()
    } else if (activeCategory.products.length === 2) {
      return setWidthOfTableWithTwoElements()
    } else if (activeCategory.products.length === 3) {
      return setWidthOfTableWithThreeElements()
    } else {
      return `w-full`
    }
  }
}

function setWidthOfTableWithOneElement() {
  return 'table-one-element'
}

function setWidthOfTableWithTwoElements() {
  return 'table-two-elements'
}

function setWidthOfTableWithThreeElements() {
  return `table-three-elements`
}