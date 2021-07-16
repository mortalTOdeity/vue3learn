<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffle">洗牌</button>
    <transition-group tag="p" name="chen">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    data() {
      return {
        numbers: [1,2,3,4],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        // this.numbers.push(this.numCounter++)
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.numbers.splice(this.randomIndex(), 1)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length) 
      },
      shuffle() {
        this.numbers = _.shuffle(this.numbers)
      }
    },
  }
</script>

<style scoped>
  .item {
    margin-left: 15px;
    display: inline-block;
  }
  .chen-enter-from,
  .chen-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .chen-enter-active,
  .chen-leave-active {
    transition: all 1s ease;
  }
  .chen-leave-active {
    position: absolute;
  }
  .chen-move {
    transition: transform 1s ease;
  }
</style>