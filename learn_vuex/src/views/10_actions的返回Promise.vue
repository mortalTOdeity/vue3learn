<template>
  <div>
    <h2>当前计数:{{$store.state.counter}}</h2>
    <button @click="add">+1</button>
    <button @click="de">-1</button>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      // ...mapActions(['incrementAction', 'decrementAction'])
      // ...mapActions({
      //   add: 'incrementAction',
      //   de: 'decrementAction'
      // })
    },
    setup() {
      const store = useStore()
      onMounted(() => {
        const promise = store.dispatch('getHomeData')
        promise.then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }) 
      const actions = mapActions(['incrementAction', 'decrementAction'])
      const actions2 = mapActions({
        add: 'incrementAction',
        de: 'decrementAction'
      })
      return {
        ...actions,
        ...actions2
      }
    },
  }
</script>

<style scoped>

</style>