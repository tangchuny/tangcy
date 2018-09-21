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
        name: '货币基础信息管理',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,
        children: [
            { path: '/main', component: () => import('./views/coinInfo/all.vue'), name: '货币基础信息管理'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '币地址管理',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/address', component: () => import('./views/address/all.vue'), name: '币地址管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '交易对管理',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/trade', component: () => import('./views/trade/all.vue'), name: '交易对管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '币种信息管理',
        iconCls: 'fa fa-id-card-o',
        hidden: true,
        children: [
            { path: '/user', component: () => import('./views/user/index.vue'), name: '用户中心' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;