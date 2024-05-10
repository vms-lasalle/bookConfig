import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('User Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should have an API URL', () => {
        const userStore = useUserStore()
        expect(userStore.apiUrl).toEqual('http://slimphp.local:8888/')
    })

    /*     it('should login correctly', async () => {
        const userStore = useUserStore()
        userStore.login('vmsanchez@lasallegranvia.es', 'pasar')
        console.log(userStore.loginData)
        expect(userStore.loginData.userMail).toBe('vmsanchez@lasallegranvia.es')
    }) */
})
