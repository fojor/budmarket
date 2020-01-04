import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/offers/create',
        name: 'offers-create',
        component: () => import('../views/offers/create.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
