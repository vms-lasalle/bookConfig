import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
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
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
