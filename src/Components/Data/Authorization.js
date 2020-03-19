import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { headName$, gotoPage$ } from '../Storage.js';
import Spinner from './Spinner.js';

import {axiosGet, axiosPost } from './Axios';

export let Auth = () => {
    let [ appName, setAppName ] = useState('');  
    let [ redirectToPage, updateRedirectToPage ] = useState('');
 
    useEffect(() => {
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        gotoPage$.subscribe((gotoPage) => {
            updateRedirectToPage(gotoPage);
        });
    });


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>
            Du Authentiseras ...
            <div className="logInSpinnerMove"> {<Spinner/>}</div>
        </>
    );
}