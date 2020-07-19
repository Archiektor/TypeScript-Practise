import React, {useState} from "react";

type OnOffType = {
    onClick?: () => void,
    defaultOn?: boolean,
}

const OnOff: React.FC<OnOffType> = React.memo((props) => {
    const [work, setWork] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "0",
        padding: "2px",
        backgroundColor: work ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "0",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: !work ? "red" : "white",
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7.5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: work ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setWork(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setWork(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
})

export default OnOff;