import {Action, ActionsType, StateType} from './unaccordion';

export const reducer = (partOfState: StateType, action: ActionsType): StateType => {
    // console.log("in reducer");
    switch (action.type) {
        case Action.TOGGLE_COLLAPSED: {
            return {...partOfState, collapsed: action.collapsed}
        }
        default:
            throw new Error('Bad action type');
    }
}