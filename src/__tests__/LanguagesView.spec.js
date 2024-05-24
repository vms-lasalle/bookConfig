import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LanguagesView from '@/views/LanguagesView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('LanguagesView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('LanguagesView renders properly', async () => {
        const wrapper = shallowMount(LanguagesView)
        // h1 contains Languages
        expect(wrapper.find('h1').text()).toContain('Idiomas')
    })
})
