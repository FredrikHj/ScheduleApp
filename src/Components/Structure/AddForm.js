/* ================================================== AddRecord ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';
import { optionColListArr$ } from '../Storage';
import { AddFormCellInput } from '../Data/AddFormCellInput';

export let AddForm = (props) => {
    let [ optionColListArr, updateOptionColListArr ] = useState([]);
    const { setStrsType, choosenSelectOption, addedSQLData, tableToolBtn } = props;
    let [ tableColsHeadlines, setTableColsHeadlines ] = useState([]); 
    
    useEffect(() => {
        optionColListArr$.subscribe((SQLColListArr) => {
            // It can handle the data an perform its task regardless the data infrastructure 
            if (SQLColListArr) if(optionColListArr.length === 0) updateOptionColListArr(Object.values(SQLColListArr));
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
            console.log("TableHead -> TableColsHeadline", TableColsHeadline())
        });
        if(tableColsHeadlines.length === 0) setTableColsHeadlines(TableColsHeadline());
    }, [tableColsHeadlines]);

    return(
        <>
            <tr>
                {
                    TableColsHeadline().map((item, cellIndex) => {                   
                        return(
                            <td key={ cellIndex }>                
                                <AddFormCellInput 
                                    tableToolBtn={ tableToolBtn }
                                    dataType={ item }
                                    cellIndex={ cellIndex }
                                    inputOnChange={ setStrsType }
                                    sOonClick={ choosenSelectOption }
                                    valueStr={ addedSQLData[cellIndex] }
                                    options={ optionColListArr[cellIndex] !== undefined && optionColListArr[cellIndex] }
                               />
                            </td>
                        );
                    })
                }                          
            </tr>
            <tr>
                <td>
                    Dina Aktiviteter
                </td>
            </tr>
        </>          
    );
}