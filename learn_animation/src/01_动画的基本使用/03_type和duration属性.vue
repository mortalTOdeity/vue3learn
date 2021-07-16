<template>
  <div class="app">
    <div>
      <button @click="toggle">切换</button>
    </div>
    <transition name="chen" type="animation" :duration="500">
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
  .app {
    width: 200px;
    margin: 0 auto;
  }
  .title {
    display: inline-block;
  }
  .chen-enter-active {
    animation: bounce 2s ease;
    transition: opacity 1 s ease;
  }
  .chen-leave-active {
    animation: bounce 2s ease reverse;
    transition: opacity 1s ease
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .chen-enter-from,
  .chen-leave-to {
    opacity: 0;
  }
  /* .chen-enter-active,
  .chen-leave-active {

  } */


</style>