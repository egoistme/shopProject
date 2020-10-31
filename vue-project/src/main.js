import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import api from './http/api/api.js'
import Echarts from "echarts"
//封装的axios
import './commonStyle/chartsCommonStyle.css'

Vue.prototype.$api = api;
Vue.prototype.$api = api;
Vue.prototype.$echarts = Echarts;
Vue.config.productionTip = false
Vue.prototype.BASE_URL = 'http://139.198.18.84:3000'
// Vue.prototype.BASE_URL = 'http://localhost:3000';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')