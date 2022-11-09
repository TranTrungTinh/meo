import { App } from "vue"
import router from '@/app/router'

export const install = (app: App) => {
  app.use(router)
}
