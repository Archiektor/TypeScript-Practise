import React from 'react';

import './app.css';
import Select from '../select/select';
import {ItemType} from '../accordion/accordion';


const onChangeCallBack = () => alert('Smth was changed');

const items: Array<ItemType> = [{title: 'none', value: false},{title: 'BLR', value: 'Minsk'}, {title: 'RU', value: 'Moscow'}, {
    title: 'PL',
    value: 'Warsaw'
}];

const App = () => {
    return (
        <div className={'App'}>
            <Select value={'cities'} onChangeHandler={onChangeCallBack} items={items}/>
        </div>
    )
}

export default App;