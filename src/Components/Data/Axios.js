import axios from 'axios';
import { updateSiteLoga, updateSavedSQLData, updateOptionColList, updateUserData, updateGotoPage } from '../Storage.js';
import { backendURL } from './BackendURLPath';
import { setTimeout } from 'timers';
import { log } from 'util';

let savedSQLDataArr = [];

export let axiosGet = (getType, tokenStr) => {
        let routes = '';

    // Type of post method
    if (getType === 'getLoga') routes = '/SiteLoga';
    if (getType === 'default') routes = '/SQLData';
    if (getType === 'userSpec') routes = `/SQLData/${ 'fredde' }`;
    
    
    // Get the user inloged User and send into the backend for getting the correct user records 
     
    axios.get(backendURL + routes, {headers: {Authorization: `bearer ${tokenStr}`}}).then(response => {
    console.log("axiosGet -> response", response)
        updateSavedSQLData([]);
        let incommingSQLResArr = []
        /* Store the incomming API data in a variables - 
        Note that the data structure deppending on the conditions
        */
        if (response.status === 200 && getType === 'getLoga') updateSiteLoga(response.data);
        if (response.status === 200 && getType === 'default') storageData(response.data[0]);
        if (response.status === 200 && getType === 'userSpec') {
            storageData(response.data.SQLData[0]);
            updateOptionColList(response.data.structuringCols)
        }
         
          
        
        /*  If incomming status of 201 = Created:
            Data i push into a arry that is holding the data until the webbbrowser is closed 
        */
        if (response.status === 201) {
            
            savedSQLDataArr[0].push(incommingSQLResArr[0][0]);
            updateSavedSQLData[0](savedSQLDataArr);
        }
         else{
        }
    }).
    catch(error => {
        ////;
    });
}
const storageData = (saveData) => {
    updateSavedSQLData(saveData);
}
let getUserId = () => {
    let getUserId = JSON.parse(window.localStorage.getItem("userData")).userId;
    return getUserId;
}
export let axiosPost = (postType, bodyData) => {  
    console.log("axiosPost -> bodyData", bodyData)
    //;
    let type = '';
    let sendToSqlBackend = {
        bodyData,
    };
    ////;
    // Type of post method
    if (postType === 'Auth') type = 'Auth';
    if (postType === 'filter') type = 'filter';
    if (postType === 'add') type = 'AddRecord';
    if (postType === 'userReg') type = 'UserReg';
    
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).then(response => {
            console.log("axiosPost -> response", response)
            if (postType === 'userReg'){
                // Incomming userdata.         
                let logedInUserInfoObj = {
                    responsType: response.status,
                    logInMess: response.statusText, 
                    token: response.data,
                    //getTokenData(response.data),
                };
                //;
                
                //Send the incomming data for displaying the user login status
                updateUserData(logedInUserInfoObj);
                
                // Get back to mainPage loggin with the new user. Will fix some automatic later
                if (response.status === 201) updateGotoPage('/');
            }
        }).catch(error => {
            ////;
        });
}