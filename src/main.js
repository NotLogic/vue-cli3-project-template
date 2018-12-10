import Vue from 'vue'
import './plugins/axios'
import './plugins/util'
import App from './App.vue'
import store from './vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {size: 'small'})

Vue.config.productionTip = false
// Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
