<template>
  <div>
    <h2>home page</h2>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String
      }
    },
     
    // setup(props, context) {
    setup(props, {attrs, slots, emit}) {
      let counter = 100
      const increment = () => {
        counter ++
        console.log(counter)
      }


      return {
        title: 'hekko home',
        counter,
        increment

      }
    }
  }
</script>

<style scoped>

</style>