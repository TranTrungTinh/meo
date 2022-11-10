import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
// import authentication from "@/middleware/authentication"
// import middleware from '@/middleware'
// import { addWhen } from '@/utils/object'

// const whiteList = ['all', 'login', 'reset-password', '403']

// TODO: Register middleware
const customRoutes: RouteRecordRaw[] = generatedRoutes.map(route => ({
  ...route,
  // meta: {
  //   ...route?.meta,
  //   middleware: addWhen(!whiteList.includes(route.name as string), [authentication]),
  // }
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: setupLayouts(customRoutes)
})

// router.beforeEach(middleware())

export default router

export {
  customRoutes
}

export enum RouteName {
  Home = 'index',
  Trips = 'trips',
  Galleries = 'galleries',
  Album = 'album'
}