import React, { useState, useEffect } from 'react';
import { GenerallyStyle } from '../Style/MainStyle';
import { AuthStyle } from '../Style/AuthStyle';

import {Helmet} from "react-helmet";
import { headName$, gotoPage$, updateGotoPage } from '../Storage.js';
import Spinner from './Spinner.js';
import { Headbar } from '../Structure/Headbar.js';
import { MainContents } from '../Structure/MainContents';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import {axiosGet, axiosPost } from './Axios';
import { getLocalStorageData } from './LocalStorage';
export let Auth = () => {
    const [ appName, setAppName ] = useState('');  
    
    useEffect(() => {
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        }); 
    }, []);
    let runLogin = () => {
        setTimeout(() => {
            updateGotoPage('Inloggad');
        }, 500)
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>

            <Headbar
                appStatus={
                    <AuthStyle.statusContainer>
                        Du loggas in ...
                        <Spinner/>
                        {runLogin()}
                    </AuthStyle.statusContainer>
                }
            /> 
        </>
    );
}