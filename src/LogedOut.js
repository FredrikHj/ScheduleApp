import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './Components/CSS/Generall.css';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { headName$, updateLogedIn } from './Components/GlobalProps.js';

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
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <section className="headContainer__logInOut">

                        <section className="logInOut__usernameContainer">
                            <p className="logInOut__username logInOut__inputLabelFormat">Användarnamn</p>
                            <input type="text" className="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                        </section> 
                        <section className="logInOut__passwordContainer">
                            <p className="logInOut__password logInOut__inputLabelFormat">Lösenord</p>
                            <input type="text" className="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/> 
                        </section>  
                        <section className="logInOut__btnOutContainer">
                            <input type="submit" className="btnContainer__submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                            <Link to="/LogIn" className="btnContainer__btnHeadline" onClick={ runLogInOut } id="logIn">
                                <p className="btnHeadline" id='logIn'>Logga In</p>
                            </Link>
                        </section>
                        <Link to="/UserReg" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="logIn">
                            <p className="logInOut__regLink">Registrera ny användare</p>
                        </Link>   
                    </section>  
                </section>
            </header>
            <main className="body__contents">
                <SearchBar/>
                <SQLTable/>
            </main>
        </>
    );
}