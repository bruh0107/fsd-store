import { useQuery } from '@pinia/colada'
import { PRODUCT_QUERY_KEYS, productService } from '@/entities'

export const useProducts = () => {
  return useQuery({
    key: PRODUCT_QUERY_KEYS.all,
    query: productService.getProducts,
  })
}

export const useOneProduct = (id: number) => {
  return useQuery({
    key: PRODUCT_QUERY_KEYS.byId(id),
    query: () => productService.getOneProduct(id),
  })
}
