import React, { useState, useEffect } from 'react';
import { FormAdd } from './FormAdd.js';
import { axiosPost, axiosGet } from '../Data/Axios.js';

import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let LogInOut = (props) => {
    const [ userPlaceholder, updateUserPlaceholder] = useState('...');
    const [ pwdPlaceholder, updatePwdPlaceholder] = useState('...');
    const [ logedIn, updateLogedIn ] = useState(false);
    const [ userNameStr, updateUserNameStr ] = useState('');
    const [ userPwdStr, updateUserPwdStr ] = useState('');

    useEffect(() => {
/*         headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName$.value);
        }); */


    }, []);
    let userValidate = (userData) => {
        axiosPost('userValidate', userData);
    }
    let runLogInOut = (e) => {
        let userInformation = {};
        // Gets the element
        let targetBtnId = e.target.id; 
        if(targetBtnId === 'logIn') {
            userInformation = {username: userNameStr, userPwd: userPwdStr}
            userValidate(userInformation);
            updateLogedIn(true);
        }
        if(targetBtnId === 'logOout') {
            
            
            updateLogedIn(false);
        }
        console.log(targetBtnId);
        
    }
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
            <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ onChangeUserName } value={ userNameStr } placeholder={ userPlaceholder }/>
            <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder={ pwdPlaceholder }/> 
            
            {(logedIn === false)
                ?
                    <section id="logInOut__btnContainer">
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logIn" value=""/>
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logIn">Logga In</p>
                    </section>
                :
                    <section id="logInOut__btnContainer">
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut } id="logOout" value="" />
                        <p className="btnContainer__headline" onClick={ runLogInOut } id="logOout">Logga Ut</p>
                    </section>
            }
        </section>
    );
}