import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import OnOff from "./onoff";

export default {
    title: 'Controlled OnOff stories',
    component: OnOff,
};

export const DefaultOnOff = () => <OnOff onClick={action("on or off clicked")}/>

