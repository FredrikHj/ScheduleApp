import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { fullName$, updateLocalstorage, localStorageObj$ } from '../GlobalProps.js';

import { axiosPost } from '../Data/Axios.js';
import { localStorageObj } from '../Data/LocalStorageObj.js';
import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let LogInOut = (props) => {
    let [ logedInLocalV, updateLogedInLocalV ] = useState(Boolean);
    let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');

    let [ savedLocalStorageObj, updateSavedLocalStorageObj] = useState({});

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
        //The data in localstorage is converted to a normal object and save into a hooks useing later
        localStorageObj$.subscribe((localStorageObj) => {
            console.log(localStorageObj);
            updateSavedLocalStorageObj(localStorageObj);
        });
    }, []);
    console.log(savedLocalStorageObj);
    let runLogInOut = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
        
       
        if(targetBtnId === 'logIn') {
            
            // Validate that the user is found as a valid user
            userInformation = {userName: userNameStr, userPassWord: userPwdStr}
            axiosPost('userValidate', userInformation);
            //setIsLogedIn(true);
            //updateLogedInGlobal(true); 
             let newLocalStorageObj = { 
                logedInState: localStorageObj['logedInState'] = true,
                fullName: localStorageObj['fullName'] = inlogedFullUserName
            };
            updateLocalstorage(newLocalStorageObj);
        }
        if(targetBtnId === 'logOout') {
            //setIsLogedIn(false);
            //updateLogedInGlobal(false);
            let newLocalStorageObj = { 
                logedInState: localStorageObj['logedInState'] = false,
                fullName: localStorageObj['fullName']
            };
            console.log(newLocalStorageObj);
            
            updateLocalstorage(newLocalStorageObj);
        }
    }

    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        updateUserNameStr(targetUserName);
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        updateUserPwdStr(targetUserPwd);
    }
    console.log(savedLocalStorageObj);
    
    let logedInStatus = () => {
        return (!savedLocalStorageObj) ? logedInLocalV : savedLocalStorageObj.logedInState;
    }
    return (
        <section id="headbar__logInOut">
            {(logedInStatus() === false)
                ?
                    <>
                        <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder={ userPlaceholder }/>
                        <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder={ pwdPlaceholder }/> 
                    </>
                :
                    <p id="logInOut__logIn">{`Välkommen in ${ savedLocalStorageObj.fullName }` }</p>
            }
            {(logedInStatus() === false)
                ?
                    <section id="logInOut__btnContainer">
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logIn">Logga In</p>
                    </section>
                :
                    <section id="logInOut__btnContainer" style={(logedInStatus() === true) ? {marginLeft: '-3px', marginTop: '-78px',} : null}>.
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut} id="logOout" value="" />
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logOout">Logga Ut</p>
                    </section>
            }
        </section>
    );
}