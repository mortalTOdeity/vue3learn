import _ from 'lodash-es'
import { createApp } from 'vue'
import "./css/style.css"
import "./css/title.less"
import { sum } from './js/math'
import mul from './ts/mul'
import App from './vue/App.vue'


console.log('hello world!')
console.log(sum(209, 390))
console.log(mul(40, 213))
console.log(_.join(['aqbc', 'sdas'], "-"))

const titleEl = document.createElement('div')
titleEl.className = "title"
titleEl.innerHTML = 'hello vite'
document.body.appendChild(titleEl)

// vue
createApp(App).mount("#app")