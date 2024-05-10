import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SubjectsView from '@/views/SubjectsView.vue'

describe('SubjectsView', () => {
    it('SubjectsView renders properly', async () => {
        const wrapper = shallowMount(SubjectsView)
        // h1 contains Subjects
        expect(wrapper.find('h1').text()).toContain('Subjects')
    })
})
