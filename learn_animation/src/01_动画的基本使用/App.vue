<template>
  <div class="app">
    <div>
      <button @click="toggle">切换</button>
    </div>
    <transition name="chen" mode="out-in" appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
    
  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
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
    },
    components: {
      Home,
      About
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
    animation: bounce 1s ease;
    transition: opacity 1 s ease;
  }
  .chen-leave-active {
    animation: bounce 1s ease reverse;
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