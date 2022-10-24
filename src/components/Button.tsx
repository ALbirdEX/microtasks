import React, {MouseEvent} from "react";

export const Button = () => {
    /*
        const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
            console.log(prompt("Как твои дела Vasya"))
        }
        const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
            console.log(prompt("My name is Ivan?", "What is you name?"))
        }
    */

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (numButton: number) => {
        console.log(numButton)
    }
    return (
        <ul>
            <button onClick={(event) => onClickHandler("Ivan")}>MyYouTubeSubscriber-1</button>
            <button onClick={(event) => onClickHandler("Pavel")}>MyYouTubeSubscriber-2</button>
            <div>
                <button onClick={foo1}>1</button>
            </div>
            <div>
                <button onClick={(event) => foo2(200100)}>2</button>
            </div>
        </ul>
    )
}