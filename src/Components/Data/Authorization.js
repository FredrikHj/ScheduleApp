/* ================================================== HeadBar ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// Import CSS rouls
import { AuthStyle } from '../Style/AuthStyle';

// Import inportant components for the specific page
import { headName$, updateGotoPage } from '../Storage.js';
import { Headbar } from '../Structure/Headbar.js';
import Spinner from './Spinner.js';

export let Auth = () => {
    const [ appName, setAppName ] = useState('');  
    
    useEffect(() => {
        headName$.subscribe((headName) => {
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