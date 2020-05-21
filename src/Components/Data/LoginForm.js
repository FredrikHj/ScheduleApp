import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LoginFormStyle } from '../Style/LoginFormStyle';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificStyleLogin, labelFormFocused, specificStyleUserReg } from '../Style/SpecificStyle';

import { routeName } from './RouteNames';
export let LoginForm = (props) => {
    const {appUrl, onChangeUserName, onChangeUserPwd, userNameStr, userPwdStr, runAuth, runReg, inlogStatus, inlogMess} = props;    
    const [ specificFocusStyleUsrLabel, setSpecificFocusStyleUsrLabel ] = useState({});
    const [ specificFocusStylePswLabel, setSpecificFocusStylePswLabel ] = useState({});
    useEffect(() => {

    }, [specificFocusStyleUsrLabel])
    const handleInputForm = (e) => {
        const targetForm = e.target;
        const inputFormId = targetForm.id;
        console.log("handleInputForm -> inputFormId", inputFormId)
        if(inputFormId === "labelUserName") setSpecificFocusStyleUsrLabel(labelFormFocused);
        if(inputFormId === "labelPassword") setSpecificFocusStylePswLabel(labelFormFocused);
    }
   
    return(
        <LoginFormStyle.headContainer>
            <LoginFormStyle.formContainer>
                <LoginFormStyle.usernameContainer>
                    <LoginFormStyle.labelFormNoFocus id="labelUserName" style={ specificFocusStyleUsrLabel } onClick={ handleInputForm }>Användarnamn</LoginFormStyle.labelFormNoFocus>
                    <LoginFormStyle.inputForm id="labelUserName" type="text" onChange={ onChangeUserName } value={ userNameStr } onClick={ handleInputForm }/>
                </LoginFormStyle.usernameContainer> 
                <LoginFormStyle.passwordContainer>
                    <LoginFormStyle.labelFormNoFocus id="labelPassword" style={ specificFocusStylePswLabel } onClick={ handleInputForm }>Lösenord</LoginFormStyle.labelFormNoFocus>
                    <LoginFormStyle.inputForm id="labelPassword" type="text" onChange={ onChangeUserPwd } value={ userPwdStr } onClick={ handleInputForm }/>
                </LoginFormStyle.passwordContainer>  
            </LoginFormStyle.formContainer>
                <LoginFormStyle.btnLoginContainer>
                <SubmitBtn
                    style={ specificStyleLogin }
                    name={ 'Logga In' }
                    onClickFunction={ runAuth }
                    id={ 'Auth' }
                    type="buttom"
                />
            </LoginFormStyle.btnLoginContainer>
            <SubmitBtn
                    style={ specificStyleUserReg }
                    name={ 'Ny Användare' }
                    onClickFunction={ runReg }
                    id={ 'Registrera' }
                    type="buttom"
            />
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