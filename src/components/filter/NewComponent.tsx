import React from 'react';
import {FilterType} from "./FilterComponents";

type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

type NewComponentPropsType = {
    currentMoney: Array<CurrentMoneyType>
    filteredMoney: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentPropsType) => {
    /*const onClickHandler = () => {
      props.callBack()
    }*/
    return (
        <>
            <ol>
                {props.currentMoney.map((objFromMonneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMonneyArr.banknots}</span>
                            <span>{objFromMonneyArr.value}</span>
                            <span>{objFromMonneyArr.number}</span>
                        </li>
                    )
                })}
            </ol>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => {
                    props.filteredMoney("all")
                }}>all
                </button>
                <button onClick={() => {
                    props.filteredMoney("RUBLS")
                }}>RUBLS
                </button>
                <button onClick={() => {
                    props.filteredMoney("Dollars")
                }}>Dollars
                </button>
            </div>
        </>
    )
}