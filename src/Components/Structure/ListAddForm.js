import React, { useState, useEffect } from 'react';
import { tableHeadline } from '../Data/TableHeadline';
import { SubmitBtn } from '../Data/SubmitBtn';
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
            if (SQLColListArr) if(structuredSQLDataArr.length === 0) updateStructuredSQLDataArr(SQLColListArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        createAddedRecordDataArr();
    }, [addedRecordData]);
    const createAddedRecordDataArr = () => {
        const puschToAddedRecordData = [...addedRecordData];
        
        structuredSQLDataArr.filter((item, index) => puschToAddedRecordData.push(''));
        if (addedRecordData.length === 0) updateAddedRecordData(puschToAddedRecordData);
        console.log("createAddedRecordDataArr -> addedRecordData", addedRecordData)

    }    
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        let type = e.target;
        let inputStr = type.value;                    
        const {dataset} = type;
    
        for (let index = 0; index < tableHeadline.length; index++) if (dataset.type === tableHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        updateAddedRecordData(puschToAddedRecordData);
        
    }
        const chooseSelectOption = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        const selectedOption = e.target; 
        const selectedStr = selectedOption.value;
        const selectedIndex = selectedOption.options.selectedIndex;
        const selectedCellIndex = selectedOption.options[selectedIndex].dataset.cell;
        puschToAddedRecordData[selectedCellIndex] =selectedStr;
        updateAddedRecordData(puschToAddedRecordData);
        console.log("setStrsType -> addedRecordData", addedRecordData)
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
    const mappCols = (itemIndex) => {
        let saveToColsArr = [];
    }
    return(
        <>
            <tr>
                {
                    tableHeadline.map((item, cellIndex) => {
                        return(
                            <td key={ cellIndex }>
                                <CellInput 
                                    dataType={ item }
                                    cellIndex={ cellIndex }
                                    inputOnChange={ setStrsType }
                                    sOOnClick={ chooseSelectOption }
                                    cellStr={ addedRecordData[cellIndex] }
                                    valueStr={ addedRecordData[cellIndex] }
                                    options={ structuredSQLDataArr[cellIndex] !== undefined && structuredSQLDataArr[cellIndex] }

                               />
                            </td>
                        );
                    })
                }                          
            </tr>
            <tr>
                <td>
                    <SubmitBtn
                        style={ '' }
                        name={ '+' }
                        onClick={ runAddRow }
                        id={ 'moreRecords' }
                    />
{/*                     <SubmitBtn
                        style={ '' }
                        name={ 'Skicka In' }
                        onClick={ runSendToSQL }
                        id={ 'sendIn' }
                    /> */}
                </td>
            </tr>
            <tr>
                <td>
                    Dina Aktiviteter
                </td>
            </tr>
        </>          
    );
}