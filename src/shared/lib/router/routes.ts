export const Routes = {
  home: '/',
  login: '/login',
  products: '/products',
} as const

export type RouteName = keyof typeof Routes
