<template>
  <div id="app">
    <Button type="info" @click="jump('/')">主页面</Button>
    <Button type="success" @click="jump('/clock')">时钟页面</Button>
    <Button type="warning" @click="jump('/figure')">多边形</Button>
    <Button type="error" @click="jump('/number')">数字</Button>
    <div class=" box ">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <!--<canvas id="canvas " class="canvas "></canvas>-->
  </div>
</template>

<script>
// import Stars from '../static/js/Star.js'
// import Moon from '../static/js/Moon'
// import Meteor from '../static/js/Meteor'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
    // let canvas = document.getElementById('canvas'),
    //   ctx = canvas.getContext('2d'),
    //   width = window.innerWidth,
    //   height = window.innerHeight,
    //   // 实例化月亮和星星。流星是随机时间生成，所以只初始化数组
    //   moon = new Moon(ctx, width, height),
    //   stars = new Stars(ctx, width, height, 200),
    //   meteors = [],
    //   count = 0

    // canvas.width = width;
    // canvas.height = height;

    // const meteorGenerator = () => {
    //   // x位置偏移，以免经过月亮
    //   let x = Math.random() * width + 800
    //   meteors.push(new Meteor(ctx, x, height))

    //   // 每隔随机时间，生成新流星
    //   setTimeout(() => {
    //     meteorGenerator()
    //   }, Math.random() * 2000)
    // }

    // const frame = () => {
    //   count++
    //   count % 10 == 0 && stars.blink()
    //   moon.draw()
    //   stars.draw()

    //   meteors.forEach((meteor, index, arr) => {
    //     // 如果流星离开视野之内，销毁流星实例，回收内存
    //     if (meteor.flow()) {
    //       meteor.draw()
    //     } else {
    //       arr.splice(index, 1)
    //     }
    //   })
    //   requestAnimationFrame(frame)
    // }
    // meteorGenerator()
    // frame()
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .6s ease;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
  transform: translateX(100px);
}

.box {
  margin-top: 50px;
}

.canvas {
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
