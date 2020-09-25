/* ================================================== HeadBar ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import CSS rouls
import { specificStyleLogin, labelFormFocused, specificStyleUserReg } from '../Style/SpecificStyle';
import { LoginFormStyle } from '../Style/HeadbarStyle';

// Import inportant components for the specific page
import { SubmitBtn } from '../Data/SubmitBtn';

export let LoginForm = (props) => {
    const {onChangeUserName, onChangeUserPwd, userNameStr, userPwdStr, runAuth, runNewUserReg, inlogStatus, inlogMess} = props;    
    const [ inputFormSpecificFocusStyle, setInputFormSpecificFocusStyle ] = useState(null);
    useEffect(() => {

    }, [inputFormSpecificFocusStyle])
    // Handle the inlogg forms and its behaviour when clicking
    const handleInputForm = (e) => {
        const targetForm = e.target;
        const inputFormId = targetForm.id;
        console.log("handleInputForm -> inputFormId", inputFormId)
        if(inputFormId === "inputUserPassword"){
            setInputFormSpecificFocusStyle(labelFormFocused);
        }
    }
    return(
        <LoginFormStyle.headContainer>
            <LoginFormStyle.formContainer style={(inputFormSpecificFocusStyle === null) ? {marginTop: '22px'} : {marginTop: '35px'}}>
                <LoginFormStyle.usernameContainer>
                    <LoginFormStyle.labelFormNoFocus id="inputUserPassword" style={ inputFormSpecificFocusStyle } onClick={ handleInputForm }>Användarnamn</LoginFormStyle.labelFormNoFocus>
                    <LoginFormStyle.inputForm id="inputUserPassword" type="text" onChange={ onChangeUserName } value={ userNameStr } onClick={ handleInputForm }/>
                </LoginFormStyle.usernameContainer> 
                <LoginFormStyle.passwordContainer>
                    <LoginFormStyle.labelFormNoFocus id="inputUserPassword" style={ inputFormSpecificFocusStyle } onClick={ handleInputForm }>Lösenord</LoginFormStyle.labelFormNoFocus>
                    <LoginFormStyle.inputForm id="inputUserPassword" type="text" onChange={ onChangeUserPwd } value={ userPwdStr } onClick={ handleInputForm }/>
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
                    onClickFunction={ runNewUserReg }
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