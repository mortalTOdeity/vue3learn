import { createStore } from 'vuex'
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'

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
      banners: [],
      discount: 0.6

    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n
    },
    addBannerData(state, payload) {
      state.banners = payload
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
  },
  actions: {
    // 放函数
    // 1.参数问题
    incrementAction(context, payload) {
      console.log(payload)
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    // 2.context的其他属性
    decrementAction(context, payload) {
      console.log(context)
      context.commit('decrement')
    },
    getHomeData(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
        context.commit('addBannerData', res.data.data.banner.list)
        resolve('az')
      }).catch(err => {
        reject(err)
      })
      })
      
    }
  }
})

export default store