import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { headName$, updateLogedIn, inlogedUserFullName$, updateLogedInGlobal } from './Components/GlobalProps.js';
import './Components/CSS/Headbar.css';
import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

import { runLogInOut } from './Components/Data/LogInOut.js';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let LogedOut = () => {
    let [ appName, setAppName ] = useState('');

    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');
    
    useEffect(() => {
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
    }, []);
    updateLogedIn(false);
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        console.log(targetUserName);
    
        updateUserNameStr(targetUserName);
        formInputObj['userNameStr'] = targetUserName;
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        console.log(targetUserPwd);
        updateUserPwdStr(targetUserPwd);
        formInputObj['userPwdStr'] = targetUserPwd;
    }
console.log(formInputObj);

    return (
        <>   
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>
            <header id="headbar__Container">
                <p id="headbar__headLine">{ appName }</p>
                <section id="headbar__logInOut">
                    <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                    <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/> 
                    <section id="logInOut__btnOutContainer">
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                        <Link to="/LogIn" className="btnContainer__headline" onClick={ runLogInOut } id="logIn">
                            <p className="__headline" id='logIn'>Logga In</p>
                        </Link>
                    </section>
                </section>
            </header>
            <SearchBar/>
            <SQLTable/>
        </>
    );
}