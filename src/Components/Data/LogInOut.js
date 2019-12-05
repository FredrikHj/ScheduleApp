import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateLocalstorage, updateGotoPage, getLogStatus } from '../GlobalProps.js';
import { formInputObj } from '../../LogedOut.js';

import { axiosPost } from './Axios.js';

import '../CSS/LogInOut.css';

import { isArray } from 'util';

/* export let updatedUserNameStr = ''
export let updatedUserPwdStr = ''; */

export let runLogInOut = (e) => {
    let userInformation = {};
    let targetBtn = e.target; 
    // Gets the element
    let targetBtnId = targetBtn.id; 
    let targetBtnValue = targetBtn;
    console.log(targetBtn);
    // Things happen according to whare I click
    if(targetBtnId === 'logIn') {
        
        /* Validate that the user is found as a valid user
            if user do not find it will not login and shows an error mess instead
        */
        userInformation = {userName: formInputObj.userNameStr, userPassWord: formInputObj.userPwdStr}
        console.log(getLogStatus().type);

        axiosPost('userValidate', userInformation);
        // Check if you are able loggin according to the incomming data
        if (getLogStatus().type === 200) updateGotoPage('LogIn');
        if (getLogStatus().type === 203) return;
    }
    if(targetBtnId === 'logOout') {
        updateLocalstorage({
            responsType: null,
            logInMess: null, 
            incommingUserData: {
                loginName: null
            }
        });
        
        return <Redirect to="/"/>;
    }
}