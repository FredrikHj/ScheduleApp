import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from './Components/Storage.js';

import './Components/Style/Spinner.scss';
import { LogedInStatus } from './Components/Structure/LogedInStatus';

import { Headbar } from './Components/Structure/Headbar';

import { MainContents } from './Components/Structure/MainContents';

import { runLogOut } from './Components/Data/CommonFunction';

export let LogedIn = () => {
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
                    <LogedInStatus
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                    />
                }
            />  

            <MainContents/>                 
        </>
    );
}
