import { drupal } from "@/lib/drupal"
import { getPathFromSlug, getDkApiVersion } from "@/lib/utils"

function getRedirectsUrl(path: string | string[]) {
  path = getPathFromSlug(path)

  const drupalBase = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const apiVersion = getDkApiVersion()

  const apiUrl = apiVersion === 1
    ? `${drupalBase}/decoupled_kit/redirect?path=${path}`
    : `${drupalBase}/jsonapi/decoupled_kit/redirect?current_path=${path}`

  return apiUrl
}

export async function getRedirect(path: string | string[]) {
  path = getPathFromSlug(path)

  const apiUrl = getRedirectsUrl(path)

  let data = null
  try {
    const res = await drupal.fetch(apiUrl)

    if (!res.ok) {
      console.error(`Empty fetched applications "${apiUrl}"`)
      return null
    }
    data = await res.json()
  }
  catch (error) {
    console.error(`Error getting API "${apiUrl}"`, error)
    return null
  }

  return data
}
