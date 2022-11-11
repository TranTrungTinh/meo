<template>
  <section class="gallery-container" ref="stage">
    <div class="gallery-box">
      <image-figure
        ref="imageFigure"
        v-for="(position, index) in positions"
        :key="index"
        :index="index"
        :data="pictureDatas[index]"
        :position="position"
        @center="center"
        @inverse="inverse" />
    </div>
    <nav class="gallery-controller">
      <image-controller
        v-for="(position, index) in positions"
        :key="index"
        :index="index"
        :position="position"
        @center="center"
        @inverse="inverse" />
    </nav>
  </section>
</template>

<script>
import ImageFigure from './image-figure.vue'
import ImageController from './image-controller.vue'
export default {
  name: 'TheGalleries',
  components: { ImageFigure, ImageController },
  data() {
    return {
      positions: [],
    }
  },
  computed: {
    pictureDatas() {
      return [
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '1',
          description: '1',
        },
        {
          src: 'https://cdn.quasar.dev/img/parallax1.jpg',
          title: '2',
          description: '2',
        },
        {
          src: 'https://cdn.quasar.dev/img/parallax2.jpg',
          title: '3',
          description: '3',
        },
        {
          src: 'https://cdn.quasar.dev/img/quasar.jpg',
          title: '4',
          description: '4',
        },
        {
          src: 'https://cdn.quasar.dev/img/cat.jpg',
          title: '5',
          description: '5',
        },
        {
          src: 'https://cdn.quasar.dev/img/linux-avatar.png',
          title: '6',
          description: '6',
        },
        {
          src: 'https://cdn.quasar.dev/img/material.png',
          title: '7',
          description: '7',
        },
        {
          src: 'https://cdn.quasar.dev/img/donuts.png',
          title: '8',
          description: '9',
        },
      ]
    },
  },
  created() {
    this.position = {
      centerPosition: {
        left: 0,
        top: 0,
      },
      horizontalPosition: {
        left: [0, 0],
        right: [0, 0],
        center: [0, 0],
      },
      verticalPosition: {
        y: [0, 0],
        center: [0, 0],
      },
    }
    this.pictureDatas.forEach((value, index) => {
      this.positions[index] = {
        left: 0,
        top: 0,
        rotate: 0,
        center: false,
        inverse: false,
      }
    })
  },
  mounted() {
    this.initPosition()
    this.allocationPosition(0)
  },
  methods: {
    initPosition,
    allocationPosition,
    inverse(index) {
      let position = this.positions[index]
      position.inverse = !position.inverse
      this.positions.splice(index, 1, position)
    },
    center(index) {
      this.allocationPosition(index)
    },
  },
}
function randomPosition(start, end) {
  return Math.floor(Math.random() * (end - start)) + start
}
function randomRotate(deg) {
  const randomDeg = Math.ceil(Math.random() * deg)
  return (Math.floor(Math.random() * 2) === 0 ? '-' : '') + randomDeg
}
function initPosition() {
  let stageDOM = this.$refs.stage,
    stageW = stageDOM.offsetWidth,
    stageH = stageDOM.offsetHeight
  let imageFigureDOM = this.$refs.imageFigure[0].$el,
    imageFigureW = imageFigureDOM.offsetWidth,
    imageFigureH = imageFigureDOM.offsetHeight
  this.position.centerPosition.left = (stageW - imageFigureW) / 2
  this.position.centerPosition.top = (stageH - imageFigureH) / 2
  this.position.horizontalPosition.left[0] = -imageFigureW / 2
  this.position.horizontalPosition.left[1] = stageW / 2 - (imageFigureW / 2) * 3
  this.position.horizontalPosition.right[0] = stageW / 2 + imageFigureW
  this.position.horizontalPosition.right[1] = stageW - imageFigureW / 2
  this.position.verticalPosition.y[0] = -imageFigureH / 2
  this.position.verticalPosition.y[1] = stageH - imageFigureH
  this.position.horizontalPosition.center[0] = stageW / 2 - imageFigureW
  this.position.horizontalPosition.center[1] = stageW / 2
  this.position.verticalPosition.center[0] = -imageFigureH / 2
  this.position.verticalPosition.center[1] = stageH / 2 - (imageFigureH / 2) * 3
}
function allocationPosition(index) {
  let centerPosition = this.position.centerPosition,
    horizontalPosition = this.position.horizontalPosition,
    verticalPosition = this.position.verticalPosition
  let positions = this.positions
  let centerImageFigures = positions.splice(index, 1)
  centerImageFigures[0] = {
    left: centerPosition.left,
    top: centerPosition.top,
    rotate: 0,
    center: true,
    inverse: false,
  }
  let topIndex = 0,
    topSize = Math.floor(Math.random() * 2), //随机获取0或1
    topImageFigures = []
  if (topSize > 0) {
    topIndex = Math.floor(Math.random() * positions.length - 1)
    topImageFigures = positions.splice(topIndex, 1)
    topImageFigures[0] = {
      left: randomPosition(horizontalPosition.center[0], horizontalPosition.center[1]),
      top: randomPosition(verticalPosition.center[0], verticalPosition.center[1]),
      rotate: randomRotate(30),
      center: false,
      inverse: false,
    }
  }
  for (let i = 0, len = positions.length, f = Math.floor(len / 2); i < len; i++) {
    let p = {}
    if (i < f) {
      p.left = randomPosition(horizontalPosition.left[0], horizontalPosition.left[1])
    } else {
      p.left = randomPosition(horizontalPosition.right[0], horizontalPosition.right[1])
    }
    p.top = randomPosition(verticalPosition.y[0], verticalPosition.y[1])
    p.rotate = randomRotate(30)
    p.center = false
    p.inverse = false
    positions[i] = p
  }
  topImageFigures.forEach((v) => {
    positions.splice(topIndex, 0, v)
  })
  positions.splice(index, 0, centerImageFigures[0])
}
</script>

<style lang="scss" scoped>
.gallery {
  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--bg-gallery);
  }
  &-box {
    position: relative;
    height: 100%;
    overflow: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }
  &-controller {
    position: absolute;
    z-index: 999;
    bottom: 30px;
    width: 100%;
    text-align: center;
  }
}
</style>