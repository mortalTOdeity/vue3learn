<template id="my-app">
  <h2>我是vue渲染出来的</h2>
  <h2>az</h2>
  <h2>{{title}}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'hello world!',
      message: 'hahah'
    }
  },
  methods: {
    
  },
}
</script>

<style lang="">
  
</style>