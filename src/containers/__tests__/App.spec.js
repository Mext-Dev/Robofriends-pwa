import { shallow, mount } from 'enzyme'
import React from 'react'
import App from '../App';
import {mapStateToProps, mapDispatchToProps} from '../App';

import configureMockStore from 'redux-mock-store'

describe('Components <App/>', () => {
    const mockStore = configureMockStore()

    const mockRobots =[
        {
            id:1,
            name:'jhon cena',
            username: 'JhonJhon',
            email: 'jhon@gmail.com'
        }
    ];
    const mockSearch = 'a';
    const store_mock = mockStore({ searchRobots: { searchField: '' }, requestRobots: { robots:mockRobots, isPending:true }})
    
    const wrapper = (shallow(<App store={store_mock} />)).dive();
    const mountWrapper = mount(<App store={store_mock} />);

    it('should match component App to Snapshot', () => {
        
        expect(wrapper).toMatchSnapshot()
    })

    it('should return Component CardList if state true', () => {
        
        expect(mountWrapper.find('ErrorBoundry'));
    })

    it('should correctly filters' ,() => {
        expect(wrapper.instance().filteredRobots()).toEqual(mockRobots)
    })

    // it('should text onchange dispatch', () => {
    //     const dispatch = jest.fn();

    //     mapDispatchToProps(dispatch).onSearchChange();
    //     expect(dispatch.mock.calls[0][0]).toEqual({type: 'CHANGE_SEARCHFIELD'})
    // })
})