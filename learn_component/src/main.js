import { createApp } from 'vue'
import App from './15_组件的v-model/App.vue'

// import { sum } from './12_异步组件的使用/utils/math.js'
// 通过import 导入的模块, 后续webpack对其打包的时候会对其分包
// import ("./12_异步组件的使用/utils/math.js").then(res => {
//   res.sum(20, 30)
// })


// console.log(sum(20, 30))


createApp(App).mount('#app')

