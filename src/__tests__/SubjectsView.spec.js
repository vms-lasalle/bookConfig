import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SubjectsView from '@/views/SubjectsView.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('SubjectsView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('SubjectsView renders properly', async () => {
        const wrapper = shallowMount(SubjectsView)
        // h1 contains Subjects
        expect(wrapper.find('h1').text()).toContain('Materias')
    })
})
