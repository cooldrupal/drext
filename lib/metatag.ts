import { metadataMap } from "@/params/metadata"

export function getMetatag(entity: any) {
  if (entity) {
    if (entity.metatag) {
      const metaAttributes = entity.metatag
        .filter((item: any) => item.tag === "meta" && item.attributes?.name && item.attributes?.content)
        .reduce((acc: any, item: any) => {
          acc[item.attributes.name] = item.attributes.content
          return acc
        }, {} as Record<string, string>)
      return metaAttributes
    }

    // Fallback.
    if (entity.label) {
      return {
        title: entity.label,
      };
    }
  }

  return {};
}

export function getMetatagByPath(slug: string) {
  const metadata = metadataMap(slug);
  return metadata;
}
