<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <!-- blank layout show nothing but router -->
      <!-- <div class="py-2 mx-auto text-center text-sm bg-gray-100">[Blank Layout]</div> -->
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlankLayout',
})
</script>

