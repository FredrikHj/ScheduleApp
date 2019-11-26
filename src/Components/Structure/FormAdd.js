import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";


import { headName$, updateLogedIn, updateInlogedUserFullName, updateLocalstorage, inlogedUserFullName$ } from '../GlobalProps.js';
import '../CSS/Headbar.css';
import '../CSS/FormAdd.css';
import { runLogInOut } from '../Data/LogInOut.js';


import { axiosPost, axiosGet } from '../Data/Axios.js';

export let FormAdd = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');

    let [ addedData, updateAddedData ] = useState(false);
    let [ quantityOfSqlPosts, updateQuantityOfSqlPosts ] = useState(0);
    let [ incommingSQLDataCols, updateIncommingSQLDataCols ] = useState([]);

    let [ dateStr, updateDateStr ] = useState('');
    let [ monthStr, updateMonhthStr ] = useState('');
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
        setTimeout(() => {
            updateInlogedUserFullName();
        }, 1000);
    }, []);
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;

        if (dataset.type === 'date') updateDateStr(inputStr);
        if (dataset.type === 'month') updateMonhthStr(inputStr);
        if (dataset.type === 'activity') updateActivityStr(inputStr);
        if (dataset.type === 'state') updateStateStr(inputStr);
        if (dataset.type === 'concerned') updateConcernedStr(inputStr);
        if (dataset.type === 'type') updateTypeStr(inputStr);
        if (dataset.type === 'place') updatePlaceStr(inputStr);
        if (dataset.type === 'content') updateContentStr(inputStr);
    }

console.log(incommingSQLDataCols);

    let submitAddForm = (e) => {
        updateAddedData(true);
        console.log(dateStr);
        // Created a body for the added data
        let sqlBody = [0, dateStr, monthStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        
/*         let sqlBodyObj = {
            activity: activityStr,
            concerned: concernedStr,
            content: contentStr,
            date: dateStr,
            month: monthStr,
            place: placeStr,
            state: stateStr,
            type: typeStr
        } */
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
            <header id="headbar__Container">
                <p id="headbar__headLine">{ appName }</p>

                <section id="headbar__logInOutBtn">
                    <p id="logInOut__logInUser">{`Välkommen in ${ inlogedUser }` }</p>       

                    <section id="logInOut__btnInContainer">

                        <div  id="btnContainer__btnLogOut">
                            <input type="submit" className="btnLogOut__input" onClick={ runLogInOut} id="logOout" value="" />
                            <Link to="/" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="logIn">
                                <p className="__headline" id="logOout">Logga Ut</p>
                            </Link>   
                        </div>

                        <div id="btnContainer__btnAdd">
                            <input type="submit" className="btnLogOut__input" onClick={ runLogInOut } id="cancelAdd" value=""/>
                            <Link to={"/LogIn" }className="btnContainer__inputHeadline" onClick={ runLogInOut } id="cancelAdd">
                                <p className="__headline" id='cancelAdd'>Avbryt</p>
                            </Link>
                        </div>
                    </section>

                </section>
            </header>
            <section id="formAdd__addContainer">
                <table id="addContainer__body">
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
                    <tbody id="addContainer__Tbody">
                        <tr>
                            <td><input type="text" className="addSqlInput" data-type="date" onChange={ setStrsType }/></td>
                            <td className="tableCol4"><input type="text" className="addSqlInput" data-type="activity" onChange={ setStrsType }/></td>
                            <td><input type="text" className="addSqlInput" data-type="state" onChange={ setStrsType }/></td>
                            <td><input type="text" className="addSqlInput" data-type="concerned" onChange={ setStrsType }/></td>
                            <td><input type="text" className="addSqlInput" data-type="type" onChange={ setStrsType }/></td>
                            <td><input type="text" className="addSqlInput" data-type="place" onChange={ setStrsType }/></td>
                            <td className="tableCol9"><input type="text" className="addSqlInput" data-type="content" onChange={ setStrsType }/></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>  
    );
}