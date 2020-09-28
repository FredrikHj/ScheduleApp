/* ================================================== MainApp for the app ==================================================
   Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import inportant components for the specific page
import { headName$, userData$, updateGotoPage} from './Components/Storage.js';
import { RunSQLTable } from './Components/Structure/RunSQLTable';
import { Headbar } from './Components/Structure/Headbar.js';
import { routeName } from './Components/Data/RouteNames';
import { LoginForm } from './Components/Data/LoginForm'
import {axiosPost } from './Components/Data/Axios';

// Sending over formData for RunLogInOut
export let formInputObj = {};

export let MainPage = () => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ appName, setAppName ] = useState('');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');
    let [ redirectToPage ] = useState('Auth');

    useEffect(() => {   
        headName$.subscribe((headName) => {
            setAppName(headName);
        });
        userData$.subscribe((returningUserDispalyingObj) => {
            setInlogStatus(returningUserDispalyingObj.responsType);
            setInlogMess(returningUserDispalyingObj.logInMess);
        });
        if(redirectToPage === routeName.userReg) return <Redirect to={ `${ routeName.userReg }` } />
        
    }, [ redirectToPage ]);
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        updateUserNameStr(targetUserName);
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        updateUserPwdStr(targetUserPwd);
    }
    let runAuth = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
  
        /* Authorization with a token as response backValidate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: userNameStr, userPassWord: userPwdStr}
        
        axiosPost(targetBtnId, userInformation);    
        updateGotoPage(targetBtnId);
        //if (inlogStatus === 203) return; 
    }
    let runNewUserReg = (e) =>{
        // Gets the element
        let targetBtnId = e.target.id; 
        updateGotoPage(targetBtnId); 
    }    
    return (
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Utloggad`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <LoginForm
                        appUrl={appUrl}
                        onChangeUserName={onChangeUserName}
                        userNameStr={userNameStr}
                        onChangeUserPwd={onChangeUserPwd}
                        userPwdStr={userPwdStr}
                        runAuth={runAuth}
                        runNewUserReg={runNewUserReg}
                        inlogStatus={inlogStatus}
                        inlogMess={inlogMess}
                    />
                }
            />            
            <Route exact path={appUrl} component={ RunSQLTable }/>
        </>
    );
}