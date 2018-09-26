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
        name: '交易中心',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,
        children: [
            { path: '/main', component: () => import('./views/member/register.vue'), name: '交易中心'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '咨询服务',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/banner', component: () => import('./views/infomation/banner.vue'), name: '咨询服务' },
        ]
    },
   
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;