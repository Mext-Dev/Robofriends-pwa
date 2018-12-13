import { shallow } from 'enzyme'
import Card from '../Card'
import React from 'react'

describe('',() => {
    it('expect to render Cards components', () => {
        // check total components render in Cards
        // expect(shallow(<Card/>).length).toEqual(1)
        expect(shallow(<Card/>)).toMatchSnapshot()
        
    })
})
