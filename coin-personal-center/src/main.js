import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
// import 'font-awesome/css/font-awesome.min.css'
import './styles/index.scss' 

import './lib/mixin.js'
import methods from './common/methods.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

import components from './lib/components.js';
Vue.use(components);

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

window.Vue = Vue
window.App = new Vue({
  el: '#app',
  router,
  store,
  methods,//全部掛在App下
  components: { App },
  template: '<App/>'
})