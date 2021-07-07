import { sum } from './js/math.js'
import { createApp } from 'vue' 
const { priceFromat } = require('./js/format.js')
import './js/element'
import App from './vue/App.vue'

// console.log(sum(10, 20))
// console.log(priceFromat())


// const app = createApp({
  // template: "#my-app",
  // data() {
  //   return {
  //     title: 'hello world!',
  //     message: 'hahah'
  //   }
  // },
// })
const app = createApp(App)
app.mount('#app')