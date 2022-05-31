import { ReviewApiResponse } from '~/models/reviews'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const response = await getReviews()
  return JSON.stringify(response.result.reviews)
})

const getReviews = async ():Promise<ReviewApiResponse> => {
  const response:ReviewApiResponse = await $fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${runtimeConfig.googleBusinessId}&key=${runtimeConfig.googleKey}`, {
    method: 'GET'
  })
  return response
}