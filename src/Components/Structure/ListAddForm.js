import React, { useState, useEffect } from 'react';
import { AddSQLDataStyle, SQLTableStyle } from'../Style/SQLTableStyle';

import { tableHeadline } from '../Data/TableHeadline';
import { axiosPost } from '../Data/Axios';
import { CellInput } from '../Data/CellInput';
import { optionColListArr$ } from '../Storage';

export let ListAddForm = (props) => {
    //let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ structuredSQLDataArr, updateStructuredSQLDataArr ] = useState([]);
    //let [ addedCellData, updateAddedCellData ] = useState([]);
    let [ addedRecordData, updateAddedRecordData ] = useState([]);
    let [ addedRecords, updateAddedRecords ] = useState([]);
    
    useEffect(() => {
        optionColListArr$.subscribe((SQLColListArr) => {
            // It can handle the data an perform its task regardless the data infrastructure 
            if (SQLColListArr) if(structuredSQLDataArr.length === 0) updateStructuredSQLDataArr(Object.values(SQLColListArr));
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        createAddedRecordDataArr();
    }, [addedRecordData]);
    const createAddedRecordDataArr = () => {
        const puschToAddedRecordData = [...addedRecordData];
/*         structuredSQLDataArr.filter((item, index) => {
            if(index === 0) puschToAddedRecordData.push('20YY-MM-DD');
            else puschToAddedRecordData.push('');
        }); */
        puschToAddedRecordData.push('');
        if (addedRecordData.length === 0) updateAddedRecordData(puschToAddedRecordData);
    }    
    console.log("ListAddForm -> structuredSQLDataArr", structuredSQLDataArr)
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        let type = e.target;
        let inputStr = type.value;                    
        const {dataset} = type;
    
        for (let index = 0; index < tableHeadline.length; index++) if (dataset.type === tableHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        updateAddedRecordData(puschToAddedRecordData);
        
    }
        const choosenSelectOption = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        const selectedOption = e.target; 
        const selectedStr = selectedOption.value;
        const selectedIndex = selectedOption.options.selectedIndex;
        const selectedCellIndex = selectedOption.options[selectedIndex].dataset.cell;
        puschToAddedRecordData[selectedCellIndex] =selectedStr;
        updateAddedRecordData(puschToAddedRecordData);
    }
    const addCellData = (cellData) => {
        let pushToAddCellData = [...addCellData];
        
    }
    let runAddRow = (e) => {
        const pushToAddedRecords = [...addedRecords];
        
        // Gets the element
        let targetBtnId = e.target.id;     
        //let addedRecord = [0, dateStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        pushToAddedRecords.push(addedRecordData);
        updateAddedRecords(pushToAddedRecords);
        //runSendToSQL(addedRecord);
    }
    let runSendToSQL = (sqlBody) => {        
        axiosPost('add', sqlBody);
    }  
    let sendInUserData = (e) => {
        //updateAddedData(true);
        //console.log(dateStr);
        // Created a body for the added data
        
        //console.log(sqlBody);
        
    }
    const handlerDateCol = (e) => {
    console.log("handlerDateCol -> e", e)

    }
    const mappCols = (itemIndex) => {
        let saveToColsArr = [];
    }
    console.log("ListAddForm -> structuredSQLDataArr", tableHeadline)
    return(
        <>
            <tr>
                {
                    tableHeadline.map((item, cellIndex) => {
                    console.log("ListAddForm -> cellIndex", cellIndex)

                        return(
                            <td key={ cellIndex }>
                               {(cellIndex === 0) 
                                    ?
                                        <>      
                                            <input 
                                                value={ addedRecordData[cellIndex] }
                                            />
                                           <AddSQLDataStyle.addDate> 20yy-mm-dd </AddSQLDataStyle.addDate>
                                        </> : null                                    
                                }
                                {(cellIndex > 0)                   
                                    ?   <CellInput 
                                            dataType={ item }
                                            cellIndex={ cellIndex }
                                            inputOnChange={ setStrsType }
                                            sOonClick={ choosenSelectOption }
                                            cellStr={ addedRecordData[cellIndex] }
                                            valueStr={ addedRecordData[cellIndex] }
                                            options={ structuredSQLDataArr[cellIndex] !== undefined && structuredSQLDataArr[cellIndex] }
                                    />
                                    : null
                               }
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