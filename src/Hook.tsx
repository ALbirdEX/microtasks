import React, {useState} from 'react';

export const Hook = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
    }
    const onClickHandler2 = () => {
        setA(a = 0)
    }

    return (
        <ul>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickHandler2}>0</button>

        </ul>
    )
}
