/* ================================================== AddRecord ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import inportant components for the specific page
import { TableColsHeadlineOutloged, TableColsHeadlineInloged } from '../Data/TableColsHeadline';
import { optionColListArr$ } from '../Storage';
import { CellInput } from '../Data/CellInput';
import { routeName } from '../Data/RouteNames';
import { correctRoutes } from '../Data/runAppUrls';

export let ListAddForm = (props) => {
    let [ optionColListArr, updateOptionColListArr ] = useState([]);
    const { setStrsType, choosenSelectOption, addedRecordData } = props;
    let [ tableColsHeadline, setTableColsHeadline ] = useState([]);

    useEffect(() => {
        if(tableColsHeadline.length === 0 && correctRoutes() === `/${routeName.login}`) setTableColsHeadline(TableColsHeadlineInloged); 

        optionColListArr$.subscribe((SQLColListArr) => {
            // It can handle the data an perform its task regardless the data infrastructure 
            if (SQLColListArr) if(optionColListArr.length === 0) updateOptionColListArr(Object.values(SQLColListArr));
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
    }, []);
    return(
        <>
            <tr>
                {
                    tableColsHeadline.map((item, cellIndex) => {                   
                        return(
                            <td key={ cellIndex }>                
                                <CellInput 
                                    dataType={ item }
                                    cellIndex={ cellIndex }
                                    inputOnChange={ setStrsType }
                                    sOonClick={ choosenSelectOption }
                                    valueStr={ addedRecordData[cellIndex] }
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