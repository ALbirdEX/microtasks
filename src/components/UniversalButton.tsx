import React from "react";

type UniversalButtonPropsType = {
    name: string
    callBack: () => void
}


export const UniversalButton = (propps: UniversalButtonPropsType) => {

    const onClickHandler = () => {
        propps.callBack()
    }

    return (
        <ul>
            <button onClick={onClickHandler}>{propps.name}</button>
        </ul>
    )
}