import '../css/style.css'
import'../css/image.css'
import '../css/title.less'
import '../font/iconfont.css'

import zzImg from '../img/zznh.png'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = 'hello world'
document.body.appendChild(divEl)

const made = document.createElement('div')
made.className = 'image-bg'
made.innerHTML = 'shabi'
document.body.appendChild(made)

const imgEl = document.createElement('img')
imgEl.src = zzImg
document.body.appendChild(imgEl)

const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin'
document.body.appendChild(iEl)

console.log('哈23是我2哈')