import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import { describe, it, expect, beforeEach } from 'vitest'

describe('User Store', () => {
    let store

    beforeEach(() => {
        setActivePinia(createPinia())
        store = useUserStore()
    })

    it('should have a default API host', () => {
        expect(store.apiHost).toEqual('http://slimphp.local')
    })

    it('should have a default API port', () => {
        expect(store.apiPort).toEqual('8888')
    })

    it('should have a computed API URL', () => {
        expect(store.apiUrl).toEqual('http://slimphp.local:8888/')
    })
})
