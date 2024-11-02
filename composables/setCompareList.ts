const compareList = useCookie(
  'compareList',
  {
    default: () => [],
    watch: true
  }
)

export function setCompareList(id: number): void {
  if (compareList.value.includes(id)) {
    compareList.value = compareList.value.filter((item: number) => item !== id)
  } else {
    compareList.value = [...compareList.value, id]
  }
}
