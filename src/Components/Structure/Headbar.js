import React, { useState, useEffect } from 'react';
import { GenerallyStyle, HeadbarStyle } from '../Style/MainStyle';

import { backendURL } from '../Data/BackendURLPath';
import { axiosGet } from '../Data/Axios.js';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { userData$, gotoPage$, incommingSiteLoga$ } from '../Storage.js';
import { Auth } from '../Data/Authorization';
import { log } from 'util';

import { LogedIn } from '../../LogedIn.js';

import { localPubAppUrls } from '../Data/runAppUrls.js';

import { nfapply } from 'q';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let Headbar = (props) => {
    const { appStatus } = props;
    let [ inBackendURL, setInBackendUrl ] = useState('');
    let [ logaNotSet, setLogaNotSet ] = useState(false);
    let [ siteLoga, setSiteLoga ] = useState('');
    let [ appName ] = useState('******* ENHETEN • WORKSHOPS');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    let [ gotoIntoPage, updateGotoIntoPage ] = useState('');

    useEffect(() => {
        axiosGet('getLoga', '');

        incommingSiteLoga$.subscribe((incommingSiteLoga) => {  
        console.log("Headbar -> incommingSiteLoga", incommingSiteLoga)
            if (logaNotSet === false) {
                setSiteLoga(incommingSiteLoga);
                console.log("Headbar -> logaNotSet", logaNotSet)
                setLogaNotSet(true);
            }
        });
        setInBackendUrl(backendURL);
        console.log("Headbar -> backendURL", backendURL)
        userData$.subscribe((userDispalyingObj) => {
            setInlogStatus(userDispalyingObj.responsType);
            setInlogMess(userDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            updateGotoIntoPage(gotoPage);
        });
    }, [inBackendURL, gotoIntoPage]);
    console.log("Headbar -> siteLoga", siteLoga)

    return (
        <>
            <HeadbarStyle.header>
                <HeadbarStyle.headContainer>
                    <HeadbarStyle.headline>
                        <img src={ inBackendURL + siteLoga } alt="waef"/>
                        { appName }
                        </HeadbarStyle.headline>
                    {appStatus}
                </HeadbarStyle.headContainer> 
                    
                    
                    
                    {/* <GenerallyStyle.askMarkMove><i className="material-icons">contact_support</i></GenerallyStyle.askMarkMove> */}
            </HeadbarStyle.header>
        </>
    );
}