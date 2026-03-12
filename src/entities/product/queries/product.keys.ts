export const PRODUCT_QUERY_KEYS = {
  all: ['products'] as const,
  byId: (id: number) => [...PRODUCT_QUERY_KEYS.all, id] as const,
}
