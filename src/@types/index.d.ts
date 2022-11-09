import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

// * Define type in here
declare type $TODO = any

declare type AnyObject = {
  [key: string]: any
}

declare type CommonObject = {
  key: string
  value: string
}

declare type ArrayOrNot<T> = T | Array<T>

declare type RouteMiddleware = {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
}