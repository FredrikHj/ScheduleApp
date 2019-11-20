import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { FormAdd } from './FormAdd.js';
import { updateLogedInGlobal,logedIn$, fullName$ } from '../GlobalProps.js';

import { axiosPost } from '../Data/Axios.js';
import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let LogInOut = (props) => {
    let [ isLogedIn, setIsLogedIn ] = useState(false);
    let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');

    const [ userPlaceholder, updateUserPlaceholder] = useState('...');
    const [ pwdPlaceholder, updatePwdPlaceholder] = useState('...');
    //const [ logedIn, updateLogedIn ] = useState(false);
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');

    useEffect(() => {
        fullName$.subscribe((fullName) => {
            console.log(fullName);
            setInlogedFullUserName(fullName);
        });
    }, []);
    let runLogInOut = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
        if(targetBtnId === 'logIn') {
            userInformation = {userName: userNameStr, userPassWord: userPwdStr}
            
            // Validate that the user is found as a valid user
            axiosPost('userValidate', userInformation);
            console.log(inlogedFullUserName);
            setIsLogedIn(true);
            updateLogedInGlobal(true);
            handleLocalStorage('logIn');
        }
        if(targetBtnId === 'logOout') {
            setIsLogedIn(false);
            updateLogedInGlobal(false);

            handleLocalStorage('logOut');
        }
        console.log(targetBtnId);
        
    }
    let handleLocalStorage = (logStatus) => {
        /* console.log(isLogedIn);
        console.log(inlogedFullUserName);
        let localStorageObj = {isLogedIn, inlogedFullUserName};

        if (logStatus === 'logIn') window.localStorage.setItem('userData', JSON.stringify(localStorageObj));
        if (logStatus === 'logOut') window.localStorage.clear('userData');
 */    }
    console.log(window.localStorage.getItem("userData"));
    
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        updateUserNameStr(targetUserName);
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        updateUserPwdStr(targetUserPwd);
    }
    
    return (
        <section id="headbar__logInOut">
            {(isLogedIn === false)
                ?
                    <>
                        <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder={ userPlaceholder }/>
                        <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder={ pwdPlaceholder }/> 
                    </>
                :
                    <p id="logInOut__logIn">{`Välkommen in ${ inlogedFullUserName }` }</p>
            }
            {(isLogedIn === false)
                ?
                    <section id="logInOut__btnContainer">
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logIn">Logga In</p>
                    </section>
                :
                    <section id="logInOut__btnContainer" style={(isLogedIn === true) ? {marginLeft: '-3px', marginTop: '-78px',} : null}>.
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut} id="logOout" value="" />
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logOout">Logga Ut</p>
                    </section>
            }
        </section>
    );
}