import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = "all" | "Dollars" | "RUBLS"

export const FilterComponents = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

     let currentMoney = money;
     if (filter === "Dollars") {
         currentMoney = money.filter((filterdMoney) => filterdMoney.banknots === 'Dollars')
     }
     if (filter === "RUBLS") {
         currentMoney = money.filter((filterdMoney) => filterdMoney.banknots === 'RUBLS')
     }


   /* let currentMoney = filter === "all" ? money :
        money.filter(filter === "Dollars" ? ((filtMoney) => filtMoney.banknots === 'Dollars') :
            ((filtMoney) => filtMoney.banknots === 'RUBLS'))
*/
    const filteredMoney = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent currentMoney={currentMoney}
                      filteredMoney={filteredMoney}/>
        /*  <>
              <ul>
                  {currentMoney.map((objFromMonneyArr, index) => {

                      return (
                          <li key={index}>
                              <span>{objFromMonneyArr.banknots}</span>
                              <span>{objFromMonneyArr.value}</span>
                              <span>{objFromMonneyArr.number}</span>
                          </li>
                      )
                  })}
              </ul>
              <div style={{marginLeft: '40px'}}>
                  <button onClick={() => onClickHandler("all")}>all</button>
                  <button onClick={() => onClickHandler("RUBLS")}>RUBLS</button>
                  <button onClick={() => onClickHandler("Dollars")}>Dollars</button>
              </div>
          </>*/
    );
};
