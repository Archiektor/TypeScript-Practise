import React from "react";

type AccordionTitlePropsType = {
    nextLevelTitle: string,
    onClick: () => void,
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const {nextLevelTitle} = props;
    return (
        <h3 onClick={() => props.onClick()}>--- {nextLevelTitle} ---</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


type UnAccordionPropsType = {
    title: string,
    onClick: (value: boolean) => void,
    collapsed: boolean,
}

const UnAccordion: React.FC<UnAccordionPropsType> = ({title, onClick, collapsed}) => {
    return (
        <React.Fragment>
            <AccordionTitle nextLevelTitle={title} onClick={() => onClick(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </React.Fragment>
    )
}

export default UnAccordion;
