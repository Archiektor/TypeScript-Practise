import React from "react";

type UncontrollledOnOffType = {
    onClick: (value: boolean) => void,
    working: boolean,
}

const UncontrollledOnOff: React.FC<UncontrollledOnOffType> = ({onClick, working}) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "0",
        padding: "2px",
        backgroundColor: working ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "0",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: !working ? "red" : "white",
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7.5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: working ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {onClick(true)}}>On
            </div>
            <div style={offStyle} onClick={() => {onClick(false)}}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrollledOnOff;