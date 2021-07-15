<template>
  <div>
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
  import emmiter from './eventbus.js'
  export default {
    methods: {
      btnClick() {
        console.log('about组件点击')
        emmiter.emit("chen", {name: 'chenchen'})
        
        emmiter.emit("kobe", {name: 'kobe'})
      }
    },
  }
</script>

<style scoped>

</style>