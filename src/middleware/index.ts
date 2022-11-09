import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export default (options?: AnyObject) => async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const meta = to.meta as AnyObject
  if (meta?.middleware?.length) {
    const arr = meta?.middleware ?? []
    for (let index = 0; index < arr.length; index++) {
      const method = arr[index] as (params: any) => boolean
      const result = method({ ...options, to, from, next })
      if (!result) {
        break
      }
    }
    return
  }

  return next()
}