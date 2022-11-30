import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import NotFound from "../views/NotFound.vue";





const routes = [ // Where routes are defined
    {
        path: '/app',
        name: 'AppLayout',
        component: AppLayout,
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword
    },
    {
        /* If the previous paths did not match anything, then everything else (.*) will enter this route (not found page) */
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(), // example: domain.com/users 
    routes
})

export default router;