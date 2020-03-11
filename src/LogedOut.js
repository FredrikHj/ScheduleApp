import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './Components/CSS/Generall.css';
import { axiosPost } from './Components/Data/Axios.js';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { headName$, userData$, getLogStatus, updateGotoPage, updateSavedSQLData} from './Components/Storage.js';

import { log } from 'util';

import { runLogInOut } from './Components/Data/LogInOut.js';
import { LogedIn } from './LogedIn.js';
import { runAppExtUrls } from './Components/Data/runAppUrls.js';

import { nfapply } from 'q';
import { setTimeout } from 'timers';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let LogedOut = () => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName, setAppName ] = useState('');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    const [ userNameStr, updateUserNameStr ] = useState(null);
    const [ userPwdStr, updateUserPwdStr ] = useState(null);
    
    useEffect(() => {
        setAppUrl(runAppExtUrls());
        //console.log('ecsfv');
        
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        userData$.subscribe((returningUserDispalyingObj) => {
            //console.log(returningUserDispalyingObj);
            setInlogStatus(returningUserDispalyingObj.responsType);
            setInlogMess(returningUserDispalyingObj.logInMess);
        });
    }, [inlogStatus]);
    //console.log(inlogStatus);
    
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        //console.log(targetUserName);
        
        updateUserNameStr(targetUserName);
        //formInputObj['userNameStr'] = targetUserName;
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        //console.log(targetUserPwd);
        updateUserPwdStr(targetUserPwd);
        //formInputObj['userPwdStr'] = targetUserPwd;
    }
    let runLogIn = (e) => {
        
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
  
        /* Validate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: userNameStr, userPassWord: userPwdStr}
        //console.log(userInformation);
        //updateGotoPage(login);
        axiosPost('Login', targetBtnId, userInformation);    
        if (inlogStatus === 203) return;
    }
    //LogedIn.runLogInOut();
    //console.log(LogedIn);
    
    let hideShowLoginMessPromise = () => {   
        let loginMess = getLogStatus().mess;
        /*         let hideShowLoginMessPromise = () => {
            
            let hideShowMess = new Promise((showHide, error) => {       
                showHide()
            });
            
            loginMess = hideShowMess().then(() => {
                setTimeout(() => {
                    let loginMess= '';
                    return loginMess;
                }, 3000);
                
            })
            return loginMess;
        } */
        
    } 
    
        return (
            <>  
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`${appName} - Utloggad`}</title>
                </Helmet>
                <section className="logInOut__usernameContainer">
                    <p className="logInOut__username logInOut__inputLabelFormat">Användarnamn</p>
                    <input type="text" className="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                </section> 
                <section className="logInOut__passwordContainer">
                    <p className="logInOut__password logInOut__inputLabelFormat">Lösenord</p>
                    <input type="text" className="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/> 
                </section>  
                <section className="logInOut__btnOutContainer">
                    <button className="btnContainer__submitBtn" onClick={ runLogIn } id="Login">
                        <p className="btnHeadline" id='Login'  onClick={ runLogIn }>Logga In</p>
                    </button>
                        
                </section>
                <section className="logInOut__userInfo">
                    <p className="logInOut__loginErrorMess">
                        {(inlogStatus === 203)
                            ? (userNameStr === null && userPwdStr === null ) 
                                ? inlogMess : null
                            : null
                        }
                    </p>
                    <Link to={ `${ appUrl }UserReg` } className="logInOut__regLink" onClick={ runLogInOut } id="logIn">
                        <p className="logInOut__regLink">Registrera ny användare</p>
                    </Link>   
                </section>
            </>

    );
}