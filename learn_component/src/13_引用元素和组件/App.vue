<template>
  <div>
    <h2 ref="theHeader">呵呵呵</h2>
    <!-- 绑定到组件实例上 -->
    <nav-bar ref="nav"></nav-bar>
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ['aaa', 'bbb', 'ccc']
      }
    },
    methods: {
      btnClick() {
        console.log(this.$refs.theHeader.innerHTML)
        console.log(this.$refs.nav.message);
        console.log(this.$refs.nav.$el);
        this.$refs.nav.sayHello()
      }
    },
  }
</script>

<style scoped>

</style>