<template>
  <div>
    <button @click="toggle">切换</button>
    <transition name="chen">
      <h2 v-if="isShow">Hello World</h2>
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
  .chen-enter-from,
  .chen-leave-to {
    opacity: 0;
  }
  .chen-enter-to,
  .chen-leave-from {
    opacity: 1
  }

  .chen-enter-active,
  .chen-leave-active {
    transition: opacity 2s ;
  }

</style>