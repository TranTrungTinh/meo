<script lang="ts">
import { defineComponent } from 'vue'
import { useTimeAgo } from '@vueuse/core'

export default defineComponent({
  name: 'ImageCard',
  setup() {
    const timeAgo = useTimeAgo(new Date())

    return {
      timeAgo,
    }
  },
})
</script>
<template>
  <div class="row q-col-gutter-md">
    <div class="col-3" v-for="n in 20" :key="n">
      <q-card class="bg-glass">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" alt="card image">
          <div class="absolute-bottom-right text-subtitle2" style="padding: 4px 8px">
            {{ timeAgo }}
          </div>
        </q-img>

        <q-card-section class="q-py-sm">
          <q-item-label class="text-body2">Our Changing Planet</q-item-label>
          <q-item-label lines="2" class="text-caption">by John Doe</q-item-label>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
