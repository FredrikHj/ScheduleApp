import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Spinner from '../Data/Spinner.js';
import { Headbar } from './Headbar';
import { LogedInStatus } from './LogedInStatus';

import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from '../Storage.js';
import { runLogOut, runReturnFromAddRecord } from '../Data/CommonFunction';

import '../Style/FormAdd.css';
import {GenerallyStyle } from '../Style/MainStyle'
import { TableHead } from './TableHead';
import { HeadTable } from './HeadTable';


import { axiosPost } from '../Data/Axios.js';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificBtnStyleGotTo } from '../Style/SpecificStyleBtn';

export let AddRecords = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');

    useEffect(() => {
        updateInlogedUserFullName(); 
        headName$.subscribe((headName) => {
            //console.log(headName);
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
                <title>{`${appName} - Lägg Till`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <LogedInStatus
                        inlogedUser={ inlogedUser }
                        functionLogOut={ runLogOut }
                        sumbitBtnGotTo= {
                            <SubmitBtn
                                style={ specificBtnStyleGotTo }
                                name={ 'Återgå' }
                                onClick={ runReturnFromAddRecord }
                                id={ 'Inloggad' }
                            />
                        }
                    />
                }
            />
            <HeadTable/>
        </>  
    );
}