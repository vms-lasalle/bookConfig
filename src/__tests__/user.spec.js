import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import { describe, it, expect, beforeEach } from 'vitest'

describe('User Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should have a default API host', () => {
        const userStore = useUserStore()
        expect(userStore.apiHost).toEqual('http://slimphp.local')
    })

    it('should have a default API port', () => {
        const userStore = useUserStore()
        expect(userStore.apiPort).toEqual('8888')
    })

    it('should have a computed API URL', () => {
        const userStore = useUserStore()
        expect(userStore.apiUrl).toEqual('http://slimphp.local:8888/')
    })

    /*     it('should login correctly', async () => {
        const userStore = useUserStore()
        userStore.login('vmsanchez@lasallegranvia.es', 'pasar')
        expect(userStore.token).toBeNull()
    }) */
})
