import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrollledOnOff from "./UncontrollledOnOff";

export default {
    title: 'Uncontrolled OnOff stories',
    component: UncontrollledOnOff,
};

export const DefaultUncontrollledOnOff = () => {
    const [working, setWorking] = useState<boolean>(false)
    return <UncontrollledOnOff onClick={() => setWorking(!working)} working={working}/>
}

