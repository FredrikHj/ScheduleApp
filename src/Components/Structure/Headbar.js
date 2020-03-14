import React, { useState, useEffect } from 'react';

import '../CSS/Headbar.css';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { userData$, gotoPage$, getLogStatus } from '../Storage.js';

import { log } from 'util';
import { LogedOut } from '../../LogedOut.js';
import { LogedIn } from '../../LogedIn.js';

import { localPubAppUrls } from '../Data/runAppUrls.js';

import { nfapply } from 'q';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let Headbar = () => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName ] = useState('Årsklockan');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    let [ gotoIntoPage, updateGotoIntoPage ] = useState('');
    
    useEffect(() => {
        console.log('Headbar inne');
        
        setAppUrl(localPubAppUrls());
        userData$.subscribe((userDispalyingObj) => {
            //console.log(returningUserDispalyingObj);
            setInlogStatus(userDispalyingObj.responsType);
            setInlogMess(userDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            console.log(gotoPage);
            updateGotoIntoPage(gotoPage);
        });
/*         let getGotoPage = JSON.parse(window.localStorage.getItem("appData")).responsType;
        updateGotoPage(getGotoPage);
 */        //if (gotoPage === 'LogedOut') return <Redirect to={`${ appUrl }LogedOut`} />;
    }, [gotoIntoPage]);
    console.log("Headbar -> appUrl", appUrl)
    console.log("Headbar -> gotoIntoPage", gotoIntoPage)

        return (
            <>
                <header>
                    <section className="headbar__headContainer">
                        <p className="headContainer__headline">{ appName }</p>
                        <section className="headContainer__userLogInOut">
                            <Route exact path={`${ appUrl }`} component={ LogedOut } />
                            <Route exact path={`${appUrl}Login`} component={ LogedIn } />
                                {(gotoIntoPage === 'login') ? <Redirect to={`${appUrl}Login`}/> : null}
                        </section> 
                        {/* <Link to={ `${ appUrl }/HelpContact`} className="askMarkLink"> */}
                            <i class="material-icons askMarkMove">contact_support</i>
                        {/* </Link> */}
                    </section>
                        {/* <img src="../Data/Img/baseline_contact_support_blacBigg.png" alt="Hjälp och kontakt"/>*/}                
                </header>
            </>
    );
}