<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <h2>Home: {{sCounter}}</h2>
    <h2>Home: {{$store.state.name}}</h2>
    <!-- <h2>new: {{name}}</h2> -->
    <h2>sname: {{sname}}</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      // ...mapState(['name', 'age']) 
      // sCounter() {
      //   return this.$store.state.counter
      // },
      ...mapState({
        sname: state => state.name
      })
    }
  }
</script>

<style scoped>

</style>