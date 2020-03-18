import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateGotoPage, userData$, getLogStatus } from '../Storage.js';
import { formInputObj } from '../../MainPage.js';
import { axiosPost } from './Axios.js';

import '../CSS/LogInOut.css';
import { localPubAppUrls } from './runAppUrls.js';

import { isArray } from 'util';

/* export let updatedUserNameStr = ''
export let updatedUserPwdStr = ''; */
console.log(userData$.value);

export let runLogInOut = (e) => {

    let userInformation = {};
    let targetBtn = e.target; 
    // Gets the element
    let targetBtnId = targetBtn.id; 
    let targetBtnValue = targetBtn;
    console.log(targetBtn);
    // Things happen according to whare I click
    if(targetBtnId === 'LogIn') {
        
        /* Validate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: formInputObj.userNameStr, userPassWord: formInputObj.userPwdStr}
        console.log(userInformation);
        
        axiosPost('userValidate', userInformation);

        // inkludera en promise så funktionen nedan väntar på att axios har data
        let promiseRunGotoPage = new Promise((run, error) => {
            console.log('promise running :)');
            console.log(getLogStatus.type);
            
            if (getLogStatus.type === 200) {
                
                run();
            }
        });

        promiseRunGotoPage.then(() => {
            // Check if you are able loggin according to the incomming data
            if (getLogStatus().type === 200){
                console.log('klj');
                
                updateGotoPage(targetBtnId);
                }
            if (getLogStatus().type === 203) return;
            //formInputObj = {};
        });

    }
    if(targetBtnId === 'LogOut') {


        
        return <Redirect to={ localPubAppUrls() }/>;
    }
}