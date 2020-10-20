/* ================================================== AddRecord ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import inportant components for the specific page
import { TableColsHeadlineOutloged, TableColsHeadlineInloged } from '../Data/TableColsHeadline';
import { optionColListArr$ } from '../Storage';
<<<<<<< HEAD:src/Components/Structure/ListAddForm.js
import { CellInput } from '../Data/CellInput';
import { routeName } from '../Data/RouteNames';
import { correctRoutes } from '../Data/runAppUrls';
=======
import { AddFormCellInput } from '../Data/AddFormCellInput';
>>>>>>> b87f68ab5510fa1be005a204842a139f105104cc:src/Components/Structure/AddForm.js

export let AddForm = (props) => {
    let [ optionColListArr, updateOptionColListArr ] = useState([]);
<<<<<<< HEAD:src/Components/Structure/ListAddForm.js
    const { setStrsType, choosenSelectOption, addedRecordData } = props;
    let [ tableColsHeadline, setTableColsHeadline ] = useState([]);

=======
    const { setStrsType, choosenSelectOption, addedSQLData, tableToolBtn } = props;
    let [ tableColsHeadlines, setTableColsHeadlines ] = useState([]); 
    
>>>>>>> b87f68ab5510fa1be005a204842a139f105104cc:src/Components/Structure/AddForm.js
    useEffect(() => {
        if(tableColsHeadline.length === 0 && correctRoutes() === `/${routeName.login}`) setTableColsHeadline(TableColsHeadlineInloged); 

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
<<<<<<< HEAD:src/Components/Structure/ListAddForm.js
                    tableColsHeadline.map((item, cellIndex) => {                   
=======
                    TableColsHeadline().map((item, cellIndex) => {                   
>>>>>>> b87f68ab5510fa1be005a204842a139f105104cc:src/Components/Structure/AddForm.js
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