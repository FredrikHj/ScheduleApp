import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

export let LoginForm = (props) => {
    const {appUrl, onChangeUserName, onChangeUserPwd, userNameStr, userPwdStr, runAuth, runReg, inlogStatus, inlogMess} = props;
    return(
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
        </section>
    );
}