import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateSavedSQLData, updateLocalstorage } from '../GlobalProps.js';
import  MainApp from '../../MainApp.js';
import { formInputObj } from '../../LogedOut.js';

import { axiosPost } from './Axios.js';
import { localStorageObj } from './LocalStorageObj.js';
import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let updatedUserNameStr = ''
export let updatedUserPwdStr = '';


export let runLogInOut = (e) => {
    let userInformation = {};
    let targetBtn = e.target; 
    // Gets the element
    let targetBtnId = targetBtn.id; 
    let targetBtnValue = targetBtn;
    console.log(targetBtn);
    
    if(targetBtnId === 'logIn') {
        
        // Validate that the user is found as a valid user
        userInformation = {userName: formInputObj.userNameStr, userPassWord: formInputObj.userPwdStr}
        console.log(userInformation);

        axiosPost('userValidate', userInformation);
    }
    if(targetBtnId === 'logOout') {
        updateLocalstorage(false, {});
        
        return <Redirect to="/"/>;
    }
    if(targetBtnId === 'add') {
        // Emtying the data array when getting new user specific records
    }
    if(targetBtnId === 'cancelAdd') {
        //updateLocalstorage(false, {});    

    }
}