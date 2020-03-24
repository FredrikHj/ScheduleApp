import React, { useState, useEffect } from 'react';
import { GenerallyStyle, HeadbarStyle } from '../Style/MainStyle';

import {Helmet} from "react-helmet";
import { headName$, gotoPage$, updateGotoPage } from '../Storage.js';
import Spinner from './Spinner.js';
import { Headbar } from '../Structure/Headbar.js';
import { HeadContents } from '../Structure/HeadContents';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import {axiosGet, axiosPost } from './Axios';
import { getLocalStorageData } from './LocalStorage';
export let Auth = () => {
    const [ appName, setAppName ] = useState('');  
    const [ redirectToPage, updateRedirectToPage ] = useState('');
    const [ token, updateToken ] = useState('');
    
    useEffect(() => {
        updateToken(getLocalStorageData('token'));
        gotoPage$.subscribe((gotoPage) => {
            updateRedirectToPage(gotoPage);
        });
        
    }, [token]);
    console.log("Auth -> token", token);
    console.log(token !== ' ');
    
    let runLogin = () => {
        setTimeout(() => {
            updateGotoPage('Login');
        }, 1500)
    }
    console.log("Auth -> token", token)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>

            <Headbar
               /*  appStatus={
                    <HeadbarStyle.statusContainer style={{marginTop: '100px'}}>
                        Du loggas in ...
                        <GenerallyStyle.logInSpinnerMov> {<Spinner/>}</GenerallyStyle.logInSpinnerMov>
                    </HeadbarStyle.statusContainer>
                }*/
                /> 
            <HeadContents/>
        </>
    );
}