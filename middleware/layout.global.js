export default defineNuxtRouteMiddleware((to, from) => {
  const curRouteColor = useState('routeColor')
  const curRouteRails = useState('routeRails')

  if (curRouteColor) {
    curRouteColor.value = to.meta.background
  } else {
    useState('routeColor', () => to.meta.background)
  }

  if (curRouteColor) {
    curRouteRails.value = to.meta.rails
  } else {
    useState('curRouteRails', () => to.meta.rails)
  }
})