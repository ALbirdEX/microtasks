import React from "react";

type TopCarsType = {
    manufacturer: string
    model: string
}

type CarsTabPropsType = {
    topCars: TopCarsType[]
}

export const CarsTab = (props: CarsTabPropsType) => {
    return (
        <div>
            {props.topCars.map((cars, index) => {
                return (
                    <table width="250px" border={1} bgcolor="#bdb76b">
                        <tr>
                            <th><span>{index + 1}</span></th>
                            <td width={100}><span> {cars.manufacturer}</span></td>
                            <td width={50}><span> {cars.model}</span></td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}