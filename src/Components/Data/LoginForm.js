import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from '../Style/MainStyle';
import { LoginFormStyle } from '../Style/LoginFormStyle';
import { routeName } from '../Data/RouteNames';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

export let LoginForm = (props) => {
    const {appUrl, onChangeUserName, onChangeUserPwd, userNameStr, userPwdStr, runAuth, runReg, inlogStatus, inlogMess} = props;
    return(
        <HeadbarStyle.statusContainer>
            <LoginFormStyle.usernameContainer>
                <LoginFormStyle.labelFormatUsernamePassword>Användarnamn</LoginFormStyle.labelFormatUsernamePassword>
                <LoginFormStyle.inputFormatUsernamePassword type="text" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
            </LoginFormStyle.usernameContainer> 
            <LoginFormStyle.passwordContainer>
                <LoginFormStyle.labelFormatUsernamePassword>Lösenord</LoginFormStyle.labelFormatUsernamePassword>
                <LoginFormStyle.inputFormatUsernamePassword type="text" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/>
            </LoginFormStyle.passwordContainer>  

            <LoginFormStyle.btnLoginContainer>
                <LoginFormStyle.btnSubmitContainer id="Auth" onClick={ runAuth }>
                    <LoginFormStyle.btnHeadline id='Auth' onClick={ runAuth }>Logga In</LoginFormStyle.btnHeadline>
                </LoginFormStyle.btnSubmitContainer> 
            </LoginFormStyle.btnLoginContainer>
            
            <LoginFormStyle.userInfoContainer>
                <LoginFormStyle.userErrorMess>
                    {(inlogStatus === 203)
                        ? (userNameStr === null && userPwdStr === null ) 
                            ? inlogMess : null
                        : null
                    }
                </LoginFormStyle.userErrorMess>
                <LoginFormStyle.regLink>
                    <Link to={ appUrl + routeName.userReg } onClick={ runReg } id="reg">
                        Registrera ny användare
                    </Link>
                </LoginFormStyle.regLink>
            </LoginFormStyle.userInfoContainer>
        </HeadbarStyle.statusContainer>
    );
}