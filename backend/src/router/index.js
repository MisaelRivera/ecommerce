import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';
import Users from '../views/Users.vue';
import Reports from '../views/Reports.vue';
import Login from '../views/Login.vue';
import RequestPassword from '../views/RequestPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import AppLayout from '../components/AppLayout.vue';
import NotFound from '../components/NotFound.vue';
import store from '../store';


const routes = [
     {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },

            {
                path: 'products',
                name: 'app.products',
                component: Products
            },

            {
                path: 'users',
                name: 'app.users',
                component: Users
            },


            {
                path: 'reports',
                name: 'app.reports',
                component: Reports
            },
        ]
    },

    {
        path: '/login',
        name: 'login',
        meta: {
            requiresGuest: true,
        },
        component: Login
    },

    {
        path: '/request-password',
        name: 'requestPassword',
        meta: {
            requiresGuest: true,
        },
        component: RequestPassword
    },

    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        meta: {
            requiresGuest: true,
        },
        component: ResetPassword
    },

    {
        path: '/:pathMatch(.*)',
        name: 'notFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'});
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({name: 'app.dashboard'});
    } else {
        next();
    }
});

export default router;