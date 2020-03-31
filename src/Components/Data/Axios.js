import axios from 'axios';
import { updateSavedSQLData, updateUserData, updateGotoPage } from '../Storage.js';
import { setTimeout } from 'timers';
import { log } from 'util';

let savedSQLDataArr = [];

//let backendURL = 'https://hbgworks-poc-event-schedule.herokuapp.com'; // Heroku Backend
let backendURL = 'http://localhost:3001'; // Local Backend 

export let axiosGet = (getType, tokenStr) => {
    console.log("axiosGet -> getType", getType)
        let routes = '';

    // Type of post method
    if (getType === 'default') routes = '/SQLData';
    if (getType === 'userSpec') routes = `/SQLData/${ 'fredde' }`;
    
    
    // Get the user inloged User and send into the backend for getting the correct user records 
     
    axios.get(backendURL + routes, {headers: {Authorization: `bearer ${tokenStr}`}}).then(response => {
    console.log("axiosGet -> response", response)
        let incommingSQLRes = []
        /* Store the incomming API data in a variables - 
        Note that the data structure deppending on the conditions
        */
        if (response.status === 200 && getType === 'default') incommingSQLRes = response.data[0];
        if (response.status === 200 && getType === 'userSpec') incommingSQLRes = response.data[0];
         //;
        /*  If incomming status of 200 = OK
            Data i push into a arry too  Storage
            The array is holding the data until the webbbrowser is closed 
          
        Default get
        */
          updateSavedSQLData(incommingSQLRes);
        
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
        ////;
    });
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
            if (postType === 'Auth'){
                // Incomming userdata. T
                
                let logedInUserInfoObj = {
                    responsType: response.status,
                    logInMess: response.statusText, 
                    token: response.data,
                    //getTokenData(response.data),
                };
                //;
                
                //Send the incomming data for displaying the user login status
                updateUserData(logedInUserInfoObj);

                if (response.status === 200) updateGotoPage(postType);
            }
        }).catch(error => {
            ////;
        });
}