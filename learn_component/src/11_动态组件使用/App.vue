<template>
  <div>
    <button v-for="item in tabs" :key="item" @click="btnClick(item)" :class="{active: currentTab === item}">{{item}}</button>

    <!-- 1.v-if 判断 实现 -->

    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'catagory'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template>     -->

    <!-- 2.动态组件 -->
    <keep-alive include="about">
      <component :is="currentTab"
        name="chen"
        :age="18"
        @caClick="pageClick">
      </component>
    </keep-alive>
    
  </div>
  
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
  export default {
  components: { Home, Category, About },
    data() {
      return {
        tabs: ['home', 'about', 'category'],
        currentTab: 'home'
      }
    },
    methods: {
      btnClick(item) {
        this.currentTab = item
      },
      pageClick() {
        console.log('ca发生点击')
      }
    },
  }
</script>

<style scoped>
 .active {
   color: red;
 }
</style>