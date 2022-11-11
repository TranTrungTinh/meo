<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useToggle } from '@vueuse/core'
import Flipbook from 'flipbook-vue'

export default defineComponent({
  name: 'AlbumPage',
  components: { Flipbook },
  setup() {
    const [hasMouse, setToggleMouse] = useToggle(true)
    const pages = computed(() => [
      null,
      'https://cdn.quasar.dev/img/mountains.jpg',
      'https://cdn.quasar.dev/img/parallax2.jpg',
      'https://cdn.quasar.dev/img/quasar.jpg',
      'https://cdn.quasar.dev/img/cat.jpg',
      'https://cdn.quasar.dev/img/linux-avatar.png',
      'https://cdn.quasar.dev/img/material.png',
      'https://cdn.quasar.dev/img/donuts.png',
      'https://cdn.quasar.dev/img/quasar.jpg',
    ])

    return {
      pages,
      hasMouse,
      setToggleMouse,
    }
  },
})
</script>
<template>
  <section :class="['album', { 'has-mouse': hasMouse }]" @touchstart="() => setToggleMouse(false)">
    <flipbook class="flipbook" :pages="pages" v-slot="flipbook">
      <div class="action-bar">
        <q-icon
          name="arrow_back_ios"
          size="sm"
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft" />
        <q-icon
          name="zoom_in"
          size="sm"
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn" />
        <span class="page-num"> Page {{ flipbook.page }} of {{ flipbook.numPages }} </span>
        <q-icon
          name="zoom_out"
          size="sm"
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut" />
        <q-icon
          name="arrow_forward_ios"
          size="sm"
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight" />
      </div>
    </flipbook>
  </section>
</template>
<style lang="scss" scoped>
.album {
  color: #000;
  -webkit-font-smoothing: antialiased;
}
.flipbook {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // height: calc(100vh - 90px);
  width: 90%;
  margin: 0 auto;
  height: calc(90vh) !important;

  :deep(.bounding-box) {
    box-shadow: 0 0 20px #000;
  }
}
.action-bar {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & .btn {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  & .btn:not(:first-child) {
    margin-left: 10px;
  }

  & .btn:active {
    filter: none !important;
  }

  & .btn.disabled {
    color: #666;
    pointer-events: none;
  }

  & .page-num {
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>