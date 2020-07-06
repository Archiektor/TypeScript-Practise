import React from "react";

export const AppTitle = (props: any) => {
    const {title} = props;
    return (
        <h1>
            {title}
        </h1>
    )
}