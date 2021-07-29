<template>
  <div>
    <h2>根计数器：{{ $store.state.rootCounter }}</h2>
    <h2>home计数器：{{ $store.state.home.homeCounter }}</h2>
    <h2>user计数器：{{ $store.state.user.userCounter }}</h2>
    <hr>
    <h2>home * 2: {{ $store.getters['home/doubleHomeCounter'] }}</h2>
    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">home+1</button>
  </div>
</template>

<script>
  export default {
    methods: {
      homeIncrement() {
        this.$store.commit('home/increment')
      },
      homeIncrementAction() {
        this.$store.dispatch('home/homeIncrementAction')
      }
    },
    setup() {
      
    }
  }
</script>

<style scoped>

</style>