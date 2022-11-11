<template>
  <q-layout view="hHh lpR fFf" class="bg-layout q-pb-md">
    <q-header class="bg-header text-black">
      <q-toolbar>
        <q-avatar>
          <q-img src="@/assets/img/logo.jpg" alt="The main logo" />
        </q-avatar>

        <q-toolbar-title :class="isDark ? 'text-white' : 'text-dark'"> My Cat </q-toolbar-title>
        <q-space />
        <q-tabs no-caps class="text-primary">
          <q-route-tab name="home" label="Home" to="/" exact />
          <q-route-tab name="trips" label="Trips" to="/trips" exact />
          <q-route-tab name="galleries" label="Galleries" to="/galleries" exact />
          <q-route-tab name="album" label="Album" to="/album" exact />
        </q-tabs>
        <q-separator color="grey" vertical inset />
        <q-btn
          stretch
          flat
          :icon="isDark ? 'dark_mode' : 'light_mode'"
          :color="isDark ? 'white' : 'dark'"
          @click="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-footer class="bg-header text-primary">
      <div class="text-center">COPYRIGHT © 2022 | My Cat</div>
    </q-footer>

    <q-page-container>
      <q-page>
        <transition name="fade">
          <q-parallax v-if="isDisplayBanner" :src="bannerUrl" :height="300" />
        </transition>

        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade-from-bottom" mode="out-in">
            <component :key="route.name || ''" :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useEnhancer } from '@/app/enhancer'
import { RouteName } from '@/app/router'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const { route, toggleDarkMode, isDark } = useEnhancer()

    const bannerUrl = computed(() => {
      if (route.name === RouteName.Home)
        return 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80'
      return 'https://cdn.quasar.dev/img/parallax1.jpg'
    })

    const isDisplayBanner = computed(
      () => route.name === RouteName.Home || route.name === RouteName.Trips
    )

    return {
      bannerUrl,
      isDisplayBanner,
      isDark,
      toggleDarkMode,
    }
  },
})
</script>
<style lang="scss" scoped>
</style>