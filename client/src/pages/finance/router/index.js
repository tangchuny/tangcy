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
        component: () => import('@/pages/finance/page/order/index.vue'),
      },
   {
        path: 'finance/order',
        name: 'finance/order',
        title: '交易订单查询',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/order/index.vue'),
      },{
        path: 'finance/check',
        name: 'finance/check',
        title: '充币/提币审核',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/coinCheck/index.vue'),
        // children: [
        //   {
        //     path: '/menber/register',
        //     name: 'register',
        //     icon: '',
        //     meta: { title: '推荐会员', icon: 'form' },
        //     component: () => import('@/pages/finance/page/coinCheck/index.vue'),
        //   },{
        //     path: '/menber/recommended',
        //     name: 'recommended',
        //     icon: '',
        //     meta: { title: '推荐会员', icon: 'form' },
        //     component: () => import('@/pages/finance/page/coinCheck/index.vue'),
            
        //   }
        // ]
      }, {
        path: 'finance/ledger',
        name: 'financeledger',
        title: '交易所台账管理',
        icon: '',
        hidden: false,
        component: () => import('@/pages/finance/page/ledger/index.vue'),
      }, {
        path: '/finance/coinManager',
        name: 'finance/coinManager',
        title: '充币/提币管理',
        hidden: false,
        icon: '',
        component: () => import('@/pages/finance/page/coinManager/index.vue'),
      }, 
  ]
})
