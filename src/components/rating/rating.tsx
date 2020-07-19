import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type StarPropsType = {
    onClick: (value: RatingValueType) => void,
    selected: boolean,
    value: RatingValueType,
}

const Star: React.FC<StarPropsType> = React.memo((props) => {
    return (
        <span onClick={() => {props.onClick(props.value)}}>{props.selected ? <b> star</b> : " star"}</span>
    )
})

type RatingPropsType = {
    value: RatingValueType,
    onClick: (value: RatingValueType) => void,
}


const Rating: React.FC<RatingPropsType> = React.memo((props) => {
    const {value} = props;

    return (
        <div>
            <Star onClick={props.onClick} value={1} selected={value > 0}/>
            <Star onClick={props.onClick} value={2} selected={value > 1}/>
            <Star onClick={props.onClick} value={3} selected={value > 2}/>
            <Star onClick={props.onClick} value={4} selected={value > 3}/>
            <Star onClick={props.onClick} value={5} selected={value > 4}/>
        </div>
    )
})

export default Rating;