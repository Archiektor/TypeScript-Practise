import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import OnOff from "./onoff";

export default {
    title: 'Controlled OnOff stories',
    component: OnOff,
};

export const DefaultOn = () => <OnOff defaultOn={true} onClick={action("on or off clicked")}/>
export const DefaulOff = () => <OnOff  defaultOn={false} onClick={action("on or off clicked")}/>

