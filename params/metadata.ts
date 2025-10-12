export function metadataMap(id?: string) {
  const map = {
    /*
    '/': {
      title: "",
      description: "",
    },
    */
  } as Record<string, any>;

  if (id) {
    return map[id] ?? {};
  }

  return map;
}

