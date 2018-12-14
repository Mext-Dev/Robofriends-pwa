import { shallow } from 'enzyme'
import CardList from '../CardList'
import React from 'react'

describe('Card Component unit test', () => {

    it('should to match component card with snapshot', () => {
        // will matching component Card with Card Snapshot
        const mockRobots =[
            {
                id:1,
                name:'jhon cena',
                username: 'JhonJhon',
                email: 'jhon@gmail.com'
            }
        ]
        expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
    })
})