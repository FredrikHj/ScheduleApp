import axios from 'axios';
import { updateSiteLoga, updateSavedSQLData, updateOptionColList, updateUserData, updateGotoPage } from '../Storage.js';
import { backendURL } from './BackendURLPath';
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

export let axiosPost = (postType, bodyData) => {  
    console.log("axiosPost -> postType", postType)
    console.log("axiosPost -> bodyData", bodyData)
    
    let type = '';
    if (postType === 'Auth') type = 'Auth';
    if (postType === 'filter') type = 'filter';
    if (postType === 'add') type = 'AddRecord';
    if (postType === 'userReg') type = 'UserReg';
    if (postType === 'runRemoveRecord') type = 'RemoveRecord';
    
    let sendToSqlBackend = {
        bodyData,
    };
    console.log("axiosPost -> sendToSqlBackend", sendToSqlBackend)
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).then(response => {
            console.log("axiosPost -> response", response)
            if (postType === 'Auth'){
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
               
                if (response.status === 200) updateGotoPage(postType);
            }
        }).catch(error => {
            ////;
        });
}
