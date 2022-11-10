<template>
  <container class="relative-position">
    <div class="h-[130px]">
      <div class="absolute -top-[15%] full-width">
        <user-header />
        <q-separator class="my-2" />
      </div>
    </div>
    <section class="bg-transparent">
      <q-item dense class="q-px-none q-mb-sm">
        <q-item-section>
          <q-item-label class="text-body1 text-uppercase">浮光掠影 | photography</q-item-label>
        </q-item-section>
      </q-item>
      <div class="row q-col-gutter-sm">
        <div class="col-3">
          <q-card class="bg-glass">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>Subhead</q-item-label>
              </q-item-section>
            </q-item>

            <q-img src="https://placeimg.com/500/300/nature" />
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="bg-glass">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>Subhead</q-item-label>
              </q-item-section>
            </q-item>

            <q-img src="https://placeimg.com/500/300/nature" />
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="bg-glass">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>Subhead</q-item-label>
              </q-item-section>
            </q-item>

            <q-img src="https://placeimg.com/500/300/nature" />
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="bg-glass">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>Subhead</q-item-label>
              </q-item-section>
            </q-item>

            <q-img src="https://placeimg.com/500/300/nature" />
          </q-card>
        </div>
      </div>
    </section>
  </container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserHeader from '@/components/widget/user-header.vue'
export default defineComponent({
  name: 'RootPage',
  components: { UserHeader },
})
</script>

<style lang="scss" scoped></style>
