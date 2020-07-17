import {setCollapsed, StateType} from './unaccordion';
import {reducer} from './reducer';


describe('reducer work correct', () => {
    test('should be collapsed=true', () => {
        //data
        const state: StateType = {
            collapsed: false
        }
        //action
        const newState = reducer(state, setCollapsed(true));
        //expectation
        expect(newState.collapsed).toBe(true);
    })

    test('should be collapsed=false', () => {
        //data
        const state: StateType = {
            collapsed: false
        }
        //action
        const newState = reducer(state, setCollapsed(false));
        //expectation
        expect(newState.collapsed).toBe(false);
    })

    test('should be error', () => {
        //data
        const state: StateType = {
            collapsed: false
        }
        //action
        //expectation
        expect(() => {
            // @ts-ignore
            reducer(state, {type: 'FAKE', collapsed: false})
        }).toThrowError()
    })
})