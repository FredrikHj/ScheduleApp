import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { updateSavedSQLData/* , updateSQLFilterMonthsBtnsArr,  updateSQLFilterConcernedBtnsArr */ } from '../GlobalProps.js';
import { setTimeout } from 'timers';

let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];

console.log(process.env);
//let backendURL = 'https://hbgworks-poc-event-schedule.herokuapp.com'; // Deployat by Heroku 
let backendURL = 'http://localhost:3001'; // Just test the backend 

export let axiosGet = (getStr) => {

    console.log(backendURL + getStr);
    
    axios.get(backendURL + getStr).then(response => {
        // Store the incommingg API data in a object
        console.log(response.data[0]);
        let incommingResponse = response.data[0];
    
        if (incommingResponse[1].affectedRows === 1) {           
            updateSavedSQLData(incommingResponse);
        }
        else updateSavedSQLData(incommingResponse);

        saveFilterBtns(incommingResponse);
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