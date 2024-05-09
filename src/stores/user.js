import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
    const user = ref(null)
    const token = ref(null)
    const error = ref(null)
    const apiHost = 'http://slimphp.local'
    const apiPort = '8888'

    const apiUrl = computed(() => this.apiHost + ':' + this.apiPort + '/')

    async function login(email, password) {
        axios
            .post(this.apiUrl + 'api/auth/login', {
                identifier: email,
                password: password
            })
            .then((response) => {
                console.log('login correct')
                user.value = response.data.user
                token.value = response.data.jwt
                error.value = null
            })
            .catch((e) => {
                error.value = 'An error ocurred: ' + e.response
            })
    }

    return { user, token, error, apiHost, apiPort, apiUrl, login }
})
