//前端的路由选择，在访问敏感页面前需要先验证身份





import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
        //登录页面
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login.vue')
        },
        //数据面板页面
        {
            path: '/',
            name: 'DataPanel',
            component: () => import('@/views/DataPanel.vue')
        },
        //队伍页面
        {
            path: '/team',
            name: 'Team',
            component: () => import('@/views/Team.vue')
        },
        //题目页面
        {
            path: '/challenge',
            name: 'Challenge',
            component: () => import('@/views/Challenge.vue')
        },
        //容器页面
        {
            path: '/gamebox',
            name: 'GameBox',
            component: () => import('@/views/GameBox.vue')
        },
        //docker暂时没有
        // {
        //     path: '/docker',
        //     name: 'Docker',
        //     component: () => import('@/views/Docker.vue')
        // },
        //
        // Flag管理
        {
            path: '/flag',
            name: 'Flag',
            component: () => import('@/views/Flag.vue')
        },
        //公告板
        {
            path: '/bulletin',
            name: 'Bulletin',
            component: () => import('@/views/Bulletin.vue')
        },
        //游戏大屏
        {
            path: '/asteroid',
            name: 'Asteroid',
            component: () => import('@/views/Asteroid.vue')
        },
        //webhook管理
        {
            path: '/webhook',
            name: 'WebHook',
            component: () => import('@/views/WebHook.vue')
        },
        //配置管理页面
        {
            path: '/config',
            name: 'Config',
            component: () => import('@/views/Config.vue')
        },
        //管理员页面
        {
            path: '/manager',
            name: 'Manager',
            component: () => import('@/views/Manager.vue')
        },

    ]
})
 
//路由守卫
/* router.beforeEach((to, from, next) => {
    // Router guard
    if (!localStorage.getItem('managerToken') && to.name !== 'Login') {
        next({
            name: 'Login'
        })
        return
    }
    // Login again
    if (localStorage.getItem('managerToken') && to.name === 'Login') {
        next({
            name: 'Main'
        })
        return
    }

    next()
})
 */





export default router
