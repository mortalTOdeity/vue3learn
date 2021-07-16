<template>
  <div class="app">
    <div>
      <button @click="toggle">切换</button>
    </div>
    <transition name="chen">
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
    animation: bounce 1s ease;
  }
  .chen-leave-active {
    animation: bounce 1s ease reverse;
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

</style>