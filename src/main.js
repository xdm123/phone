// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import FastClick from 'fastclick'
import Swiper from 'swiper'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  error:require('./assets/img/error.png'), //注意图片使用路径问题
  loading:require('./assets/img/error.png')
})


Vue.config.productionTip = false

Vue.prototype.$http = axios

FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

