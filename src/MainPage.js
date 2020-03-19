import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './Components/CSS/Generall.css';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { headName$, userData$, getLogStatus} from './Components/Storage.js';
import { Headbar } from './Components/Structure/Headbar.js';

import { runLogInOut } from './Components/Data/LogInOut.js';
import { LogedIn } from './LogedIn.js';
import { localPubAppUrls } from './Components/Data/runAppUrls.js';
import { log } from 'util';
import { nfapply } from 'q';
import { setTimeout } from 'timers';
import { HeadContents } from './Components/Structure/HeadContents';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let MainPage = () => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName, setAppName ] = useState('');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);

    let [ redirectToPage, updateRedirectToPage ] = useState('Auth');

    useEffect(() => {
        setAppUrl(localPubAppUrls());
        //console.log('ecsfv');
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        userData$.subscribe((returningUserDispalyingObj) => {
            //console.log(returningUserDispalyingObj);
            setInlogStatus(returningUserDispalyingObj.responsType);
            setInlogMess(returningUserDispalyingObj.logInMess);
        });
        
    }, [redirectToPage, inlogStatus]);
    //console.log(inlogStatus);
    


    //LogedIn.runLogInOut();
    //console.log(LogedIn);
    
    let hideShowLoginMessPromise = () => {   
        let loginMess = getLogStatus().mess;
        /*         let hideShowLoginMessPromise = () => {
            
            let hideShowMess = new Promise((showHide, error) => {       
                showHide()
            });
            
            loginMess = hideShowMess().then(() => {
                setTimeout(() => {
                    let loginMess= '';
                    return loginMess;
                }, 3000);
                
            })
            return loginMess;
        } */
        
    } 
    
        return (
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>
            <Headbar/>
            <HeadContents/>
        </>

    );
}