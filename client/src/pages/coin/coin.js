// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import methods from '../../common/methods.js'
import './style/index.scss'
import './lib/mixin.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

window.Vue = Vue
window.App = new Vue({
  el: '#app',
  router,
  store,
  methods,//全部掛在App下
  components: { App },
  template: '<App/>'
})
