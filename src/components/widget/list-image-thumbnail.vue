<script lang="ts">
import { defineComponent, ref } from 'vue'
import { set, useToggle } from '@vueuse/core'
export default defineComponent({
  name: 'ListImage',
  setup() {
    const [open, toggleOpen] = useToggle(false)
    const slide = ref(1)

    const onShow = (current: number) => {
      set(slide, current)
      toggleOpen(true)
    }

    return {
      open,
      slide,
      onShow,
    }
  },
})
</script>
<template>
  <div class="row q-col-gutter-md">
    <div class="col-2" v-for="n in 40" :key="n">
      <q-card class="bg-glass">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full flex flex-center bg-transparent opacity-0 hover:opacity-100">
            <q-icon class="cursor-pointer" name="visibility" size="md" @click="() => onShow(n)" />
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="open">
    <q-card style="width: 700px; max-width: 80vw">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        padding
        arrows
        class="bg-white shadow-1 rounded-borders">
        <q-carousel-slide
          v-for="n in 40"
          :key="n"
          :name="n"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </q-card>
  </q-dialog>
</template>