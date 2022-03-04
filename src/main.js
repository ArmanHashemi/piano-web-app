import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/css/main.scss'
import _ from 'lodash'

Vue.config.productionTip = false
Vue.prototype.$_ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
