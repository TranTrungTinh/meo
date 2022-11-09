import { useQuasar } from 'quasar'
import { computed } from 'vue'

export function useDevices() {
  const $q = useQuasar()
  // 0 - 755 <-->756-1199 <-->1200
  const isSmallMobile = computed(() => $q.screen.width <= 360)
  const isMobile = computed(() => $q.screen.width <= 755 && $q.screen.width > 360)
  const isIpad = computed(() => $q.screen.width > 755 && $q.screen.width <= 1199)
  const isDesktop = computed(() => $q.screen.width > 1199)

  return {
    isSmallMobile,
    isMobile,
    isIpad,
    isDesktop
  }
}