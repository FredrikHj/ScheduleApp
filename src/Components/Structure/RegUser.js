import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import '../Style/RegUser.css';
import { specificStyleNewUserSend, specificStyleCancelUserReg } from '../Style/SpecificStyle';
import { RegStyle } from '../Style/RegStyle';

import { headName$, updateGotoPage } from '../Storage.js';

import { axiosPost } from '../Data/Axios.js';
import { Headbar } from './Headbar.js';
import { SubmitBtn } from '../Data/SubmitBtn';

export let RegUser = () => {
    let [ appName, setAppName ] = useState(''); 
    
    let [ userFullName, setUserFullName ] = useState('');
    let [ userName, setUserName  ] = useState('');
    let [ userPwd, setUserPWD ] = useState('');

    useEffect(() => {
        
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
    }, []);
    let runCancel = (e) => {
        // Gets the element        
        let targetBtnId = e.target.id; 
        updateGotoPage(targetBtnId);
    };
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;
        
        if (dataset.type === 'fullName') setUserFullName(inputStr);
        if (dataset.type === 'userName') setUserName(inputStr);
        if (dataset.type === 'userPwd') setUserPWD(inputStr);
    };
    let runSendNewUser = (e) => {

        let targetBtnId = e.target.id; 
        // Created a body for the added data
        let sqlBody = {
            fullName: userFullName,
            userName: userName,
            userPassWord: userPwd
        }
        console.log(sqlBody);
        
        axiosPost(targetBtnId, sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody
        // Get back to mainPage so you can loggin with the new user. Will fix some automatic later
        updateGotoPage('/');
        e.stopPropagation();
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Registrera`}</title>
            </Helmet>
            <Headbar
                appStatus={ 
                    <RegStyle.headContainer>
                        <RegStyle.regStatus>{ 'Regstatus' }</RegStyle.regStatus>
                        <SubmitBtn
                            style={ specificStyleCancelUserReg }
                            name={ 'Avbryt' }
                            onClickFunction={ runCancel }
                            id={ '/' }
                            type="buttom"
                        />
                    </RegStyle.headContainer>
                }
            />
            <section className="regUser__regContainer">
                <form>
                    <div>
                        <label id="userFullName">Ditt Namn</label>
                        <input type="text" id="userFullName" data-type="fullName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userName">Användarnamn</label>
                        <input type="text" id="userName" data-type="userName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userPwd">Lösenord</label>
                        <input type="text" id="userPwd" data-type="userPwd" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                    <SubmitBtn
                        style={ specificStyleNewUserSend }
                        name={ 'Registrera' }
                        onClickFunction={ runSendNewUser }
                        id={ 'userReg' }
                        type="buttom"
                    />
                    </div>
                </form>
            </section>
        </>  
    );
}