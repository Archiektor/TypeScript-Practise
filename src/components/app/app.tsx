import React, {useState} from "react";

import "./app.css";
import UnAccordion from "../unaccordion/unaccordion";
import {RatingValueType} from "../rating/rating";
import UncontolledRating from "../unrating/unrating"
import UncontrollledOnOff from "../unonoff/UncontrollledOnOff";

const App = () => {
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0);e
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let [working, setWorking] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <UnAccordion title={"Main Page"} onClick={setCollapsed} collapsed={collapsed}/>
            <UncontrollledOnOff onClick={setWorking} working={working}/>
        </div>
    )
}

export default App;