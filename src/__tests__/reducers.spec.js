import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from '../constants';

   import * as reducers from '../reducers';

describe('test SearchRobots', () => {
    const initialState ={
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
    })
    
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialState, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'})
    })
})

describe('test RequestRobots', () => {
    const initiaRobots = {
        robots: [],
        isPending: false
    }

    it('should return the initial state', () => {
        const mockReducers = reducers.requestRobots(undefined, {})
        expect(mockReducers).toEqual(initiaRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initiaRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initiaRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.co.id'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.co.id'
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initiaRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error 404'
        })).toEqual({
            error: 'error 404',
            robots: [],
            isPending: false
        })
    })
})