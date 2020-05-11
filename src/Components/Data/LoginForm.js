import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from '../Style/MainStyle';
import { LoginFormStyle } from '../Style/LoginFormStyle';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificBtnLStyleLogin, regLink } from '../Style/SpecificStyleBtn';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { routeName } from './RouteNames';
export let LoginForm = (props) => {
    const {appUrl, onChangeUserName, onChangeUserPwd, userNameStr, userPwdStr, runAuth, runReg, inlogStatus, inlogMess} = props;

    return(
        <LoginFormStyle.headContainer>
                <LoginFormStyle.usernameContainer>
                    <LoginFormStyle.labelFormatUsernamePassword>Användarnamn</LoginFormStyle.labelFormatUsernamePassword>
                    <LoginFormStyle.inputFormatUsernamePassword type="text" onChange={ onChangeUserName } value={ userNameStr } placeholder="..."/>
                </LoginFormStyle.usernameContainer> 

                <LoginFormStyle.passwordContainer>
                    <LoginFormStyle.labelFormatUsernamePassword>Lösenord</LoginFormStyle.labelFormatUsernamePassword>
                    <LoginFormStyle.inputFormatUsernamePassword type="text" onChange={ onChangeUserPwd } value={ userPwdStr } placeholder="..."/>
                </LoginFormStyle.passwordContainer>  
            
                <LoginFormStyle.btnLoginContainer>
                    <SubmitBtn
                        style={ specificBtnLStyleLogin }
                        name={ 'Logga In' }
                        onClick={ runAuth }
                        id={ 'Auth' }
                        type="buttom"
                    />
                </LoginFormStyle.btnLoginContainer>
                <Link to={ appUrl + routeName.userReg } /* onClick={ runReg }  */id="Registrera" style={ regLink }>Ny Användare</Link>            
            <LoginFormStyle.userInfoContainer>
                <LoginFormStyle.userErrorMess>
                    {(inlogStatus === 203)
                        ? (userNameStr === null && userPwdStr === null ) 
                            ? inlogMess : null
                        : null
                    }
                </LoginFormStyle.userErrorMess>

            </LoginFormStyle.userInfoContainer>
        </LoginFormStyle.headContainer>
    );
}