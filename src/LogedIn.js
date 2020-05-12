import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from './Components/Storage.js';

import './Components/Style/Spinner.scss';
import { LogedInStatus } from './Components/Structure/LogedInStatus';

import { routeName } from './Components/Data/RouteNames';
import { Headbar } from './Components/Structure/Headbar';

import { MainContents } from './Components/Structure/MainContents';

import { runLogOut } from './Components/Data/CommonFunction';

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
                    />
                }
            />  

            <MainContents/>                 
        </>
    );
}
