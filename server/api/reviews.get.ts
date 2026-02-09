import { ReviewApiResponse } from '~/models/reviews'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  try {
    const response = await getReviews()
    return JSON.stringify(response.result.reviews)
  } catch(error) {
    console.log(error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch reviews' })
  }
})

const getReviews = async ():Promise<ReviewApiResponse> => {
  const response = await $fetch<ReviewApiResponse>(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${runtimeConfig.googleBusinessId}&key=${runtimeConfig.googleKey}`)
  return response
}
