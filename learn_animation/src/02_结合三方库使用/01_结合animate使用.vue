<template>
  <div class="app">
    <div>
      <button @click="toggle">切换</button>
    </div>
    <!-- <transition name="chen" mode="out-in" appear>
      <h2 v-if="isShow">Hello World</h2>
    </transition> -->
    <transition enter-active-class="animate__animated animate__rubberBand" leave-active-class="animate__animated animate__flipInY">
      <h2 v-if="isShow" class="title">Hello World</h2>
    </transition>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
  .animate__flipInY {
    animation-direction: reverse;
  }
  /* .chen-enter-active {
    animation: bounceInUp 1s ease;
  }
  
  .chen-leave-active {
    animation: bounceInUp 1s ease reverse;
  } */


</style>