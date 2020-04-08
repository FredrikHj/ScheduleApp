import React, { useState, useEffect } from 'react';
import {GenerallyStyle } from '../Style/MainStyle'
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { incommingSQLDataArr$, gotoPage$ } from '../Storage.js';
import {getLocalStorageData} from '../Data/LocalStorage';
import { SubmitBtn } from '../Data/SubmitBtn';

import { axiosGet } from '../Data/Axios.js';
import { SearchBar } from './SearchBar.js';
import { correctRoutes } from '../Data/runAppUrls.js';
import { TableHead } from './TableHead';
import { ListSQLData } from './ListSQLData';
import '../Style/SQLTable.css';

import axios from 'axios';
import { log } from 'util';
import styled from 'styled-components';
import { routeName } from '../Data/RouteNames';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { ListAddForm } from '../Structure/ListAddForm';

export let HeadTable = (props) => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ redirectToPage, updateRedirectToPage ] = useState('');

    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);
    let [ routes, updateRoutes ] = useState('');
    const { tableHead, tableBody } = props;
    
    let [ addForm, setAddForm ] = useState(true);
    //;
    let ifSQLData;
    let countGetMethod = 1;
    const {addRecordsBtn} = props;
    console.log(addRecordsBtn);
    
    useEffect(() => {
        setAppUrl(localPubAppUrls());
        updateRoutes(correctRoutes());
        getSQLData();
        gotoPage$.subscribe((gotoPage) => {
        console.log("HeadTable -> gotoPage", gotoPage)
            updateRedirectToPage(gotoPage);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure 
            
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
    },[routes]); 
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
        
        console.log("getSQLData -> routes", routes)
        // Run default SQL list
        axiosUntilGettingData.then((result) => {            
            if(routes === '/') axiosGet('default', '');
            if (routes === '/Inloggad') axiosGet('userSpec', getLocalStorageData('token'));
        }).catch((result) =>{
            updateErroLoadingSQLData(result);
        })
    }
    
    let runAdmin = (e) => {
        let targetBtn = e.target.dataset.admin;
        if (targetBtn === 'logIn') setAddForm(true);
        if (targetBtn === 'logOut') setAddForm(false);
    }
    console.log("HeadContents -> incommingNewSQLData", incommingNewSQLData)

    return (
        <GenerallyStyle.body__contents>
            <SearchBar/>
            <section id="container__tableSchedule">
                <table id="tableSchedule__body">
                    <TableHead/>
                    <tbody id="tableSchedule__tBody">
                    {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />} 
                    <Route path={ '/Add' } component={ ListAddForm }/>

                        <ListSQLData
                            incommingNewSQLData={ incommingNewSQLData }
                        />

                    </tbody>

                    
                </table>
            </section>
        </GenerallyStyle.body__contents>
    );
}