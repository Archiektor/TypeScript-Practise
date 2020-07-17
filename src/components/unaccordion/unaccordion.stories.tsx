import React from 'react';
import UncontrolledAccordion from './unaccordion';

export default {
    title: 'UnControlled Accordion stories',
    component: UncontrolledAccordion,
};

export const CollapsedUnaccordion = () => <UncontrolledAccordion title={"Menu"}/>
export const UnCollapsedUnaccordion = () => <UncontrolledAccordion title={"Stories"}/>

export const ChangeModeAccordion = () => {
    return <UncontrolledAccordion title={"Storybook"}/>
}
