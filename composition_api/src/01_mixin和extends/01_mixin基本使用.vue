<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">foo按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin'
  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: 'hello world'
      }
    },
    methods: {

    },
    
  }
</script>

<style scoped>

</style>