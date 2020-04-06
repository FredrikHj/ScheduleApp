import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Spinner from '../Data/Spinner.js';
import { Headbar } from './Headbar';
import { LogedInStatus } from '../Structure/LogedInStatus';

import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from '../Storage.js';
import { runLogOut, runReturnFromAddRecord, runAddRow, runSendToSQL } from '../Data/CommonFunction';

import '../Style/FormAdd.css';
import {GenerallyStyle } from '../Style/MainStyle'
import { TableHead } from './TableHead';
import { tableHeadline } from '../Data/TableHeadline';

import { axiosPost } from '../Data/Axios.js';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificBtnStyleGotTo } from '../Style/SpecificStyleBtn';

export let AddForm = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');

    let [ dateStr, updateDateStr ] = useState('');
    let [ activityStr, updateActivityStr ] = useState('');
    let [ stateStr, updateStateStr ] = useState('');
    let [ concernedStr, updateConcernedStr ] = useState('');
    let [ typeStr, updateTypeStr ] = useState('');
    let [ placeStr, updatePlaceStr ] = useState('');
    let [ contentStr, updateContentStr ] = useState('');

    let [ addedCellData, updateAddedCellData ] = useState([]);
    let [ addedRecordData, updateAddedRecordData ] = useState([]);
    let [ addedRecords, updateAddedRecords ] = useState([]);
    useEffect(() => {
        updateInlogedUserFullName(); 
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
            updateInlogedUser(inlogedUserFullName);
        });
        createRecordsBody();
     }, [addedRecordData]);
    const createRecordsBody = () => {
        const pushToAddedRecordData = [...addedRecordData ];
        for (let index = 0; index < tableHeadline.length; index++) pushToAddedRecordData.push(tableHeadline[index]);
        console.log("createRecordsBody -> pushToAddedRecordData", pushToAddedRecordData)
        if (addedRecordData.length === 0) updateAddedRecordData(pushToAddedRecordData);
    }
    
    //console.log(incommingSQLData);  
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        console.log("setStrsType -> inputStr", inputStr)
        
        const {dataset} = type;
        
        for (let index = 0; index < tableHeadline.length; index++) {
            if (dataset.type === tableHeadline[index]) addedRecordData[dataset.typenr] = inputStr;
        }
    }
    const addCellData = (cellData) => {
        let pushToAddCellData = [...addCellData];
        
    }
    let runAddRow = (e) => {
        // Gets the element
        let targetBtnId = e.target.id;     
        console.log("setStrsType -> addedRecordData", addedRecordData);
        let addedRecord = [0, dateStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        runSendToSQL(addedRecordData);
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
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Lägg Till`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <LogedInStatus
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                        sumbitBtnGotTo= {
                            <SubmitBtn
                                style={ specificBtnStyleGotTo }
                                name={ 'Återgå' }
                                onClick={ runReturnFromAddRecord }
                                id={ 'Login' }
                            />
                        }
                    />
                }
            />
            <GenerallyStyle.body__contents>
                <section id="container__tableSchedule">
                    <table id="tableSchedule__body">
                        <TableHead/>
                        <tbody className="addContainer__Tbody">
                            <tr>
                                {
                                    tableHeadline.map((item, index) => {
                                        
                                        return(
                                            <td key={ index }><input type="text" className="addSqlInput" data-type={ item } data-typenr={ index } onChange={ setStrsType } placeholder="  ..."/></td>
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
                                    
                                    <SubmitBtn
                                        style={ '' }
                                        name={ 'Skicka In' }
                                        onClick={ runSendToSQL }
                                        id={ 'sendIn' }
                                    />
                                </td>
                            </tr>
                            <tr>
                            
                                <td colSpan="7">
                                    Tillagda aktiviteter
                                </td>
                                    
                                {
                                    addedRecords.map((item, index) => {
                                    
                                        return(
                                            <tr key={ index }>
                                                {
                                                    addedCellData.map((item, index) => {
                                                        addCellData(item);

                                                        return(
                                                            <td key={ index }>{ item }</td>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        );
                                    })
                                }                 
                            </tr>
                        </tbody>
                        
                    </table>
  
                </section>
            </GenerallyStyle.body__contents>
        </>  
    );
}