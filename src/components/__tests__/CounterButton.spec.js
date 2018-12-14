import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from '../CounterButton';

describe('Card Component unit test', () => {

    it('should to match component card with snapshot', () => {
        const mockColor = 'red'
        expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
    })

    it('correctly increments counter', () => {
        const mockColor = 'red'
        const wrapper = shallow(<CounterButton color={mockColor}/>)

        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count : 3 });
        wrapper.find('[id="counter"]').simulate('keypress');
        expect(wrapper.props().color).toEqual('red')
    })
})