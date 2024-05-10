import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
    const userMail = ref(null)
    const token = ref(null)
    const error = ref(null)
    const apiHost = 'http://slimphp.local'
    const apiPort = '8888'

    const apiUrl = computed({
        get() {
            return apiHost + ':' + apiPort + '/'
        }
    })

    async function login(email, password) {
        try {
            let response = await axios.post(apiUrl.value + 'api/auth/login', {
                identifier: email,
                password: password
            })
            console.log('login correct')
            userMail.value = response.data.user
            token.value = response.data.jwt
        } catch (e) {
            error.value = 'An error ocurred: ' + e.response
        }
    }

    return {
        userMail,
        token,
        error,
        apiHost,
        apiPort,
        apiUrl,
        login
    }
})
