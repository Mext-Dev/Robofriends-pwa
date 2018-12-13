import { shallow } from 'enzyme'
import Card from '../Card'
import React from 'react'

describe('Card Component unit test', () => {
    it('expect to render Cards components', () => {
        // check total components render in Cards
        expect(shallow(<Card/>).length).toEqual(1)
        
    })

    it('should to match component card with snapshot', () => {
        // will matching component Card with Card Snapshot
        expect(shallow(<Card/>)).toMatchSnapshot()
    })
})
