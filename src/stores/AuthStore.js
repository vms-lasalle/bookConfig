import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import router from '@/router'

export const useAuthStore = defineStore('authStore', () => {
    const user = ref({})
    const error = ref(null)
    const apiUrl = 'http://slimphp.local:8888/'

    const login = (credentials) => {
        axios
            .post(apiUrl + 'api/auth/login', {
                identifier: credentials.email,
                password: credentials.password
            })
            .then((res) => {
                console.log('successful authentication', res.data)
                user.value = {
                    email: res.data.user.email,
                    token: res.data.jwt
                }
                error.value = null
                router.push({ name: 'home' })
            })
            .catch((e) => {
                console.log('error: ', e.message)
                alert('Email o contraseña incorrectos...')
                user.value = {}
                error.value = 'An error ocurred'
            })
    }

    const logout = () => {
        user.value = {}
        error.value = null
        router.replace({ name: 'login' })
    }

    return {
        user,
        error,
        apiUrl,
        login,
        logout
    }
})
