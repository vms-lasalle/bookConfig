import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import { createPinia } from 'pinia'

import { useAuthStore } from '@/stores/AuthStore'

const app = createApp(App)

router.beforeEach((to) => {
    const authStore = useAuthStore()

    const isAuthenticated = authStore.user.token ? true : false

    if (isAuthenticated && to.name === 'login') {
        return { name: 'home' }
    }

    if (!isAuthenticated && to.name !== 'login') {
        return { name: 'login' }
    }
})

app.use(router)
app.use(createPinia())

app.mount('#app')
