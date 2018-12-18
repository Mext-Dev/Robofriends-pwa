import { shallow, mount } from 'enzyme'
import React from 'react'
import * as Action from '../actions'

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from '../constants';
// import * as Action from '../api/api';

describe('Redux Actions', () => {

    const ctx = 'Hello'
    const expectedAction ={
        type: CHANGE_SEARCHFIELD,
        payload: ctx
    }
    
    const url ='https://jsonplaceholder.typicode.com/users'
    
    it('should create an action to search robots', () => {
        expect(Action.setSearchField(ctx)).toEqual(expectedAction)
    })

    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(Action.requestRobots())
        const action =store.getActions();
        const expectedAction ={
            type: REQUEST_ROBOTS_PENDING
        }

        expect(action[0]).toEqual(expectedAction)
    })
})