import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";




const routes = [ // Where routes are defined
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword
    },
    {
        path: '/reset-password/token',
        name: 'reset-password',
        component: ResetPassword
    },
];

const router = createRouter({
    history: createWebHistory(), // example: domain.com/users 
    routes
})

export default router;