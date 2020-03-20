import React, { useState, useEffect } from 'react';
import '../CSS/Headbar.css';
import { axiosPost } from '../Data/Axios.js';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { userData$, gotoPage$, getLogStatus } from '../Storage.js';
import { Auth } from '../Data/Authorization';
import { log } from 'util';

import { LogedIn } from '../../LogedIn.js';

import { localPubAppUrls } from '../Data/runAppUrls.js';

import { nfapply } from 'q';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let Headbar = (props) => {
    const { appStatus } = props;
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName ] = useState('Årsklockan');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    let [ gotoIntoPage, updateGotoIntoPage ] = useState('');

    useEffect(() => {
        setAppUrl(localPubAppUrls());
        userData$.subscribe((userDispalyingObj) => {
            
            setInlogStatus(userDispalyingObj.responsType);
            setInlogMess(userDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            updateGotoIntoPage(gotoPage);
        });

        /*         let getGotoPage = JSON.parse(window.localStorage.getItem("appData")).responsType;
        updateGotoPage(getGotoPage);
        */        //if (gotoPage === 'LogedOut') return <Redirect to={`${ appUrl }LogedOut`} />;
    }, [appUrl, gotoIntoPage]);

    return (
        <>
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    {appStatus}
                    <i className="material-icons askMarkMove">contact_support</i>
                </section> 
            </header>
        </>
    );
}