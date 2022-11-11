<template>
  <container class="relative-position">
    <div class="h-[130px]">
      <div class="absolute -top-[60px] full-width">
        <user-header />
        <q-separator class="my-2" />
      </div>
    </div>
    <section class="q-mb-md">
      <q-item dense class="q-px-none q-mb-sm">
        <q-item-section>
          <q-item-label class="text-body1 text-uppercase">浮光掠影 | photography (20)</q-item-label>
        </q-item-section>
      </q-item>
      <list-image-thumbnail />
    </section>
    <section class="q-mb-md">
      <q-item dense class="q-px-none q-mb-sm">
        <q-item-section>
          <q-item-label class="text-body1 text-uppercase">长路迢迢 | Tour (7) </q-item-label>
        </q-item-section>
      </q-item>
      <list-image-card />
    </section>
  </container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserHeader from '@/components/widget/user-header.vue'
import ListImageCard from '@/components/widget/list-image-card.vue'
import ListImageThumbnail from '@/components/widget/list-image-thumbnail.vue'

export default defineComponent({
  name: 'RootPage',
  components: { UserHeader, ListImageCard, ListImageThumbnail },
})
</script>

<style lang="scss" scoped></style>
