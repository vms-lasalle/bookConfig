import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import { describe, it, expect, beforeEach } from 'vitest'

describe('User Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should have a default API host', () => {
        const store = useUserStore()
        expect(store.apiHost).toEqual('http://slimphp.local')
    })

    it('should have a default API port', () => {
        const store = useUserStore()
        expect(store.apiPort).toEqual('8888')
    })
})
