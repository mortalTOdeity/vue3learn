<template>
  <div id="app">
    <the-header></the-header>
    <the-main></the-main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import theHeader from './Header.vue'
import theMain from './Main.vue'
import theFooter from './Footer.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    theHeader,
    theMain,
    theFooter
  }
}
</script>

<style scoped>

</style>