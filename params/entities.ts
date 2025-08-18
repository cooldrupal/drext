import type { JsonApiParams } from "next-drupal"

export function entitiesMap(type?: string) {
  const map = {
    /*
    'node--page': {
      params: {
        include: 'field_featured_image,field_featured_image.field_media_image'
      },
      next: {
        revalidate: 3600,
      },
    },
    */
  } as Record<string, JsonApiParams>;

  return type ? map[type] : map;
}

