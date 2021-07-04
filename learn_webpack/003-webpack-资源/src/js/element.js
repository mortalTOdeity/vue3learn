import '../css/style.css'
import'../css/image.css'
import '../css/title.less'

import zzImg from '../img/zznh.png'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = 'hello world'
document.body.appendChild(divEl)

const divEl1 = document.createElement('div')
divEl1.className = 'title'
divEl1.innerHTML = 'hello world'
document.body.appendChild(divEl1)


const made = document.createElement('div')
made.className = 'image-bg'
made.innerHTML = 'shabi'
document.body.appendChild(made)

const imgEl = document.createElement('img')
imgEl.src = zzImg
document.body.appendChild(imgEl)


