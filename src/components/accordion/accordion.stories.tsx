import React, {useState} from 'react';
import Accordion, {ItemType} from './accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Controlled Accordion stories',
    component: Accordion,
};

const items: Array<ItemType> = [{title: 'Films', value: 'LOTR'}, {title: 'Music', value: 'Nightwish'}, {
    title: 'Books',
    value: 'Learn React'
}];
const onClickCallBack = action('some item was clicked');

export const CollapsedAccordion = () => <Accordion handleClick={onClickCallBack} title={'Storybook'} collapsed={true}
                                                   items={items}/>
export const UnCollapsedAccordion = () => <Accordion handleClick={onClickCallBack} title={'Storybook'} collapsed={false}
                                                     items={items}/>

export const ChangeModeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const onClickHandler = () => setCollapsed(!collapsed);
    return <Accordion title={'Storybook'} collapsed={collapsed} changeCollapse={onClickHandler} items={items}
                      handleClick={onClickCallBack}/>
}

