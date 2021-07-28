import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'az',
      age: 999
    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    }
  }
})

export default store