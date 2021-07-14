<template>
  <div class="main">
    <main-banner></main-banner>
    <main-product-list></main-product-list> 
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'
  export default {
    components: {
      MainProductList,
      MainBanner
    }
  }
</script>

<style scoped>

</style>