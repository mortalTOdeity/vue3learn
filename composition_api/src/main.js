import { createApp } from 'vue'
import App from './03_RefAPI的补充/App.vue'

const app = createApp(App)

// app.mixin({
//   data() {
//     return {}
//   },
//   created() {
//     console.log('全局的created')
//   }
// })
app.mount('#app')
