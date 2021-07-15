<template>
  <div>
    <h2 ref="header">{{message}}</h2>
    <button @click="btnChange">修改message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'the home'
      }
    },
    methods: {
      btnChange() {
        this.message = this.message + '!'
        console.log(this.message)
      }
    },
    beforeCreate() {
      console.log('home beforeCreate')
    },
    created() {
      console.log('home created')
    },
    beforeMount() {
      console.log('home beforeMount')
    },
    mounted() {
      console.log('home mounted')
    },
    beforeUnmount() {
      console.log('home beforeUnmount')
    },
    unmounted() {
      console.log('home unmounted')
    },
    beforeUpdate() {
      console.log('home beforeUpdate')
      console.log(this.$refs.header.innerHTML) 
    },
    updated() {
      console.log('home updated')
      console.log(this.$refs.header.innerHTML) 
    },
  }
</script>

<style scoped>

</style>