import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Spinner from '../Data/Spinner.js';

import { headName$, incommingSQLDataArr$, updateInlogedUserFullName, inlogedUserFullName$ } from '../GlobalProps.js';
import '../CSS/FormAdd.css';
import { runLogInOut } from '../Data/LogInOut.js';


import { axiosPost, axiosGet } from '../Data/Axios.js';

export let FormAdd = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');
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
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {
            console.log(inlogedUserFullName);
            updateInlogedUser(inlogedUserFullName);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            //console.log(SQLDataArr);
            updateIncommingSQLData(SQLDataArr);
        });        
        setTimeout(() => {
            updateInlogedUserFullName();
        }, 1000);
    }, []);
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

console.log(incommingSQLDataCols);

    let sendInUserData = (e) => {
        updateAddedData(true);
        console.log(dateStr);
        // Created a body for the added data
        let sqlBody = [0, dateStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        
        console.log(sqlBody);
        
        axiosPost('add', sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody.splice(0, 1);
            
        /* console.log(sqlBodyObj);
        updateSavedSQLData(sqlBodyObj); */

    }
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Lägg Till`}</title>
            </Helmet>
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <section className="headContainer__logInOut">

                        <p className="logInOut__logedInUser">{`Välkommen in ${(inlogedUser === '') ? '...' : inlogedUser }` }</p>       

                        <section className="logInOut__btnInContainer">

                            <div  className="btnContainer__btnLogOut">
                                <input type="submit" className="btnLogOut__input" onClick={ runLogInOut} id="logOout" value="" />
                                <Link to="/" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="logIn">
                                    <p className="btnHeadline" id="logOout">Logga Ut</p>
                                </Link>   
                            </div>

                            <div className="btnContainer__btnAdd">
                                <input type="submit" className="btnLogOut__input" onClick={ runLogInOut } id="cancelAdd" value=""/>
                                <Link to={"/LogIn" }className="btnContainer__inputHeadline" onClick={ runLogInOut } id="cancelAdd">
                                    <p className="btnHeadline" id='cancelAdd'>Avbryt</p>
                                </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
            
            <button className="btnAddedSendContainer__sendBtn" onClick={ sendInUserData } id="sendIn">
                <p className="btnHeadline__sendIn" id='sendIn'>Skicka In</p>
            </button> 
            <section className="formAdd__addContainer">
                <table className="addContainer__body">
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th className="tableCol4">Akitvitet</th>
                            <th>Status</th>
                            <th>Berörda</th>
                            <th>Typ</th>
                            <th>Plats</th>
                            <th className="tableCol9">Innehåll</th>
                    </tr>
                    </thead>
                    <tbody className="addContainer__Tbody">
                        <tr>
                            <td><input type="text" className="addSqlInput" data-type="date" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td className="tableCol4"><input type="text" className="addSqlInput" data-type="activity" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td><input type="text" className="addSqlInput" data-type="state" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td><input type="text" className="addSqlInput" data-type="concerned" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td><input type="text" className="addSqlInput" data-type="type" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td><input type="text" className="addSqlInput" data-type="place" onChange={ setStrsType } placeholder="  ..."/></td>
                            <td className="tableCol9"><input type="text" className="addSqlInput" data-type="content" onChange={ setStrsType } placeholder="  ..."/></td>
                        </tr>
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
            </section>
        </>  
    );
}