import React, {ChangeEvent, useState} from 'react';
import {ItemType} from '../accordion/accordion';
import {v1} from 'uuid';
import s from './select.module.scss';

type SelectPropsType = {
    value: any,
    onChangeHandler: () => void,
    items: Array<ItemType>,
}

const Select: React.FC<SelectPropsType> = (props) => {
    const [selectedText, setSelectedText] = useState<string>(props.value);

    const onChangeHadler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedText(e.currentTarget.value);
    }
    return (
        <div className={s.wrapperSelect}>
            <h3 className={s.wrapperSelect__div}>{props.value}</h3>
            <select className={s.wrapperSelect__sel} value={selectedText} onChange={onChangeHadler}>
                {props.items.map(i => {
                    if (i.title === 'none') return <option className={s.wrapperSelect__item_hidden}
                                                           key={v1()}>{i.title}</option>
                    return <option className={s.wrapperSelect__item} key={v1()}>{i.title}</option>
                })}
            </select>
        </div>
    )
}

export default Select;