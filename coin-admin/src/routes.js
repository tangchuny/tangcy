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
        name: '会员管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: () => import('./views/member/register.vue'), name: '注册会员'},
            { path: '/table',  component: () => import('./views/member/recommend.vue'), name: '推荐会员' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '信息发布',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/info', component: () => import('./views/infomation/info.vue'), name: '站内信息' },
            { path: '/news', component: () => import('./views/infomation/news.vue'), name: '资讯管理' },
            { path: '/help', component: () => import('./views/infomation/help.vue'), name: '帮助中心' },
            { path: '/footer', component: () => import('./views/infomation/footer.vue'), name: '网页底部信息' },
            { path: '/banner', component: () => import('./views/infomation/banner.vue'), name: 'Banner发布' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/workorder', component: () => import('./views/workorder/index.vue'), name: '工单管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/online', component: () => import('./views/online/index.vue'), name: '在线客服' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/base', component: () => import('./views/base/index.vue'), name: '基础数据' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;