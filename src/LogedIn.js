import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from './Components/Style/MainStyle';
import { LogedInStyle } from './Components/Style/LogedInStyle';
import { GenerallyStyle } from './Components/Style/MainStyle'
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import './Components/Style/Spinner.scss';

import { HeadTable } from './Components/Structure/HeadTable';
import { axiosPost } from './Components/Data/Axios';
import { Headbar } from './Components/Structure/Headbar';
import Spinner from './Components/Data/Spinner';
import { SubmitBtn } from './Components/Data/SubmitBtn';
import { specificBtnStyleLogout, specificBtnStyleAddRecords } from './Components/Style/SpecificStyleBtn';

import { MainPage } from './MainPage.js';
import axios from 'axios';
import { headName$, updateInlogedUserFullName, updateLocalstorage, inlogedUserFullName$, updateGotoPage } from './Components/Storage.js';

import { log } from 'util';

import { localPubAppUrls } from './Components/Data/runAppUrls.js';

export let LogedIn = (props) => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ appName, setAppName ] = useState('');
    let [ addRecords, seAddRecords ] = useState(false);   

    useEffect(() => {
        setTimeout(() => {
            updateInlogedUserFullName();
        }, 1000);
        setAppUrl(localPubAppUrls());
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
            updateInlogedUser(inlogedUserFullName);
        }); 
    }, []);
    let runLogOut = (e) => {
        // Gets the element
        let targetBtnId = e.target.id;     
        console.log("runLogOut -> targetBtnId", targetBtnId)
        updateGotoPage(targetBtnId);

        updateLocalstorage(window.localStorage.clear());
        //axiosPost('', targetBtnId, '');
    }
    let runAddRecord = (e) => {
        // Gets the element
        let targetBtnId = e.target.id;     
        seAddRecords(true);
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Inloggad`}</title>
            </Helmet>
            <Headbar
                appStatus={
                    <>
                        <LogedInStyle.statusContainer>
                            {(inlogedUser === '' ) 
                                ? <>
                                        Välkommen in ... <Spinner/>
                                    </>
                                : `Välkommen in ${ inlogedUser }`
                            }
                        </LogedInStyle.statusContainer>
                        <LogedInStyle.btnSubmitLogoutInTopUp>
                            <SubmitBtn
                                style={ specificBtnStyleLogout }
                                name={ 'Logga Ut' }
                                onClick={ runLogOut }
                                id={ '/' }
                            />
                        </LogedInStyle.btnSubmitLogoutInTopUp> 
                        {(addRecords !== true)
                            ?   <SubmitBtn
                                    style={ specificBtnStyleAddRecords }
                                    name={ 'Lägga Till' }
                                    onClick={ runAddRecord }
                                    id={ 'AddRecords' }
                                />
                            :   <SubmitBtn
                                    style={ specificBtnStyleAddRecords }
                                    name={ 'Återgå' }
                                    onClick={ runAddRecord }
                                    id={ 'Return' }
                                />
                        }

                    </>
                }
            />

            <HeadTable
                addRecords={ addRecords }
            />
        </>
    );
}
/* <div className="btnContainer__btnAdd">
    <input type="submit" className="btnLogOut__input" onClick={ MainPage.runLogInOut } id="add" value=""/>
    <Link to={ `${ appUrl }/Add`} className="btnContainer__inputHeadline" onClick={ MainPage.runLogInOut } id="add">
        <p className="btnHeadline__add" id='add'>Lägg Till</p>
    </Link>
</div> */