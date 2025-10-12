export function menusMap(id?: string) {
  const map = {
    /*
    'main': {
      list_class: "flex flex-wrap sm:flex-nowrap justify-center sm:justify-end gap-4 w-full sm:w-auto text-center",
      item_class: "w-1/2 sm:w-auto",
    },
    */
  } as Record<string, any>;

  return id ? map[id] : map;
}

