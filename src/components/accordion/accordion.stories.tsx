import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./accordion";

export default {
    title: 'Controlled Accordion stories',
    component: Accordion,
};

export const CollapsedAccordion = () => <Accordion title={"Storybook"} collapsed={true}/>
export const UnCollapsedAccordion = () => <Accordion title={"Storybook"} collapsed={false}/>

/*export const ChangeModeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion title={"Storybook"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
}*/

