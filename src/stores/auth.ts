import { acceptHMRUpdate, defineStore } from 'pinia'
import { Storage } from '@/configs/app.config'
import { AnyObject } from '@/@types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: {} as AnyObject,
  }),
  getters: {
    uid: (state) => state.auth?.currentUser?.uid ?? null,
    role: (state) => state.auth?.claims?.roleList?.[0],
    isAnonymous: (state: AnyObject) => !state.role,
    isAuthenticate: (state: AnyObject) => true, //(state.isAdmin || state.isAccountant || state.isStaff),
    userInfo: (state) => state.auth?.currentUser ?? null,
    currentUser: (state) => state.auth?.userInfo ?? null,
  },
  actions: {
    setCurrentUser<Type>(context: Type): void {
      Object.assign(this.auth, context)
    },
    updateToken(token: string) {
      Object.assign(this.auth, {
        ...(token && { token })
      })
    },
    resetDefault(): Promise<boolean> {
      return new Promise((resolve) => {
        this.$reset()
        resolve(true)
      })
    },
  },
  persist: {
    key: Storage.AUTH,
    storage: window.sessionStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
