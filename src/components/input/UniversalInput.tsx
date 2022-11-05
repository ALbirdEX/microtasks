import React, {useState} from 'react';
import {Input} from "./Input";
import {Button2} from "./Button2";

export function UniversalInput() {

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("")
    console.log(title)


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHundler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <ul>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button2 name={"+"} callBack={callBackButtonHundler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </ul>
    )
}
