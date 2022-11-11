import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export const useEnhancer = () => {
  const $q = useQuasar()
  const route = useRoute()
  const router = useRouter()

  const isDark = computed(() => $q.dark.isActive)

  const toggleDarkMode = () => {
    $q.dark.toggle()
    // console.info($q.dark)
  }

  return {
    route,
    router,
    isDark,
    toggleDarkMode
  }
}