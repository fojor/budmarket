import { Routes } from '@/router';
import VueRouter from 'vue-router';

export default class NavigationService {
    static redirectTo(router: VueRouter, route: Routes) {
        if (router.currentRoute.path !== route) {
            router.push({ path: route });
        }

    }
}