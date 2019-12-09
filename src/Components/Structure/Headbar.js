import React, { useState, useEffect } from 'react';

import '../CSS/Headbar.css';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { returningUserData$, gotoPage$, getLogStatus } from '../GlobalProps.js';

import { log } from 'util';
import { LogedOut } from '../../LogedOut.js';
import { LogedIn } from '../../LogedIn.js';

import { runLogInOut } from '../Data/LogInOut.js';
import { runAppUrl } from '../Data/AppUrl.js';

import { nfapply } from 'q';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let Headbar = () => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName ] = useState('Årsklockan');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    let [ gotoPage, updateGotoPage ] = useState('LogedOut');
    
    useEffect(() => {
        setAppUrl(runAppUrl());
/* 
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        }); */
        returningUserData$.subscribe((returningUserDispalyingObj) => {
            console.log(returningUserDispalyingObj);
            setInlogStatus(returningUserDispalyingObj.responsType);
            setInlogMess(returningUserDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            console.log(gotoPage);
            updateGotoPage(gotoPage);
          });
        //if (gotoPage === 'LogedOut') return <Redirect to={`${ appUrl }LogedOut`} />;


    }, [inlogMess]);
        return (
            <>  
                {(gotoPage === 'LogIn') ? <Redirect to={`${appUrl}LogIn`}/> : null}

            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <section className="headContainer__userLogInOut">
                        <Route exact path={`${ appUrl }`} component={ LogedOut } />
                        <Route exact path={`${ appUrl }Login`} component={ LogedIn } />
                    </section>  
                </section>
            </header>
        </>
    );
}