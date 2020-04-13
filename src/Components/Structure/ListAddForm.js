import React, { useState, useEffect } from 'react';
import { tableHeadline } from '../Data/TableHeadline';
import { SubmitBtn } from '../Data/SubmitBtn';
import { axiosPost } from '../Data/Axios.js';
import { CellDropDownList } from '../Data/CellDropDownList';
import { incommingSQLDataArr$ } from '../Storage';

export let ListAddForm = (props) => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ structuredSQLDataArr, updateStructuredSQLDataArr ] = useState([]);
    let [ addedCellData, updateAddedCellData ] = useState([]);
    let [ addedRecordData, updateAddedRecordData ] = useState([]);
    let [ addedRecords, updateAddedRecords ] = useState([]);

    useEffect(() => {
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
        console.log("ListAddForm -> SQLDataArr", SQLDataArr)
            // It can handle the data an perform its task regardless the data infrastructure 
            if (SQLDataArr) structureSQLData(SQLDataArr);
            if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        createRecordsBody();
     }, [addedRecordData]);
     
    const structureSQLData = (SQLData) => {
        const pushToStructuredSQLDataArr = [...structuredSQLDataArr];
        
        console.log("structureSQLData -> SQLData", SQLData);
        /* Loop through the SQLData and get into each of the index´s object finding the keys 
        representing the X pc of column of SQL data. If finding same col in same key it will be skipped. */
        for (let index = 0; index < SQLData.length; index++) {
            pushToStructuredSQLDataArr.push(index);
            for (const key in SQLData[index]) {
               console.log("structureSQLData -> pushToStructuredSQLDataArr", pushToStructuredSQLDataArr[index])
               pushToStructuredSQLDataArr[index].push('refda');
            }
            console.log("structureSQLData -> SQLData[index]", SQLData[index])
            
        }


    }
    const createRecordsBody = () => {
        const pushToAddedRecordData = [...addedRecordData ];
        for (let index = 0; index < tableHeadline.length; index++) {
            pushToAddedRecordData.push(tableHeadline[index]);
            pushToAddedRecordData[index] = '  ';
        }
        console.log("createRecordsBody -> pushToAddedRecordData", pushToAddedRecordData)
        if (addedRecordData.length === 0) updateAddedRecordData(pushToAddedRecordData);
    }
    
    //console.log(incommingSQLData);  
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        console.log("setStrsType -> inputStr", inputStr)
        
        const {dataset} = type;
    
        for (let index = 0; index < tableHeadline.length; index++) if (dataset.type === tableHeadline[index]) addedRecordData[dataset.typenr] = inputStr;
        console.log("setStrsType -> addedRecordData", addedRecordData)
        
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
    return(
        <>
            <tr>
                {
                    tableHeadline.map((item, index) => {
                        return(
                            <td key={ index }>
                                <input type="text" className="addSqlInput" data-type={ item } data-typenr={ index } onChange={ setStrsType } placeholder="  ..."/>
{/*                                 <CellDropDownList

                                /> */}
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