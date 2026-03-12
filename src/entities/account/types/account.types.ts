export interface Account {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface LoginBody {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export interface RegisterBody {
  username: string
  email: string
  password: string
}
