import { sum } from './js/math.js'
import { createApp } from 'vue' 
const { priceFromat } = require('./js/format.js')
import './js/element'
import App from '@/vue/App.vue'
import axios from 'axios'

if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element模块更新了')
  })
}


console.log(sum(29, 31))
console.log(priceFromat())
console.log('啊这！')

axios.get('/api/moment').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})



const app = createApp(App)
app.mount('#app')