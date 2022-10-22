import React from 'react';

type FuterType = {
    titleForFuter: string
}

export const Futer = (props: FuterType) => {
    return (
        <div>
            {props.titleForFuter}
        </div>
    )
}