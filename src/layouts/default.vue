<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-toolbar-title> Lịch sử khám </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white text-primary">
      <q-tabs
        v-model="tab"
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey">
        <q-tab name="encounter" label="Lịch sử khám" icon="local_hospital" />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-layout">
      <q-page class="container">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in">
            <component :key="route.name || ''" :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const tab = ref('encounter')

    return {
      tab,
    }
  },
})
</script>
