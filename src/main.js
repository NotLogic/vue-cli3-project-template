import Vue from 'vue'
import './plugins/axios'
import './plugins/util'

// import 语句必须位于最顶层，不可放置与条件判断中
// ES6规范：import是在编译之前就已经确定是否导入
import './plugins/mock'   //  mock数据

import App from './App.vue'
import store from './vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
