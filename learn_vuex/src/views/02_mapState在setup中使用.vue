<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <h2>new0-Home: {{sCounter}}</h2>
    <h2>{{age}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex'
  import { computed } from 'vue'
  export default {
    setup() {
      const store = useStore()
      const sCounter = computed(() => {
       return store.state.counter
      })
      const storeStateFns = mapState(['name', 'age'])
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store})
        storeState[fnKey] = computed(fn)
      })
      return {
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>