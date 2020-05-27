/* ================================================== HeadBar ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import inportant components for the specific page
import { HeadbarStyle, logaImage } from '../Style/MainStyle';

import { userData$, gotoPage$, incommingSiteLoga$ } from '../Storage.js';
import { backendURL } from '../Data/BackendURLPath';
import { axiosGet } from '../Data/Axios.js';

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
            if (logaNotSet === false) {
                setSiteLoga(incommingSiteLoga);
                setLogaNotSet(true);
            }
        });
        setInBackendUrl(backendURL);
        userData$.subscribe((userDispalyingObj) => {
            setInlogStatus(userDispalyingObj.responsType);
            setInlogMess(userDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            updateGotoIntoPage(gotoPage);
        });
    }, [inBackendURL, gotoIntoPage]);
    return (
        <>
            <HeadbarStyle.header>
                <HeadbarStyle.headContainer>
                    <HeadbarStyle.siteLogaContainer>
                        <img src={ inBackendURL + siteLoga } style={ logaImage } alt="HBG Loga"/>
                        <HeadbarStyle.headline>{ appName }</HeadbarStyle.headline>
                    </HeadbarStyle.siteLogaContainer>
                    <HeadbarStyle.appStatusContainer>
                        {appStatus}
                    </HeadbarStyle.appStatusContainer>
                </HeadbarStyle.headContainer>                     
            </HeadbarStyle.header>
        </>
    );
}