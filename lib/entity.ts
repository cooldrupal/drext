import { drupal } from "@/lib/drupal"
import { getPathFromSlug } from "@/lib/utils"
import { entitiesMap } from "@/params/entities"
import { getResource } from "next-drupal"

export async function getEntity(type: string, uuid: string, params?: any) {
  return await getResource(type, uuid, { params })
}

export async function getEntityByPath(slug: string | string[], params?: any) {
  const path = getPathFromSlug(slug)
  let entity
  try {
    entity = await getEntityResource(path, params)
  } catch (error) {
    console.error(error)
    return null
  }

  entity.label = entity.title ?? entity.name
  return entity
}

async function getEntityResource(slug: string | string[], entity_params?: any) {
  const path = getPathFromSlug(slug)

  const translatedPath = await drupal.translatePath(path)
  if (!translatedPath) {
    throw new Error("Resource not found", { cause: "NotFound" })
  }

  const type = translatedPath.jsonapi?.resourceName!
  const uuid = translatedPath.entity.uuid

  const params = entity_params ?? entitiesMap(type)?.params ?? {}
  const resource = await getResource(type, uuid, {
    params,
  })

  if (!resource) {
    throw new Error(
      `Failed to fetch resource: ${translatedPath?.jsonapi?.individual}`,
      {
        cause: "DrupalError",
      }
    )
  }

  return resource
}


