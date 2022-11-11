<script lang="ts">
import { defineComponent } from 'vue'
import TheGalleries from '@/components/ui/galleries.vue'
export default defineComponent({
  name: 'GalleriesPage',
  components: { TheGalleries },
})
</script>
<template>
  <section class="gallery">
    <TheGalleries />
  </section>
</template>
<style lang="scss" scoped>
.gallery {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: calc(93vh);
  // color: #2c3e50;
}
</style>
