import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StagesView from '@/views/StagesView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('StagesView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('StagesView renders properly', async () => {
        const wrapper = shallowMount(StagesView)
        // h1 contains Stages
        expect(wrapper.find('h1').text()).toContain('Niveles educativos')
    })
})
