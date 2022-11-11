<template>
  <figure :class="[className, 'shadow-xl']" :style="[styleObject]" @click="handleClick">
    <q-img :src="imageData.src" class="gallery-image" :alt="imageData.name" />
    <figcaption class="image-title text-body1">
      {{ imageData.title }}
    </figcaption>
    <div class="image-description">
      <i class="text-body1">{{ imageData.description }}</i>
    </div>
  </figure>
</template>

<script lang="ts">
import { AnyObject } from '@/@types'
import { computed, defineComponent, PropType, reactive } from 'vue'
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
    data: {
      type: Object as PropType<AnyObject>,
      default: () => ({}),
    },
    center: {
      type: Object,
    },
    inverse: {
      type: Object,
    },
  },
  emits: ['center', 'inverse'],
  setup(props, { emit }) {
    const imageData = reactive(props.data)
    // const className = ref('gallery-figure')

    const styleObject = computed(() => {
      let position = props.position
      let styleObject = {
        left: position.left + 'px',
        top: position.top + 'px',
        ...(position.center && { zIndex: 101 }),
      }
      if (position.rotate !== 0) {
        styleObject['WebkitTransform'] = 'rotate(' + position.rotate + 'deg)'
        styleObject['transform'] = 'rotate(' + position.rotate + 'deg)'
      }
      return styleObject
    })

    const className = computed(
      () =>
        `gallery-figure${props.position.inverse === true ? ' inverse' : ''}${
          props.position.center === true ? ' active' : ''
        }`
    )

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
      styleObject,
      imageData,
      className,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.gallery {
  &-figure {
    position: absolute;
    z-index: 100;
    width: 380px;
    height: 400px;
    padding: 40px;
    margin: 0;
    background-color: var(--card-color, #fff);
    // border-radius: 8px;
    color: #2c3e50;
    cursor: pointer;
    -webkit-transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, top 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, top 0.6s ease-in-out;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    &.inverse {
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
  }

  &-image {
    width: 300px;
    height: 320px;
  }
  .image {
    &-title {
      font-size: 16px;
      margin-top: 10px;
      height: 60px;
      text-align: center;
    }
    &-description {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 40px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text-color, #000);
      box-sizing: border-box;
      background-color: var(--card-color, #fff);
      -webkit-transform: rotateY(180deg) translateZ(1px);
      transform: rotateY(180deg) translateZ(1px);
    }
  }
}
@media screen and (max-width: 768px) {
  .gallery-figure {
    cursor: default;
  }
}
@media screen and (min-width: 1000px) {
  .gallery-figure {
    &.active {
      width: 480px;
      height: 500px;
      .gallery-image {
        width: 400px;
        height: 420px;
      }
    }
  }
}
</style>