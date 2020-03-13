import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { incommingSQLDataArr$ } from '../Storage.js';
import {getLocalStorageData} from '../Data/LocalStorage';

import Spinner from '../Data/Spinner.js';
import { axiosGet } from '../Data/Axios.js';
import { SearchBar } from './SearchBar.js';
import { runAppUrls } from '../Data/runAppUrls.js';
import '../CSS/SQLTable.css';

import axios from 'axios';
import { log } from 'util';

export let HeadContents = () => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);
    const appUrl = runAppUrls();

    let [ addForm, setAddForm ] = useState(true);
    //;
    let ifSQLData;
    let countGetMethod = 1;
    let getSQLData = () => {

        
        let axiosUntilGettingData = new Promise((success, error) => {
            if (countGetMethod === 1) {
                success();
                countGetMethod++;
            }
            if (countGetMethod === 2) {
                setTimeout(() => {
                    updateErroLoadingSQLData(true)
                }, 1000);
            }
            //;
            
            //else error('Kunde inte ladda datan :(');
        });

        // Run default SQL list
        axiosUntilGettingData.then((result) => {
            console.log("getSQLData -> appUrl", appUrl)
            
            if (appUrl === '/') axiosGet('default');
            if (appUrl === '/Login') {
                console.log("getSQLData -> getLocalStorageData('token')", getLocalStorageData('token'))
                axiosGet('userSpec', getLocalStorageData('token'));
            }
        }).catch((result) =>{
            updateErroLoadingSQLData(result);
        })
    }
    useEffect(() => {
        getSQLData();
        
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure 
            
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
    },[]); 
    let runAdmin = (e) => {
        let targetBtn = e.target.dataset.admin;
        if (targetBtn === 'logIn') setAddForm(true);
        if (targetBtn === 'logOut') setAddForm(false);
    }
    
    return (
        <main className="body__contents">
            <SearchBar/>
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
                                    <Spinner str={'Tabellen laddas'}/>
                                </td></tr>
                            </>
                        }
                    </tbody>
                </table>
            </section>
        </main>
    );
}