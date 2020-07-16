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
        <div className={s.wrapper}>
            <div className={s.wrapper__div}>{props.value}</div>
            <select className={s.wrapper__sel} value={selectedText} onChange={onChangeHadler}>
                {props.items.map(i => {
                    if (i.title === 'none') return <option className={s.wrapper__item_hidden}
                                                           key={v1()}>{i.title}</option>
                    return <option className={s.wrapper__item} key={v1()}>{i.title}</option>
                })}
            </select>
        </div>
    )
}

export default Select;