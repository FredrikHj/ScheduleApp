import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { headName$, userData$, updateGotoPage} from './Components/Storage.js';

import {Helmet} from "react-helmet";

import { routeName } from './Components/Data/RouteNames';
import { LoginForm } from './Components/Data/LoginForm'
import {axiosPost } from './Components/Data/Axios';

import { Headbar } from './Components/Structure/Headbar.js';
import { MainContents } from './Components/Structure/MainContents';
import { RegUser } from './Components/Structure/RegUser';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let MainPage = () => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ appName, setAppName ] = useState('');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');
    let [ redirectToPage, updateRedirectToPage ] = useState('Auth');

    useEffect(() => {   
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
        if(redirectToPage === '/') return <Redirect to='/' />
        if(redirectToPage === 'RegUser') return <Redirect to='/Auth' />
        
    }, []);
    //console.log(inlogStatus);
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        //;
        
        updateUserNameStr(targetUserName);
        //formInputObj['userNameStr'] = targetUserName;
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        //;
        updateUserPwdStr(targetUserPwd);
        //formInputObj['userPwdStr'] = targetUserPwd;
    }
    let runAuth = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
        console.log("runAuth -> targetBtnId", targetBtnId)
  
        /* Authorization with a token as response backValidate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: userNameStr, userPassWord: userPwdStr}
        
        axiosPost(targetBtnId, userInformation);    
        updateGotoPage(targetBtnId);
        //if (inlogStatus === 203) return; 
    }
    let runReg = (e) =>{
        console.log(e);
        
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
                        runReg={runReg}
                        inlogStatus={inlogStatus}
                        inlogMess={inlogMess}
                    />
                }
            />
            <Route exact path={appUrl} component={ MainContents }/>
            <Route exact path={ appUrl + routeName.userReg } component={ RegUser }/>   
        </>
    );
}