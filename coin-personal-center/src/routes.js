import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '个人中心',
        hidden: true,
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,
        children: [
            { path: '/asset', component: () => import('./views/asset/index.vue'), name: '资产管理'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '个人中心',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        hidden: true,
        children: [
            { path: '/entrust', component: () => import('./views/entrust/index.vue'), name: '委托管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '个人中心',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        hidden: true,
        children: [
            { path: '/user', component: () => import('./views/user/index.vue'), name: '用户中心' },
            { path: '/address', component: () => import('./views/user/address.vue'), name: '地址管理' },
            { path: '/invite', component: () => import('./views/user/invite.vue'), name: '我的邀请码' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '交易中心',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/trade', component: () => import('./views/trade/index.vue'), name: '交易中心' },
        ]
    },

   
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;