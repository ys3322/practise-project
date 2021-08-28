import Vue from 'vue'
import App from './App'
import axios from "axios";
import router from "./router";

//axios.defaults.baseURL = 'http://www.baidu.com'  改成
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
