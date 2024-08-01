import Vue from 'vue'
import App from './App.vue'
import router from './router'

import APlayer from '@moefe/vue-aplayer'
// 引入css
import '@/assets/css/index.css'
// 引入vant
import '@/plugin/vant'
// 引入api
import api from './api'

Vue.use(APlayer)
// 挂载到vue原型上，所有的vue实例可以访问
Vue.prototype.$api = api

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
