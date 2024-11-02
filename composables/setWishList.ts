const wishList = useCookie(
  'wishList',
  {
    default: () => [],
    watch: true
  }
)

export function setWishList(id: number) {
  if (wishList.value.includes(id)) {
    wishList.value = wishList.value.filter((item: number) => item !== id)
  } else {
    wishList.value = [...wishList.value, id]
  }
}