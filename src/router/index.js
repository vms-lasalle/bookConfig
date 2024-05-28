import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/AuthStore'

const routes = [
    {
        path: '/backendconfig/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/backendconfig/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/backendconfig/users',
        name: 'users',
        component: () => import('@/views/UsersView.vue')
    },
    {
        path: '/backendconfig/roles',
        name: 'roles',
        component: () => import('@/views/RolesView.vue')
    },
    {
        path: '/backendconfig/stages',
        name: 'stages',
        component: () => import('@/views/StagesView.vue')
    },
    {
        path: '/backendconfig/subjects',
        name: 'subjects',
        component: () => import('@/views/SubjectsView.vue')
    },
    {
        path: '/backendconfig/languages',
        name: 'languages',
        component: () => import('@/views/LanguagesView.vue')
    },
    {
        path: '/backendconfig/:pathMatch(.*)*',
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
