import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../Style/RegUser.css';
import { specificStyleNewUserSend, specificStyleCancellUserReg } from '../Style/SpecificStyle';
import { RegStyle } from '../Style/RegStyle';

import { headName$ } from '../Storage.js';

import { axiosPost, axiosGet } from '../Data/Axios.js';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { Headbar } from './Headbar.js';
import { SubmitBtn } from '../Data/SubmitBtn';


let countRegUser = 0;

export let RegUser = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ appUrl, setAppUrl ] = useState('/');
    let [ inlogedUser, updateInlogedUser ] = useState('');

    let [ userFullName, setUserFullName ] = useState('');
    let [ userName, setUserName  ] = useState('');
    let [ userPwd, setUserPWD ] = useState('');

    useEffect(() => {
        
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
    }, []);
    let setStrsType = (e) => {
        //console.log('nyh');
        
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;
        //console.log(inputStr);
        

        if (dataset.type === 'fullName') setUserFullName(inputStr);
        if (dataset.type === 'userName') setUserName(inputStr);
        if (dataset.type === 'userPwd') setUserPWD(inputStr);
    };

     let sendUserReg = (e) => {
        let targetBtnId = e.target.id; 
        // Created a body for the added data
        let sqlBody = {
            fullName: userFullName,
            userName: userName,
            userPassWord: userPwd
        }
        //console.log(sqlBody);
        
        axiosPost('userReg', 'targetBtnId', sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody.splice(0, 1);
    };
    let runSendNewUser = (e) => {

    }
    let runCancell = (e) => {

    }
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
                            style={ specificStyleCancellUserReg }
                            name={ 'Avbryt' }
                            onClickFunction={ runCancell }
                            id={ 'Auth' }
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