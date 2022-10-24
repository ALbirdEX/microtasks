import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Futer} from "./site/Futer";
import {NewComponents} from "./components/NewComponents";
import {students, topCars} from "./database";
import {CarsTab} from "./components/CarsTab";
import {Button} from "./components/Button";
import {UniversalButton} from "./components/UniversalButton";
import {Hook} from "./Hook";


function App() {

    const Button1Foo = (name: string, age: number, address: string) => {
        console.log(`i am ${name}, age ${age} ${address}`)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        alert(subscriber + " " + age)
    }

    const Button3Foo = () => {
        console.log("I am  dumb button")
    }

    return (
        <>
            <Header title={"NEW HADER"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Futer titleForFuter={"NEW FUTER"}/>
            <NewComponents students={students}/>
            <CarsTab topCars={topCars}/>
            <Button/>
            <UniversalButton name={"MyYouTubeChanel-1"} callBack={() => Button1Foo('Sanay', 21, "live in Minsk")}/>
            <UniversalButton name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Petr", 32)}/>
            <UniversalButton name={"Dumb button"} callBack={Button3Foo}/>
            <Hook/>
        </>
    );
}

export default App;
