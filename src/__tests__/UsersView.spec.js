import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import UsersView from '@/views/UsersView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('UsersView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('UsersView renders properly', async () => {
        const wrapper = shallowMount(UsersView)
        // h1 contains Users
        expect(wrapper.find('h1').text()).toContain('Usuarios registrados')
    })
})
