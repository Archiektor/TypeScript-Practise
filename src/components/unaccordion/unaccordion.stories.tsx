import React, {useState} from 'react';
import UnAccordion from "./unaccordion";

export default {
    title: 'UnControlled Accordion stories',
    component: UnAccordion,
};

export const CollapsedUnaccordion = () => <UnAccordion collapsed={true} title={"Menu"} onClick={a => a}/>
export const UnCollapsedUnaccordion = () => <UnAccordion collapsed={false} title={"Stories"} onClick={a => a}/>

export const ChangeModeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <UnAccordion title={"Storybook"} collapsed={collapsed} onClick={setCollapsed}/>
}