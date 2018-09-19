import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: '/',
        title: '首页',
        icon: '',
        hidden: true,
        component: () => import('../page/coinInfo/index.vue'),
      },
   {
        path: '/coin/info',
        name: 'coin/info',
        title: '货币基础信息管理',
        icon: '',
        hidden: false,
        component: () => import('../page/coinInfo/index.vue'),
      },{
        path: '/coin/address',
        name: 'coin/address',
        title: '币地址管理',
        icon: '',
        hidden: false,
        component: () => import('../page/address/index.vue'),
      }, {
        path: '/coin/trade',
        name: 'coin/trade',
        title: '交易对管理',
        icon: '',
        hidden: false,
        component: () => import('../page/trade/index.vue'),
      }
  ]
})
