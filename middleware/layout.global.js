export default defineNuxtRouteMiddleware((to, from) => {
  const curRouteColor = useState('routeColor')

  if (curRouteColor) {
    curRouteColor.value = to.meta.bgType
  } else {
    useState('routeColor', () => to.meta.bgType)
  }
})