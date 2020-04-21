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
        //createRecordsBody();
     }, [addedRecordData]);
     
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        let type = e.target;
        let inputStr = type.value;            
        console.log("setStrsType -> inputStr", inputStr)
        
        const {dataset} = type;
    
        for (let index = 0; index < tableHeadline.length; index++) if (dataset.type === tableHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        updateAddedRecordData(puschToAddedRecordData);
        
    }
    console.log("setStrsType -> addedRecordData", addedRecordData)
    const chooseSelectOption = (e) => {
        const getChoosedSelectOption = e.target.value;
        
        console.log("chooseSelectOption -> getChoosedSelectOption", getChoosedSelectOption)
    }
    const addCellData = (cellData) => {
        let pushToAddCellData = [...addCellData];
        
    }
    let runAddRow = (e) => {
        const pushToAddedRecords = [...addedRecords];

        // Gets the element
        let targetBtnId = e.target.id;     
        console.log("setStrsType -> addedRecordData", addedRecordData);
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
        console.log("mappCols -> structuredSQLDataArr[itemIndex]", structuredSQLDataArr[itemIndex])
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
                                    placeholder={ "  ..." }
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