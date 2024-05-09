import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
    it('renders properly', () => {
        const wrapper = mount(LoginForm)
        expect(wrapper.text()).toContain('Login')
    })
})
