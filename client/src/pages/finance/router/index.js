import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registration from '../page/setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: '/',
        title: '首页',
        icon: '',
        hidden: true,
        component: () => import('@/pages/finance/page/order/index.vue'),
      },
   {
        path: '/order',
        name: 'order',
        title: '交易订单查询',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/order/index.vue'),
      },{
        path: '/info',
        name: 'info',
        title: '提币审核',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/bingCheck/index.vue'),
      }, {
        path: '/ledger',
        name: 'ledger',
        title: '交易所台账管理',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/ledger/index.vue'),
      }, {
        path: '/online/service',
        name: 'online/service',
        title: '充币提币管理',
        icon: '',
        component: registration
      }, 
  ]
})
