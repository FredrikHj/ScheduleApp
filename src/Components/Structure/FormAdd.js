import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Spinner from '../Data/Spinner.js';

import { headName$, updateInlogedUserFullName, inlogedUserFullName$, incommingSQLDataArr$ } from '../Storage.js';
import '../Style/FormAdd.css';
import { axiosPost, axiosGet } from '../Data/Axios.js';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { SQLTable } from './SQLTable';

export let AddRecords = (props) => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ incommingSQLDataResponse, updateIncommingSQLDataResponse ] = useState('');
    let [ incommingSQLData, updateIncommingSQLData ] = useState([]);

    let [ addedData, updateAddedData ] = useState(false);
    let [ quantityOfSqlPosts, updateQuantityOfSqlPosts ] = useState(0);
    let [ incommingSQLDataCols, updateIncommingSQLDataCols ] = useState([]);

    let [ dateStr, updateDateStr ] = useState('');
    let [ activityStr, updateActivityStr ] = useState('');
    let [ stateStr, updateStateStr ] = useState('');
    let [ concernedStr, updateConcernedStr ] = useState('');
    let [ typeStr, updateTypeStr ] = useState('');
    let [ placeStr, updatePlaceStr ] = useState('');
    let [ contentStr, updateContentStr ] = useState('');

    useEffect(() => {
        setAppUrl(localPubAppUrls());
        axiosGet('userSpec');
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
/*        inlogedUserFullName$.subscribe((inlogedUserFullName) => {
            //console.log(inlogedUserFullName);
            updateInlogedUser(inlogedUserFullName);
        });
        incommingSQLDataArr$.subscribe((incommingSQLDataArr) => {
            //console.log(incommingSQLDataArr);
            if (incommingSQLDataArr.status === 200) updateIncommingSQLData(incommingSQLDataArr.data[0])
        });
        /*
            Update the inloged User after the specific time i millisec...
            Use the name afte a extra millisec...
        
        setTimeout(() => {
            updateInlogedUserFullName(); 
        }, 1000); */
     }, []);
    //console.log(incommingSQLData);  
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;

        if (dataset.type === 'date') updateDateStr(inputStr);
        if (dataset.type === 'activity') updateActivityStr(inputStr);
        if (dataset.type === 'state') updateStateStr(inputStr);
        if (dataset.type === 'concerned') updateConcernedStr(inputStr);
        if (dataset.type === 'type') updateTypeStr(inputStr);
        if (dataset.type === 'place') updatePlaceStr(inputStr);
        if (dataset.type === 'content') updateContentStr(inputStr);
    }

//console.log(incommingSQLDataCols);

/*     let sendInUserData = (e) => {
        updateAddedData(true);
        //console.log(dateStr);
        // Created a body for the added data
        let sqlBody = [0, dateStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        
        //console.log(sqlBody);
        
        axiosPost('add', sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody.splice(0, 1);
            
        /* //console.log(sqlBodyObj);
        updateSavedSQLData(sqlBodyObj);

    } */
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Lägg Till`}</title>
            </Helmet>

            <tbody id="tableSchedule__tBody">
                <tr>
                    <td><input type="text" className="addSqlInput" data-type="date" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td className="tableCol4"><input type="text" className="addSqlInput" data-type="activity" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td><input type="text" className="addSqlInput" data-type="state" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td><input type="text" className="addSqlInput" data-type="concerned" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td><input type="text" className="addSqlInput" data-type="type" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td><input type="text" className="addSqlInput" data-type="place" onChange={ setStrsType } placeholder="  ..."/></td>
                    <td className="tableCol9"><input type="text" className="addSqlInput" data-type="content" onChange={ setStrsType } placeholder="  ..."/></td>
                </tr>
            </tbody>
            {/* 
            <button className="btnAddedSendContainer__sendBtn" onClick={ sendInUserData } id="sendIn">
                <p className="btnHeadline__sendIn" id='sendIn' onClick={ sendInUserData }>Skicka In</p>
            </button>  
            <section className="formAdd__addContainer">
                <table className="addContainer__body">
                    <SQLTable/>
                    <tbody className="addContainer__Tbody">
                       
                        <tr>
                         {(incommingSQLData.length !== 0) 
                            ?
                                incommingSQLData.map((sqlDataObj, rowCounter) => {
                                    
                                    return(
                                        <tr key={ rowCounter }>
                                            <td>{ sqlDataObj.date }</td>
                                            <td className="tableCol4">{ sqlDataObj.activity }</td>
                                            <td>{ sqlDataObj.state }</td>
                                            <td>{ sqlDataObj.concerned }</td>
                                            <td>{ sqlDataObj.type }</td>
                                            <td>{ sqlDataObj.place }</td>
                                            <td className="tableCol9">{ sqlDataObj.content }</td>
                                        </tr>
                                    );
                                })
                            :   <tr><td><Spinner wait={ 'Datan laddas' }/></td></tr>
                        }
                        </tr>
                    </tbody>
                </table>
            </section> */}
        </>  
    );
}