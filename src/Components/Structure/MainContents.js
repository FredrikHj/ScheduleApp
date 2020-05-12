import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { runAddRecord } from '../Data/CommonFunction';
import {GenerallyStyle } from '../Style/MainStyle'
import { SQLTableStyle } from '../Style/SQLTableStyle';

import { specificBtnStyleGotTo } from '../Style/SpecificStyleBtn';
import '../Style/SQLTable.css';
import { AddSQLDataStyle } from '../Style/SQLTableStyle';
import { specificBtnStyleAddRow } from '../Style/SpecificStyleBtn';
import { SubmitBtn } from '../Data/SubmitBtn';


import { TableHead } from './TableHead';
import { gotoPage$ } from '../Storage';

//import { axiosGet } from '../Data/Axios';
//import { correctRoutes } from '../Data/runAppUrls';
import { ListSQLData } from './ListSQLData';
import { SearchBar } from './SearchBar';
import { routeName } from '../Data/RouteNames';
import { ListAddForm } from './ListAddForm';

export let MainContents = (props) => {
    let [ redirectToPage, updateRedirectToPage ] = useState('');
    const {addRecordsBtn} = props;    
    useEffect(() => {
        gotoPage$.subscribe((gotoPage) => {
            console.log("HeadTable -> gotoPage", gotoPage);

            updateRedirectToPage(gotoPage);
        });
    },[ redirectToPage ]);
    console.log("MainContents -> redirectToPage", redirectToPage)
    return (
        <> 
            <SQLTableStyle.container>
                <SQLTableStyle.col1_3>
                </SQLTableStyle.col1_3>

                <SQLTableStyle.col2>
                    <SQLTableStyle.searchBar>
                        <SearchBar/>
                    </SQLTableStyle.searchBar>
                    <AddSQLDataStyle.btnAdd>
                       {(redirectToPage === routeName.login || redirectToPage === '')
                            ?
                                <SubmitBtn
                                    style={ specificBtnStyleAddRow }
                                    name={ 'Lägg Till' }
                                    onClick={ 'runAddRow' }
                                    id={ 'moreRecords' }
                                />
                            : null
                        }
                    </AddSQLDataStyle.btnAdd>
                    <GenerallyStyle.body__contents>
                        <table id="tableSchedule__body" >
                            <TableHead/>
                            <tbody id="tableSchedule__tBody">
                                {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />}
                                <Route path={ '/inloggad' } component={ ListAddForm }/>
                                <ListSQLData/>
                            </tbody>                    
                        </table>
                    </GenerallyStyle.body__contents>
                </SQLTableStyle.col2>
                <SQLTableStyle.col1_3>
                </SQLTableStyle.col1_3>
            </SQLTableStyle.container> */}
        </>
    );
}