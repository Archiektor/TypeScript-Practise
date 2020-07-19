import React, {useReducer} from 'react';
import {reducer} from './reducer';

export enum Action {
    TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED',
}

export type StateType = {
    collapsed: boolean,
}

type setCollapsedACType = { type: typeof Action.TOGGLE_COLLAPSED, collapsed: boolean };

export const setCollapsed = (collapsed: boolean): setCollapsedACType => ({type: Action.TOGGLE_COLLAPSED, collapsed});

export type ActionsType = setCollapsedACType;

const initialState: StateType = {
    collapsed: false,
}

type UnAccordionPropsType = {
    title: string,
}

const UncontrolledAccordion: React.FC<UnAccordionPropsType> = React.memo(({title}) => {
    // console.log("component render");

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <React.Fragment>
            <AccordionTitle nextLevelTitle={title} onClick={() => dispatch(setCollapsed(!state.collapsed))}/>
            {!state.collapsed && <AccordionBody/>}
        </React.Fragment>
    )
})


type AccordionTitlePropsType = {
    nextLevelTitle: string,
    onClick: () => void,
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = React.memo((props) => {
    const {nextLevelTitle} = props;
    return (
        <h3 onClick={() => props.onClick()}>--- {nextLevelTitle} ---</h3>
    )
})

const AccordionBody = React.memo(() => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
})

export default UncontrolledAccordion;
