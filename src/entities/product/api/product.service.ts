import { api } from '@/shared'
import type { Products } from '@/entities'

export const productService = {
  getProducts: () => api.get<Products>('products').then((res) => res.data),
  getOneProduct: (id: number) => api.get(`products/${id}`).then((res) => res.data),
}
