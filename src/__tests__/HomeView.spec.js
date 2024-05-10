import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
    it('HomeView renders properly', async () => {
        const wrapper = shallowMount(HomeView)
        // h1 contains Home
        expect(wrapper.find('h1').text()).toContain('Home')
    })
})
