import React, { useState, useEffect } from 'react';
import '../CSS/Headbar.css';
import { axiosPost } from '../Data/Axios.js';
import { LoginForm } from '../Data/LoginForm'
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { userData$, gotoPage$, getLogStatus, updateGotoPage } from '../Storage.js';

import { log } from 'util';

import { LogedIn } from '../../LogedIn.js';

import { localPubAppUrls } from '../Data/runAppUrls.js';

import { nfapply } from 'q';

// Sending over formData for RunLogInOut
export let formInputObj = {};
export let Headbar = () => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName ] = useState('Årsklockan');
    let [ inlogMess, setInlogMess ] = useState('');
    let [ inlogStatus, setInlogStatus ] = useState(0);
    let [ gotoIntoPage, updateGotoIntoPage ] = useState('');
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');
    useEffect(() => {
        console.log('Headbar inne');
        
        setAppUrl(localPubAppUrls());
        userData$.subscribe((userDispalyingObj) => {
            //console.log(returningUserDispalyingObj);
            setInlogStatus(userDispalyingObj.responsType);
            setInlogMess(userDispalyingObj.logInMess);
        });
        gotoPage$.subscribe((gotoPage) => {
            console.log(gotoPage);
            updateGotoIntoPage(gotoPage);
        });

        /*         let getGotoPage = JSON.parse(window.localStorage.getItem("appData")).responsType;
        updateGotoPage(getGotoPage);
        */        //if (gotoPage === 'LogedOut') return <Redirect to={`${ appUrl }LogedOut`} />;
    }, [gotoIntoPage]);
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
    console.log("Headbar -> appUrl", appUrl)
    console.log("Headbar -> gotoIntoPage", gotoIntoPage)
    let runAuth = (e) => {
        
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
  
        /* Validate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: userNameStr, userPassWord: userPwdStr}
        //console.log(userInformation);
        axiosPost(targetBtnId, userInformation);    
        updateGotoPage(targetBtnId);
        //if (inlogStatus === 203) return; 
    }
    let runReg = () =>{

    }
    return (
        <>
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <LoginForm/>
                    <section className="headContainer__userLogInOut">
                        <section className="logInOut__usernameContainer">
                        <p className="logInOut__username logInOut__inputLabelFormat">Användarnamn</p>
                        <input type="text" className="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                    </section> 
                    <section className="logInOut__passwordContainer">
                        <p className="logInOut__password logInOut__inputLabelFormat">Lösenord</p>
                        <input type="text" className="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/> 
                    </section>  
                    <section className="logInOut__btnOutContainer">
                        <button className="btnContainer__submitBtn" id="Auth" onClick={ runAuth }>
                            <p className="btnHeadline" id='Auth' onClick={ runAuth }>Logga In</p>
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
                        <Link to={ `${ appUrl }UserReg` } className="logInOut__regLink" onClick={ runReg } id="reg">
                            <p className="logInOut__regLink">Registrera ny användare</p>
                        </Link>   
                    </section>
                    

                        
                        <Route exact path={`${appUrl}Login`} component={ LogedIn } />
                            {/*    {(gotoIntoPage === 'Auth') ? <Redirect to={`${appUrl}Auth`}/> : null}
                            {(gotoIntoPage === 'login') ? <Redirect to={`${appUrl}Login`}/> : null} */}
                    </section> 
                    {/* <Link to={ `${ appUrl }/HelpContact`} className="askMarkLink"> */}
                        <i className="material-icons askMarkMove">contact_support</i>
                    {/* </Link> */}
                </section>
                    {/* <img src="../Data/Img/baseline_contact_support_blacBigg.png" alt="Hjälp och kontakt"/>*/}                
            </header>
        </>
    );
}