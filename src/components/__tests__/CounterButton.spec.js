import { shallow } from 'enzyme'
import CounterButtom from '../CounterButton.js'
import React from 'react'

describe('Card Component unit test', () => {

    it('expect to render CounterButton components', () => {
        // check total components render in Cards
        expect(shallow(<CounterButtom/>).length).toEqual(1)
        
    })

    it('should to match component CounterButtom with snapshot', () => {
        // will matching component Card with Card Snapshot
        expect(shallow(<CounterButtom/>)).toMatchSnapshot()
    })
})