import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { updateSavedSQLData, updateReturningUserData } from '../GlobalProps.js';
import { setTimeout } from 'timers';

let savedSQLDataArr = [];
let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];
//let backendURL = 'https://hbgworks-poc-event-schedule.herokuapp.com'; // Deployat by Heroku 
let backendURL = 'http://localhost:3001'; // Just test the backend 

export let axiosGet = (getType) => {
    let type = '';
    // Type of post method
    if (getType === 'default') type = '/SQLData';
    if (getType === 'userSpec') type = `/SQLData/${ 1 }`;
    console.log(type);
    
        // Get the user inloged User and send into the backend for getting the correct user records 

    axios.get(backendURL + type).then(response => {
        // Store the incommingg API data in a variables
        let incommingSQLRes = response.data[0];

        console.log(response);
        /*  If incomming status of 200 = OK
            Data i push into a arry too  GlobalProps
            The array is holding the data until the webbbrowser is closed 
          
        Default get
        */
        if (response.status === 200 && getType === 'default') updateSavedSQLData(incommingSQLRes);
        if (response.status === 200 && getType === 'userSpec') updateSavedSQLData(response);
        
        /*  If incomming status of 201 = Created:
            Data i push into a arry that is holding the data until the webbbrowser is closed 
        */
        if (response.status === 201) {
            
            savedSQLDataArr[0].push(incommingSQLRes[0][0]);
            updateSavedSQLData[0](savedSQLDataArr);
        }
        else{
        }
    }).
    catch(error => {
        //console.log(error.response);
    });
}
let getUserId = () => {
    let getUserId = JSON.parse(window.localStorage.getItem("userData")).userId;
    return getUserId;
}
export let axiosPost = (postType, bodyData) => {  
    console.log(postType);
    let type = '';
    let sendToSqlBackend = {
        bodyData,
    };
    //console.log(sendToSqlBackend);
    // Type of post method
    if (postType === 'userValidate') type = 'UserValidate';
    if (postType === 'filter') type = 'filter';
    if (postType === 'add') type = 'AddRecord';
    if (postType === 'userReg') type = 'UserReg';
    
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).
    then(response => {
        if (postType === 'userValidate'){

            let returningUserData = response.data;    
            let returningUserLogsMess = response.statusText;
            let sendForDispalyingObj = { returningUserData, returningUserLogsMess };
            console.log(sendForDispalyingObj);
            
            console.log(response);
            //Send the incomming data for displaying the user login status
            updateReturningUserData(sendForDispalyingObj);

            console.log(returningUserData);
        }
    }).
    catch(error => {
        //console.log(error.response);
    });
}
