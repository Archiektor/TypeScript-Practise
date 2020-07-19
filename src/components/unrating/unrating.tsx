import React, {useState} from "react";

type StarPropsType = {
    selected: boolean,
    setValue: () => void,
}

const Star = (props: StarPropsType) => {
    return (
        <span onClick={() => props.setValue()}>{props.selected ? <b> star</b> : " star"}</span>
    )
}

const UncontolledRating = React.memo(() => {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star setValue={() => {setValue(1)}} selected={value > 0}/>
            <Star setValue={() => {setValue(2)}} selected={value > 1}/>
            <Star setValue={() => {setValue(3)}} selected={value > 2}/>
            <Star setValue={() => {setValue(4)}} selected={value > 3}/>
            <Star setValue={() => {setValue(5)}} selected={value > 4}/>
        </div>
    )
})

export default UncontolledRating;
