import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'az',
      age: 999,
      height: 1.88,
      books: [
        {name: 'az1', price: 50, count: 8},
        {name: 'az2', price: 40, count: 7},
        {name: 'az3', price: 200, count: 6},
        {name: 'az4', price: 120, count: 1},
        {name: 'az5', price: 370, count: 2},
      ],
      discount: 0.6

    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    countBigN(state, getters) {
      return function(n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    }
  }
})

export default store