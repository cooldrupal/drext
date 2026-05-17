import { entitiesMap  } from '@/params/entities'
import { Entity as Default } from "@/components/entities/Entity";

interface EntityProps {
  entity: any;
  view?: string;
}

const componentsMap: Record<string, React.ComponentType<EntityProps>> = {
  /*
  "node--page": BasicPage,
  */
};

export function Entity({ entity, view }: EntityProps) {
  const data = entity.attributes ?? entity;
  let entity_type = entity.type
  if (view) {
    entity_type = `${entity_type}--${view.replaceAll("_", "-")}`
  }
  const Component = componentsMap[entity_type];
  return Component ? <Component entity={data} /> : <Default entity={data} />;
}

export function getEntityTypes(): string[] {
  return Object.keys(entitiesMap());
}
