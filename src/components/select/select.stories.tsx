import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Select from './select';

export default {
    title: 'Controlled Select stories',
    component: Select,
};


/*
export const CollapsedAccordion = () => <Accordion handleClick={onClickCallBack} title={'Storybook'} collapsed={true}
                                                   items={items}/>
export const UnCollapsedAccordion = () => <Accordion handleClick={onClickCallBack} title={'Storybook'} collapsed={false}
                                                     items={items}/>

export const ChangeModeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const onClickHandler = () => setCollapsed(!collapsed);
    return <Accordion title={'Storybook'} collapsed={collapsed} changeCollapse={onClickHandler} items={items}
                      handleClick={onClickCallBack}/>
}*/
