<template>
  <div>
    <home></home>
    <suspence>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspence>
    <!-- <async-category></async-category> -->
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import Home from './Home.vue'
  import Loading from './Loading.vue'
  // import AsyncCategory from './AsyncCategory.vue' 
  // 异步组件
  const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import('./AsyncCategory.vue'),
  //   loadingComponent: Loading,
  //   delay: 2000
  // })
  export default {
    components: { Home, AsyncCategory, Loading },
  }
</script>

<style scoped>

</style>