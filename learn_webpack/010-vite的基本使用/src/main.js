import _ from '../node_modules/lodash-es/lodash.default'
import "./css/style.css"
import "./css/title.less"
import { sum } from './js/math'
import mul from './ts/mul'



console.log('hello world!')
console.log(sum(209, 390))
console.log(mul(40, 213))
console.log(_.join(['aqbc', 'sdas'], "-"))

const titleEl = document.createElement('div')
titleEl.className = "title"
titleEl.innerHTML = 'hello vite'
document.body.appendChild(titleEl)