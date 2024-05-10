import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import UsersView from '@/views/UsersView.vue'

describe('UsersView', () => {
    it('UsersView renders properly', async () => {
        const wrapper = shallowMount(UsersView)
        // h1 contains Users
        expect(wrapper.find('h1').text()).toContain('Users')
    })
})
