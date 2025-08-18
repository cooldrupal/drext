export function metadataMap(id?: string) {
  const map = {
    /*
    '/': {
      title: "",
      description: "",
    },
    */
  } as Record<string, any>;

  return id ? map[id] : map;
}

