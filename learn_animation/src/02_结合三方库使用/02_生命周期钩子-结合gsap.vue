<template>
  <div class="app">
    <div>
      <button @click="toggle">切换</button>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave"
    :css="false">
      <h2 v-if="isShow" class="title">Hello World</h2>
    </transition>
    
  </div>
</template>

<script>
  import gsap from 'gsap'
  export default {
    data() {
      return {
        isShow: true,
        distance: 200
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      },
      beforeEnter() {
        console.log('beforeEnter')
      },
      enter(el, done) {
        console.log('enter')
        // gasp.to(target, {})
        gsap.from(el, {
          scale: 0,
          x: this.distance,
          onComplete: done

        })
      },
      afterEnter() {
        console.log('afterEnter')
      },
      beforeLeave() {
        console.log('beforeLeave')
      },
      leave(el, done) {
        console.log('leave')
        gsap.to(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      },
      afterLeave() {
        console.log('afterLeave')
      },
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
    /* transform: translateX(100px); */
  }
</style>