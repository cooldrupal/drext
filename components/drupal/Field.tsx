import { isEmpty } from "@/lib/utils"

interface FieldProps {
  name: string;
  node: any;
  view?: string;
}

const componentsMap: Record<string, any> = {
  /*
  "node--page--body--teaser": BodyNodePageTeaser,
  */
};

export function Field({ name, node, view }: FieldProps) {
  const data = node.attributes ?? node;
  let field = `${node.type}--${name.replaceAll("_", "-") }`
  if (view) {
    field = `${field}--${view.replaceAll("_", "-")}`
  }

  const Component = componentsMap[field]
  return Component && !isEmpty(data[name]) ? <Component value={data[name]} /> : null;
}
