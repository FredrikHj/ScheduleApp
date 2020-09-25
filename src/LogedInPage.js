/* ================================================== LogedIn page ==================================================
   Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// Import inportant components for the specific page
import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from './Components/Storage.js';
import { MainContents } from './Components/Structure/MainContents';
import { LogedIn } from './Components/Structure/LogedIn';
import { runLogOut } from './Components/Data/CommonFunction';
import { Headbar } from './Components/Structure/Headbar';

export let LogedInPage = () => {
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ appName, setAppName ] = useState('');

    useEffect(() => {
        //setTimeout(() => {
            updateInlogedUserFullName();
        //}, 1000);
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
            updateInlogedUser(inlogedUserFullName);
        }); 
    }, []); 

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Inloggad`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <LogedIn
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                    />
                }
            />  
            <MainContents/>                 
        </>
    );
}
