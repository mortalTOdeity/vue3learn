<template>
  <div>
    <h2>总价值：{{$store.getters.totalPrice}}</h2>
    <h2>asd: {{$store.getters.countBigN(2)}}</h2>
    <hr>
    <h2>{{$store.getters.nameInfo}}</h2>
    <h2>{{$store.getters.ageInfo}}</h2>
    <h2>{{$store.getters.heightInfo}}</h2>
    <hr>
    <h2>{{nameInfo}}</h2>
    <h2>{{ageInfo}}</h2>
    <h2>{{heightInfo}}</h2>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['nameInfo', 'ageInfo', 'heightInfo'])
    }
  }
</script>

<style scoped>

</style>