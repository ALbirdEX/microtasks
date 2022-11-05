import React from 'react';

type Button2PropsType = {
    name: string,
    callBack: ()=>void
}

export const Button2 = (props: Button2PropsType) => {

    const onClickButtonHandler =()=>{
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}