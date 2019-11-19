import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { updateSavedSQLData/* , updateSQLFilterMonthsBtnsArr,  updateSQLFilterConcernedBtnsArr */ } from '../GlobalProps.js';
import { setTimeout } from 'timers';

let savedSQLDataArr = [];
let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];

console.log(process.env);
let backendURL = 'https://hbgworks-poc-event-schedule.herokuapp.com'; // Deployat by Heroku 
//let backendURL = 'http://localhost:3001'; // Just test the backend 

export let axiosGet = (getStr) => {

    console.log(backendURL + getStr);
    
    axios.get(backendURL + getStr).then(response => {
        // Store the incommingg API data in a variables
        let incommingSQLRes = response.data[0];

        console.log(response);
        /*  If incomming status of 200 = OK:
            Data i push into a arry that is holding the data until the webbbrowser is closed 
            */
            console.log(incommingSQLRes);
        if (response.status === 200) {
            //savedSQLDataArr.push(incommingSQLRes);         
            updateSavedSQLData(incommingSQLRes);
        }
        /*  If incomming status of 201 = Created:
            Data i push into a arry that is holding the data until the webbbrowser is closed 
        */
        if (response.status === 201) {
            
            savedSQLDataArr[0].push(incommingSQLRes[0][0]);
            updateSavedSQLData[0](savedSQLDataArr);
        }
        else{
        }

        saveFilterBtns(incommingSQLRes);
    }).
    catch(error => {
        //console.log(error.response);
    });
}
export let axiosPost = (postType, formBody) => {  
    let type = '';
    let sendToSqlBackend = {
        formBody,
    };
    console.log(sendToSqlBackend);
    if (postType === 'filter') type = 'filter';
    if (postType === 'add') type = 'AddRecord';
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).
    then(response => {
        console.log(response);
        console.log(postType);
       //if (postType !== 'add') updateSQLDataArr(response.data[0]);
    }).
    catch(error => {
        //console.log(error.response);
    });
}
function saveFilterBtns(filterBtns) {
    /*
    Save both the months ans the cerncerned filter Btn in a individuall
    array. The arrays are sep... from the filerering funtions!
    */
    for (let index = 0; index < filterBtns.length; index++) {
        let filterMonthsBtnStr = filterBtns[index].month;
        let filterConcernedBtnStr = filterBtns[index].concerned;

        // Check if the strings already is in the array 
        if (!SQLFilterMonthsBtnsArr.includes(filterMonthsBtnStr)) SQLFilterMonthsBtnsArr.push(filterMonthsBtnStr);
        if (!SQLFilterConcernedBtnsArr.includes(filterMonthsBtnStr)) SQLFilterConcernedBtnsArr.push(filterConcernedBtnStr);
    }
    
/*     updateSQLFilterMonthsBtnsArr(SQLFilterMonthsBtnsArr);
    updateSQLFilterConcernedBtnsArr(SQLFilterConcernedBtnsArr);
 */}