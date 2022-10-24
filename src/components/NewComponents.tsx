import React from "react";

type NewComponentsType = {
    students: Array<StudentType> //StudentType[]
}

type StudentType = {

    id: number
    name: string
    age: number
}


export const NewComponents = (props: NewComponentsType) => {
    return (
        <ul>
            <>{props.students.map((objFromStudentArr, index) => {
                return (
                    <li key={objFromStudentArr.id}>
                        <span>{objFromStudentArr.name}</span>
                        <span> age: {objFromStudentArr.age}</span>
                    </li>
                )
            })}</>
        </ul>
    )
}