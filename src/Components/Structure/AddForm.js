import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Spinner from '../Data/Spinner.js';
import { Headbar } from './Headbar';
import { LogedInStatus } from '../Structure/LogedInStatus';

import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from '../Storage.js';
import { runLogOut, runAddRecord } from '../Data/CommonFunction';

import '../Style/FormAdd.css';
import { axiosPost, axiosGet } from '../Data/Axios.js';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { SQLTable } from './SQLTable';

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

    useEffect(() => {
        updateInlogedUserFullName(); 
            headName$.subscribe((headName) => {
             //console.log(headName);
                setAppName(headName);
            });
            inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
                updateInlogedUser(inlogedUserFullName);
            }); 
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
            <Headbar
                appStatus={ 
                    <LogedInStatus
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                        functionAdd={ runAddRecord }
                    />
                }
            />
        fdvf
        </>  
    );
}