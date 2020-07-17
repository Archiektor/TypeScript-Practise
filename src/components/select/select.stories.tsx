import React from 'react';
import Select from './select';
import {ItemType} from '../accordion/accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Controlled Select stories',
    component: Select,
};

const onChangeCallBack = () => alert('Smth was changed');
const items: Array<ItemType> = [
    {title: 'none', value: false},
    {title: 'BLR', value: 'Minsk'}, {
        title: 'RU', value: 'Moscow'
    }, {
        title: 'PL', value: 'Warsaw'
    }
];

export const withValue = () => {
    return <Select value={'countries'} onChangeHandler={action('Smth changed')} items={items}/>
}
export const withoutValue = () => {
    return <Select value={null} onChangeHandler={action('Smth changed')} items={items}/>
}

