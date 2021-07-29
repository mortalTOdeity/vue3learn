<template>
  <div>
    <h2>home计数器：{{ homeCounter }}</h2>
    <h2>double home计数器：{{ doubleHomeCounter }}</h2>
    <button @click="increment">home+1</button>
    <button @click="homeIncrementAction">home+1+1</button>
  </div>
</template>

<script>
  import {  createNamespacedHelpers } from 'vuex'
  import { useGetters } from '../hooks/useGetters'
  import { useState } from '../hooks/useState'
  const { mapMutations, mapActions } = createNamespacedHelpers('home')
  export default {
    methods: {
      // 写法1
      // ...mapMutations({
      //   increment: 'home/increment'
      // }),
      // ...mapActions({
      //   incrementAction: 'home/incrementAction'
      // })
      
      // 写法2
      // ...mapMutations('home', ['increment']),
      // ...mapActions('home', ['homeIncrementAction'])
      // 写法3
      // ...mapMutations(['increment']),
      // ...mapActions(['homeIncrementAction'])
    },
    computed: {
      // 写法1
      // ...mapState({
      //   homeCounter: state => state.home.homeCounter,
        
      // }),
      // ...mapGetters({
      //   doubleHomeCounter: 'home/doubleHomeCounter',
      // })
      // 写法2 
      // ...mapState('home', ['homeCounter']),
      // ...mapGetters('home', ['doubleHomeCounter'])
      // 写法3 
      // ...mapState(['homeCounter']),
      // ...mapGetters(['doubleHomeCounter'])
    },
    setup() {
      const mutations = mapMutations(['increment'])
      const actions = mapActions(['homeIncrementAction'])
      const state = useState('home', ['homeCounter'])
      const getters = useGetters('home', ['doubleHomeCounter'])
      return {
        ...state,
        ...getters,
        ...mutations,
        ...actions
      }
    }
  }
</script>

<style scoped>

</style>