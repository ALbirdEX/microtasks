import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Futer} from "./site/Futer";
import {NewComponents} from "./NewComponents";
import {students, topCars} from "./database";
import {CarsTab} from "./CarsTab";
import {Button} from "./Button";


function App() {
    return (
        <>
            <Header title={"NEW HADER"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Futer titleForFuter={"NEW FUTER"}/>
            <NewComponents students={students}/>
            <CarsTab topCars={topCars}/>
            <Button/>
        </>
    );
}

export default App;
