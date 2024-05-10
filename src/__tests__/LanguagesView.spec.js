import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LanguagesView from '@/views/LanguagesView.vue'

describe('LanguagesView', () => {
    it('LanguagesView renders properly', async () => {
        const wrapper = shallowMount(LanguagesView)
        // h1 contains Languages
        expect(wrapper.find('h1').text()).toContain('Languages')
    })
})
