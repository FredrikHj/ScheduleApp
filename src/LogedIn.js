import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from './Components/Style/MainStyle';
import { GenerallyStyle } from './Components/Style/MainStyle'
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import './Components/Style/Spinner.scss';
import { routeName } from './Components/Data/RouteNames';
import { specificBtnStyleGotTo } from './Components/Style/SpecificStyleBtn';

import { HeadTable } from './Components/Structure/HeadTable';
import { axiosPost } from './Components/Data/Axios';
import { Headbar } from './Components/Structure/Headbar';
import { LogedInStatus } from './Components/Structure/LogedInStatus';
import { SubmitBtn } from './Components/Data/SubmitBtn';

import { MainPage } from './MainPage.js';
import axios from 'axios';
import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from './Components/Storage.js';
import { runLogOut, runAddRecord } from './Components/Data/CommonFunction';

import { log } from 'util';

import { localPubAppUrls } from './Components/Data/runAppUrls.js';

export let LogedIn = () => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ appName, setAppName ] = useState('');
      let [ redirectToPage, updateRedirectToPage ] = useState('');

    useEffect(() => {
        //setTimeout(() => {
            updateInlogedUserFullName();
        //}, 1000);
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
            updateInlogedUser(inlogedUserFullName);
        }); 
    }, []);
 

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Inloggad`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <LogedInStatus
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                        sumbitBtnGotTo= {
                            <SubmitBtn
                                style={ specificBtnStyleGotTo }
                                name={ 'Lägga Till' }
                                onClick={ runAddRecord }
                                id={ 'AddForm' }
                            />
                        }
                    />
                }
            />
            <Route exact path={appUrl + routeName.login } component={ HeadTable }/>
        </>
    );
}
/* <div className="btnContainer__btnAdd">
    <input type="submit" className="btnLogOut__input" onClick={ MainPage.runLogInOut } id="add" value=""/>
    <Link to={ `${ appUrl }/Add`} className="btnContainer__inputHeadline" onClick={ MainPage.runLogInOut } id="add">
        <p className="btnHeadline__add" id='add'>Lägg Till</p>
    </Link>
</div> */