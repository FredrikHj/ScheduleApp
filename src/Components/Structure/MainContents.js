import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { runAddRecord } from '../Data/CommonFunction';
import {GenerallyStyle } from '../Style/MainStyle'
import { SQLTableStyle } from '../Style/SQLTableStyle';
import { specificStyleGotTo } from '../Style/SpecificStyle';
import '../Style/SQLTable.css';
import { AddSQLDataStyle } from '../Style/SQLTableStyle';
import { correctRoutes } from '../Data/runAppUrls';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificStyleAddRow, specificStyleRemoveRecord } from '../Style/SpecificStyle';
import { incommingSQLDataArr$ } from '../Storage';

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
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);

    const {addRecordsBtn} = props;    
    useEffect(() => {
        gotoPage$.subscribe((gotoPage) => {
            console.log("HeadTable -> gotoPage", gotoPage);

            updateRedirectToPage(gotoPage);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
    },[ redirectToPage ]);
    console.log("MainContents -> redirectToPage", typeof correctRoutes());
    const runAddRow  = (e) => {

    }
    const runRemove  = (e) => {

    }
    return (
        <> 
            <SQLTableStyle.container>
                <SQLTableStyle.col1_3>
                </SQLTableStyle.col1_3>

                <SQLTableStyle.col2>
                    <SQLTableStyle.searchBar><SearchBar/></SQLTableStyle.searchBar>
                    <SQLTableStyle.body__contents>
                        <table id="table1_body">
                            <TableHead/>
                            <tbody id="table1_tbody">
                                {correctRoutes() === routeName.login && <Redirect to={ `/${ routeName.login }`} />}
                                <Route path={ '/inloggad' } component={ ListAddForm }/>
                                <ListSQLData/>
                            </tbody>                    
                        </table>
                        <SQLTableStyle.sideTool style={(correctRoutes() === `/${ routeName.login }` ) ? {display: 'block'} : {display: 'none'}}>
                            <SQLTableStyle.sideToolRow1>
                                <SubmitBtn
                                    style={ specificStyleAddRow }
                                    name={ 'Lägg Till' }
                                    onClickFunction={ runAddRow }
                                    id={ 'moreRecords' }
                                />
                            </SQLTableStyle.sideToolRow1>
                            <SQLTableStyle.sideToolRow2> 
                                {
                                    incommingNewSQLData.map((item, index) => {
                                        return(
                                            <SubmitBtn key={ index }
                                                style={ specificStyleRemoveRecord }
                                                name={ 'TA BORT' }
                                                onClickFunction={ runRemove }
                                                id={ 'runRemoveRecord' }
                                            />
                                        );
                                    })
                                }

                            </SQLTableStyle.sideToolRow2>
                        </SQLTableStyle.sideTool>
                    </SQLTableStyle.body__contents>

                </SQLTableStyle.col2>

                <SQLTableStyle.col1_3>
                </SQLTableStyle.col1_3>
            </SQLTableStyle.container>
        </>
    );
}