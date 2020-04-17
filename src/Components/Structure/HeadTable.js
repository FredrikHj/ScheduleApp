import React, { useState, useEffect } from 'react';
import {GenerallyStyle } from '../Style/MainStyle'
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { gotoPage$ } from '../Storage';
import { SubmitBtn } from '../Data/SubmitBtn';

//import { axiosGet } from '../Data/Axios';
import { SearchBar } from './SearchBar';
//import { correctRoutes } from '../Data/runAppUrls';
import { TableHead } from './TableHead';
import { ListSQLData } from './ListSQLData';
import '../Style/SQLTable.css';

import axios from 'axios';
import { log } from 'util';
import styled from 'styled-components';
import { routeName } from '../Data/RouteNames';
//import { localPubAppUrls } from '../Data/runAppUrls.js';
import { ListAddForm } from '../Structure/ListAddForm';

export let HeadTable = (props) => {
    let [ redirectToPage, updateRedirectToPage ] = useState('');
    const { tableHead, tableBody } = props;
    const {addRecordsBtn} = props;    
    useEffect(() => {
        gotoPage$.subscribe((gotoPage) => {
            console.log("HeadTable -> gotoPage", gotoPage)
            updateRedirectToPage(gotoPage);
        });
    },[]); 
    return (
        <GenerallyStyle.body__contents>
            {redirectToPage !== routeName.addRecords && <SearchBar/>} 
            <section id="container__tableSchedule">
                <table id="tableSchedule__body">
                    <TableHead/>
                    <tbody id="tableSchedule__tBody">
                        {redirectToPage === routeName.addRecords && <Redirect to={ `/${ routeName.addRecords }`} />} 
                        <Route path={ '/Add' } component={ ListAddForm }/>
                        <ListSQLData/>
                    </tbody>                    
                </table>
            </section>
        </GenerallyStyle.body__contents>
    );
}