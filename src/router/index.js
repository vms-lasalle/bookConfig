import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/AuthStore'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('@/views/UsersView.vue')
    },
    {
        path: '/stages',
        name: 'stages',
        component: () => import('@/views/StagesView.vue')
    },
    {
        path: '/subjects',
        name: 'subjects',
        component: () => import('@/views/SubjectsView.vue')
    },
    {
        path: '/languages',
        name: 'languages',
        component: () => import('@/views/LanguagesView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const authStore = useAuthStore()

    const isAuthenticated = authStore.user.token ? true : false

    if (isAuthenticated && to.name === 'login') {
        return { name: 'home', query: to.query, hash: to.hash }
    }

    if (!isAuthenticated && to.name !== 'login') {
        return { name: 'login' }
    }
})

export default router
