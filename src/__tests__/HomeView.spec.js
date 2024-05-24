import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('HomeView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('HomeView renders properly', async () => {
        const wrapper = shallowMount(HomeView)
        // h1 contains Home
        expect(wrapper.find('h1').text()).toContain('Bienvenido')
    })
})
