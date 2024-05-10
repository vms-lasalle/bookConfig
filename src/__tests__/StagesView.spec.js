import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StagesView from '@/views/StagesView.vue'

describe('StagesView', () => {
    it('StagesView renders properly', async () => {
        const wrapper = shallowMount(StagesView)
        // h1 contains Stages
        expect(wrapper.find('h1').text()).toContain('Stages')
    })
})
