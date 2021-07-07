import { sum } from './js/math.js'
import { createApp } from 'vue' 
const { priceFromat } = require('./js/format.js')
import './js/element'
import App from './vue/App.vue'

if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element模块更新了')
  })
}


console.log(sum(29, 31))
console.log(priceFromat())
console.log('啊这！')



const app = createApp(App)
app.mount('#app')