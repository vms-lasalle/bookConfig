import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
    const userMail = ref(null)
    const token = ref(null)
    const error = ref(null)
    const apiUrl = 'http://slimphp.local:8888/'

    const loginData = computed({
        get() {
            return {
                userMail: userMail.value,
                token: token.value,
                error: error.value
            }
        }
    })

    async function login(email, password) {
        try {
            const res = await axios.post(apiUrl + 'api/auth/login', {
                identifier: email,
                password: password
            })
            if (res.data.success) {
                userMail.value = res.data.user.email
                token.value = res.data.jwt
                error.value = null
            } else {
                userMail.value = null
                token.value = null
                error.value = res.data.message
            }
        } catch (e) {
            userMail.value = null
            token.value = null
            error.value = 'An error ocurred'
        }
    }

    return {
        loginData,
        apiUrl,
        login
    }
})
