import { RouteMiddleware } from '@/@types'
import { useStores } from '@/stores'
// import { AppRole } from '@/constants/enums'
// import { guardConfig } from '@/configs/nav.config'
// import { findFirst } from '@/util/object'
// const allowRoles = [AppRole.admin, AppRole.accountant, AppRole.staff]

export default ({ to, next }: RouteMiddleware) => {
  const { auth } = useStores()
  if (!auth.isAuthenticate) {
    next(`/login?redirect=${to.fullPath}`)
    return false
  }
  next()
}