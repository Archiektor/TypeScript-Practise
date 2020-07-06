import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Input",
    // component: input,
}

export const UncontrolledInput = () => <input type="text"/>;
export const TrackingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler}/>
            {`actual value: ${value}`}
        </div>
    )
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (

        <React.Fragment>
            <input ref={inputRef} type="text"/>
            <button onClick={onClickHandler}>save</button>
            {`actual value: ${value}`}
        </React.Fragment>
    )
};

// ################# Controlled Components

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <input type="text" value={parentValue} onChange={onChangehandler}/>
    )
};
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false);

    const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }

    return (
        <input type="checkbox" checked={parentValue} onChange={onChangehandler}/>
    )
};
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChangehandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <select value={parentValue} onChange={onChangehandler}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    )
};

