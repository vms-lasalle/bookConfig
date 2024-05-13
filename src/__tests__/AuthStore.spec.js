import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/stores/AuthStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('User Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should have an API URL', () => {
        const userStore = useAuthStore()
        expect(userStore.apiUrl).toEqual('http://slimphp.local:8888/')
    })

    /*     it('should login correctly', async () => {
        const userStore = useUserStore()
        userStore.login('vmsanchez@lasallegranvia.es', 'pasar')
        console.log(userStore.loginData)
        expect(userStore.loginData.userMail).toBe('vmsanchez@lasallegranvia.es')
    }) */
})
