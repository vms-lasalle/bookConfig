import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('LoginView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('LoginView renders properly', () => {
        const wrapper = mount(LoginView)
        expect(wrapper.text()).toContain('Login')
    })
})
