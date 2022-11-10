import { useRoute, useRouter } from 'vue-router'

export const useEnhancer = () => {
  const route = useRoute()
  const router = useRouter()

  return {
    route,
    router,
  }
}