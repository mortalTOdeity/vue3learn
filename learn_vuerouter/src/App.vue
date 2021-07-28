<template>
  <div id="app">
    <button @click="jumptoHome">首页</button>
    <!-- <router-link to="/home" replace active-class="made">首页</router-link> -->
    <router-link to="/about" v-slot="props">
      <button>{{props.href}}</button>
      <p>{{props.route}}</p>
    </router-link>
    <router-link to="/user/chen">用户</router-link>
    <router-view v-slot="props">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  export default {
    // methods: {
    //   jumptoHome() {
    //     this.$router.push({
    //       path: '/home'
    //     })
    //   }
    // },
    setup() {
      const router = useRouter()
      const jumptoHome = () => {
        
        router.push({
          path: '/home',
          query: {
            name: 'az'
          }
        })
      }
      return {
        jumptoHome
      }
    }
  }
</script>

<style scoped>
  .made {
    color: blue;
  }
  .chen-enter-from {
    opacity: 0;
  }
  .chen-leave-to {
    opacity: 0;
  }
  .chen-enter-active {
    transition: opacity 1s ease;;
  }
  .chen-leave-active {
    transition: opacity 1s ease;;
  }
</style>