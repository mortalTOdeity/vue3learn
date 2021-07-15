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
  .chen-leave-fo {
    opacity: 0;
  }
</style>