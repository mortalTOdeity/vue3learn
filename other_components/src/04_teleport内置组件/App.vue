<template>
  <div class="app">
    <teleport to='#chen'>
      <h2>当前计数</h2>
      <button>+1</button>
      <az></az>
    </teleport>
    <teleport to='#chen'>
      <h2>蛤？</h2>
    </teleport>
  </div>
</template>

<script>
  import { getCurrentInstance } from 'vue'
  import az from './az.vue'
  export default {
    components: {
      az
    },
    setup() {
      const instance = getCurrentInstance()
      console.log(instance.appContext.config.globalProperties.$name)
    },
    mounted() {
      console.log(this.$name)
    },
  }
</script>

<style scoped>

</style>