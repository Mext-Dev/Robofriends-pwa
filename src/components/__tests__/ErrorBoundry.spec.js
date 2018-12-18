import { shallow, mount } from 'enzyme'
import React from 'react'
import ErrorBoundry from '../ErrorBoundry'
import CardList from '../CardList'

describe('Component <ErrorBoundry/>', () => {

    const mockRobots =[{
        id:1,
        name:'jhon cena',
        username: 'JhonJhon',
        email: 'jhon@gmail.com'
    }]
    
    const cardlistWrap = <CardList robots={mockRobots}/>

    const wrapper = shallow(<ErrorBoundry children={cardlistWrap}/>).dive()
    const mountWrapper = mount(<ErrorBoundry children={cardlistWrap}/>)

    it('should to match component with snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    it('should render props children', () => {
        expect(mountWrapper.props().children).toEqual(cardlistWrap);
        // expect(mountWrapper.props().children).toEqual(<h1>Something went wrong.</h1>);
    })
})