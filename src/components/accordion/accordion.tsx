import React from 'react';
import {v1} from 'uuid';

export type ItemType = {
    title: string,
    value: any,
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    changeCollapse?: () => void,
    items: Array<ItemType>,
    handleClick: (value: any) => void,
}

const Accordion: React.FC<AccordionPropsType> = React.memo(({title, collapsed, changeCollapse, items, handleClick}) => {
    return (
        <React.Fragment>
            <AccordionTitle nextLevelTitle={title} changeCollapse={changeCollapse}/>
            {!collapsed && <AccordionBody handleClick={handleClick} items={items}/>}
        </React.Fragment>
    )
})

type AccordionTitlePropsType = {
    nextLevelTitle: string,
    changeCollapse?: () => void,
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = React.memo(({nextLevelTitle, changeCollapse}) => {
    return <h3 onClick={() => changeCollapse!()}> -{nextLevelTitle}- </h3>
})

type AccBodyType = {
    items: Array<ItemType>,
    handleClick: (value: any) => void,
}

const AccordionBody: React.FC<AccBodyType> = React.memo(({items, handleClick}) => {
    const renderAllItems = (items: Array<ItemType>) => {
        return items.map(i => {
            return <li onClick={() => {
                handleClick(i.value)
            }} key={v1()}>{i.title}</li>
        })
    }

    return (
        <ul>
            {renderAllItems(items)}
        </ul>
    )
})

export default Accordion;