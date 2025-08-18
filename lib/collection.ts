import { getView, getResourceCollection } from "next-drupal"
import { getPathFromSlug, getJson } from "@/lib/utils"

export async function getCollection(type: string, slug: string | string[], params?: any) {
  const path = getPathFromSlug(slug)

  switch (type) {
    case 'view':
      return await getView(path, params)
    case 'jsonapi':
      return await getResourceCollection(path, params)
    case 'json':
      return await getJson(path)
    default:
      return null
  }
}

