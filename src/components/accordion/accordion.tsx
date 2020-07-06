import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    onClick? : () => void,
}

const Accordion = (props: AccordionPropsType) => {
    const {title, collapsed} = props;
    return (
        <React.Fragment>
            <AccordionTitle nextLevelTitle={title}/>
            {!collapsed && <AccordionBody/>}
        </React.Fragment>
    )
}

type AccordionTitlePropsType = {
    nextLevelTitle: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const {nextLevelTitle} = props;
    return (
        <h3>--- {nextLevelTitle} ---</h3>
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

export default Accordion;