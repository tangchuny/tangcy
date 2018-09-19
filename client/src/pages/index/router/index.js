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
        component: () => import('@/pages/index/page/member/member-info.vue'),
      },
   {
        path: '/member',
        name: 'member',
        title: '会员管理',
        hidden: false,
        icon: '',
        children: [
          {
            path: '/menber/register',
            name: 'register',
            icon: '',
            component: registration,
            meta: { title: '会员注册', icon: 'form' }
          },{
            path: '/menber/recommended',
            name: 'recommended',
            icon: '',
            component: HelloWorld,
            meta: { title: '推荐会员', icon: 'form' }
          }
        ]
      },{
        path: '/info',
        name: 'info',
        title: '信息发布',
        icon: '',
        hidden: false,
        children: [
          {
            path: '/info/inner',
            name: 'info/inner',
            icon: '',
            component: registration,
            meta: { title: '站内信息', icon: 'form' }
          },{
            path: '/info/news',
            name: 'info/news',
            icon: '',
            component: HelloWorld,
            meta: { title: '资讯管理', icon: 'form' }
          },{
            path: '/info/help',
            name: 'info/help',
            icon: '',
            component: HelloWorld,
            meta: { title: '帮助中心', icon: 'form' }
          }, {
            path: '/info/footer',
            name: 'info/footer',
            icon: '',
            component: HelloWorld,
            meta: { title: '网页底部信息', icon: 'form' }
          }, {
            path: '/info/banner',
            name: 'info/banner',
            icon: '',
            component: HelloWorld,
            meta: { title: 'Banner发布', icon: 'form' }
          }
        ]
      }, {
        path: '/worder/order',
        name: 'worder/order',
        title: '工单管理',
        icon: '',
        hidden: false,
        component: HelloWorld
      }, {
        path: '/online/service',
        name: 'online/service',
        title: '在线客服',
        icon: '',
        component: registration
      }, {
        path: '/base',
        name: 'base',
        title: '基础数据',
        hidden: false,
        icon: '',
        component: HelloWorld
      },
  ]
})
