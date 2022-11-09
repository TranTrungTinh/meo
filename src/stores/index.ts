import { useAuthStore } from './auth'

export const useStores = () => ({
  auth: useAuthStore()
})
