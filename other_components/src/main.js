import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'
import registerDirectives from './directives/index'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
// const app = createApp(App)
// app.directive('focus', {
//   mounted(el, bindings, vnode, prevnode) {
//     console.log('focus mounted')
//     el.focus()
//   },
// })
const app = createApp(App)
registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

app.mount('#app')
