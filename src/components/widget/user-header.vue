<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserHeader',
})
</script>
<template>
  <section class="flex justify-between items-end">
    <div class="flex items-center gap-4">
      <q-avatar size="160px" class="shadow-2">
        <img src="https://cdn.quasar.dev/img/avatar6.jpg" alt="main avatar" />
      </q-avatar>
      <div class="mw-[200px]">
        <h1 class="text-h5 mb-2">Punny</h1>
        <div class="relative-position">
          <q-avatar
            v-for="n in 5"
            :key="n"
            size="40px"
            class="border-solid border-white border-2 absolute"
            :style="`left: ${(n - 1) * 25}px`">
            <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
          </q-avatar>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <q-btn
        round
        dense
        padding="0"
        flat
        size="lg"
        icon="img:https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/480px-2021_Facebook_icon.svg.png" />
      <q-btn
        round
        dense
        padding="0"
        flat
        size="lg"
        icon="img:https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
    </div>
  </section>
</template>