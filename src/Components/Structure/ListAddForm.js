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
            
            if (SQLDataArr) if(structuredSQLDataArr.length === 0) updateStructuredSQLDataArr(structureSQLData(SQLDataArr));
            if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        //createRecordsBody();
     }, [structuredSQLDataArr]);
     
    const structureSQLData = (SQLData) => {
        const pushToStructuredSQLDataArr = [...structuredSQLDataArr];
        const structuredObjToArr = [];

        console.log("structureSQLData -> SQLData", SQLData);
        // Loop through the SQLData´s index = 0 and get into the object finding the keys = SQLCols
        for (const key in SQLData[0]) pushToStructuredSQLDataArr.push([]);
        
        // In SQLData the structure are like a tabel there every index starting at 0 are handle the key value pair from the SQL Tabel as a object 
        for (let outerIndex = 0; outerIndex < SQLData.length; outerIndex++) {
            /* From every SQL tabels object I taking the value´s and collect it in structuredObjToArr. 
            structuredObjToArr has the same structure as SQLData accept from that the every index are handle just the values.*/
            structuredObjToArr.push(Object.values(SQLData[outerIndex]));
            for (let innerIndex = 0; innerIndex < pushToStructuredSQLDataArr.length; innerIndex++)
                /* From structuredObjToArr I placing every other index value´s into pushToStructuredSQLDataArr in opposite order.
                The structure of pushToStructuredSQLDataArr are every body index are representing the SQLData´s columns.
                I needing the pushToStructuredSQLDataArr in mapping the CellDropDownList component. */
               pushToStructuredSQLDataArr[innerIndex].push(structuredObjToArr[outerIndex][innerIndex]);
        }
        pushToStructuredSQLDataArr.shift()
        console.log("structureSQLData -> structuredObjToArr", structuredObjToArr)
        console.log("structureSQLData -> pushToStructuredSQLDataArr", pushToStructuredSQLDataArr);

        
        /* If finding same col in same key it will be skipped. */

        return pushToStructuredSQLDataArr;
        
        
    }
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
    const mappCols = (itemIndex) => {
        let saveToColsArr = [];
        console.log("mappCols -> structuredSQLDataArr[itemIndex]", structuredSQLDataArr[itemIndex])
/* 
        if (Array.isArray(structuredSQLDataArr[itemIndex]) === true) {
            for (let index = 0; index < structuredSQLDataArr.length; index++) {
                console.log("mappCols -> structuredSQLDataArr[index]", structuredSQLDataArr[index])
                saveToColsArr.push(structuredSQLDataArr[index]);
            }
            console.log("mappCols -> saveToColsArr[index]", saveToColsArr[itemIndex])
            return saveToColsArr[itemIndex]; */
       // }
    }
    return(
        <>
            <tr>
                {
                    tableHeadline.map((item, index) => {
                        console.log("ListAddForm -> index", index)
                        console.log(Array.isArray(structuredSQLDataArr[index]));
                        return(
                            <td key={ index }>
                                <input type="text" className="addSqlInput" data-type={ item } data-typenr={ index } onChange={ setStrsType } placeholder="  ..."/>
                                <CellDropDownList options={ structuredSQLDataArr[index] !== undefined && structuredSQLDataArr[index] }/>
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