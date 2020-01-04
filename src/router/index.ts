import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

export enum Routes {
    Home = '/',
    OffersCreate = '/offers/create',
    Profile = '/profile'
}

const routesConfig = [
    {
        path: Routes.Home,
        component: Home
    },
    {
        path: Routes.OffersCreate,
        component: () => import('../views/offers/create.vue')
    },
    {
        path: Routes.Profile,
        component: () => import('../views/profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routesConfig
})

export default router
