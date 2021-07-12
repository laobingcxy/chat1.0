import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        // path: '/',
        // name: 'chat',
        // component: () => import('../views/Chat.vue')
        path: '/',
        name: 'talk',
        component: () => import('../views/Talk.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
