import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { incommingSQLDataArr$ } from '../GlobalProps.js';

import Spinner from '../Data/Spinner.js';
import { LogInOut } from '../Data/LogInOut.js';
import { axiosGet } from '../Data/Axios.js';

import '../CSS/SQLTable.css';

import axios from 'axios';
import { log } from 'util';

export let SQLTable = () => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);

    let [ addForm, setAddForm ] = useState(true);
    console.log(incommingNewSQLData);
    
    let countGetMethod = 1;
    let axiosUntilGettingData = new Promise((success, error) => {       
        if (countGetMethod === 1) {
            success();
            countGetMethod++;
        }
        if (countGetMethod === 2) {
            setTimeout(() => {
                updateErroLoadingSQLData(true)
            }, 5000);
        }
        console.log(countGetMethod);
        
        //else error('Kunde inte ladda datan :(');
    })
    let axiosGettingSQLData = () => {
        // Run default SQL list
        axiosUntilGettingData.then((result) => {
            axiosGet('default')
        }).catch((result) =>{
            updateErroLoadingSQLData(result);
        })
    }
    useEffect(() => {
        axiosGettingSQLData();
        
        //setTimeout(() => {
        //axiosUntilGettingData();
          
        //}, 3000);
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            //console.log(SQLDataArr);
            updateIncommingNewSQLData(SQLDataArr);
        });
     },[]); 
    let runAdmin = (e) => {
        let targetBtn = e.target.dataset.admin;
        if (targetBtn === 'logIn') setAddForm(true);
        if (targetBtn === 'logOut') setAddForm(false);
    }
    return (
        <section id="container__tableSchedule">
            <table id="tableSchedule__body">
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
                <tbody id="tableSchedule__tBody">
                    {(incommingNewSQLData.length !== 0) 
                        ?
                        incommingNewSQLData.map((sqlDataObj, rowCounter) => {
                            
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
                    :   
                        <>
                            <tr><td>
                                {(erroLoadingSQLData !== true) 
                                    ? <Spinner wait={'Data laddas'}/>
                                    :   <section>{`Data laddades inte ---> Hjälp!${ axiosGettingSQLData() }`}</section>
                                }
                            </td></tr>
                        </>
                    }
                </tbody>
            </table>
        </section>
    );
}