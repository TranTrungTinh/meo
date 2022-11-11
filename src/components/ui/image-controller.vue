<template>
  <div :class="className" @click="handleClick">
    <span class="text-caption">{{ index + 1 }}</span>
    <q-icon name="autorenew" class="inverse-icon" />
  </div>
</template>

<script lang="ts">
import { AnyObject } from '@/@types'
import { computed, defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'ImageController',
  props: {
    index: {
      type: Number,
      default: () => 0,
    },
    position: {
      type: Object as PropType<AnyObject>,
      default: () => ({}),
    },
  },
  emits: ['center', 'inverse'],
  setup(props, { emit }) {
    const className = computed(() => {
      let position = props.position
      let className = 'controller-unit' + (position.center === true ? ' current' : '')
      if (position.inverse === true) className += ' inverse'
      return className
    })

    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (props.position.center !== true) {
        emit('center', props.index)
      } else {
        emit('inverse', props.index)
      }
    }

    return {
      className,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.controller-unit {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin-right: 15px;
  border-radius: 22px;
  background-color: #555555;
  color: #ffffff;
  vertical-align: middle;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: background-color 0.6s ease-in-out, transform 0.6s ease-in-out;
  transition: background-color 0.6s ease-in-out, transform 0.6s ease-in-out;
}
.controller-unit:hover {
  background-color: #121212;
}
.controller-unit.current {
  background-color: #121212;
}
.inverse-icon {
  display: none;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
}
.controller-unit.current span {
  display: none;
}
.controller-unit.current .inverse-icon {
  display: block;
}
.controller-unit.inverse {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
/**
 * 去掉处理移动端点击出现背景效果
 */
@media screen and (max-width: 768px) {
  .controller-unit {
    cursor: default;
  }
}
</style>