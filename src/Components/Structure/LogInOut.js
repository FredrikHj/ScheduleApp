import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { inlogedUserFullName$, updateLogedInGlobal, logedInGlobal$, returningUserData$, localStorageObj$ } from '../GlobalProps.js';

import { axiosPost } from '../Data/Axios.js';
import { localStorageObj } from '../Data/LocalStorageObj.js';
import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let LogInOut = (props) => {
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ logedInLocalV, updateLogedInLocalV ] = useState(false);
    let [ userData, setUserData ] = useState({});

    let [ savedLocalStorageObj, updateSavedLocalStorageObj] = useState({});

    //const [ logedIn, updateLogedIn ] = useState(false);
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');
    
    useEffect(() => {
        console.log(inlogedUserFullName$.value);
        
        //if (logedInLocalV === true) return <Redirect to="/Inloggad"/>;
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {
            console.log(inlogedUserFullName);
            updateInlogedUser(inlogedUserFullName);
        });
        returningUserData$.subscribe((returningUserData) => {
            console.log(returningUserData);
            setUserData(returningUserData);
        });
        localStorageObj$.subscribe((localStorageObj) => {
            console.log(localStorageObj);
            updateSavedLocalStorageObj(localStorageObj);
        });
        logedInGlobal$.subscribe((logedInGlobal) => {
            console.log(logedInGlobal);
            updateLogedInLocalV(logedInGlobal);
        });
        console.log(inlogedUser);
    }, []);

    let runLogInOut = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
        
       
        if(targetBtnId === 'logIn') {
            
            // Validate that the user is found as a valid user
            userInformation = {userName: userNameStr, userPassWord: userPwdStr}
            console.log(userInformation);
            
            axiosPost('userValidate', userInformation);
            updateLogedInLocalV(true);

        }
        if(targetBtnId === 'logOout') {
            updateLogedInLocalV(false);

            let newLocalStorageObj = { 
                logedInState: localStorageObj['logedInState'] = false,
                fullName: localStorageObj['fullName']
            };
            console.log(newLocalStorageObj);
        }
    }
    let onChangeUserName = (e) => {
        let targetUserName = e.target.value;
        console.log(targetUserName);
        
        updateUserNameStr(targetUserName);
    }
    let onChangeUserPwd = (e) => {
        let targetUserPwd = e.target.value;
        console.log(targetUserPwd);
        updateUserPwdStr(targetUserPwd);
    }
    return (
        <section id="headbar__logInOut">
           
           {(logedInLocalV === false)
                ?
                <>
                <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/> 
                </>
                :
                <p id="logInOut__logIn">{`Välkommen in ${ inlogedUser }` }</p>
            }
            {(logedInLocalV === false)
                ?
                <section id="logInOut__btnContainer">
                    <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                    <Link to="/Inloggad" className="btnContainer__headline" onClick={ runLogInOut } id="logIn">
                        <p className="__headline" id='logIn'>Logga In</p>
                    </Link>
                </section>
                    :
                    <section id="logInOut__btnContainer" style={(logedInLocalV === true) ? {marginLeft: '-3px', marginTop: '-78px',} : null}>.
                    <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut} id="logOout" value="" />
                    <Link to="/" className="btnContainer__headline" onClick={ runLogInOut } id="logIn">
                        <p className="__headline" id="logOout">Logga Ut</p>
                    </Link>
                    </section>
            }

        </section>
    );
}