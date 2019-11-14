import axios from 'axios';
import { updateSQLDataArr, updateSQLDataColsArr, updateSQLFilterMonthsBtnsArr,  updateSQLFilterConcernedBtnsArr } from '../GlobalProps.js';
import { setTimeout } from 'timers';

let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];

console.log(process.env);
let backendURL = 'https://hbgworks-poc-event-schedule.herokuapp.com'; // Deployat by Heroku 
//let backendURL = 'http://localhost:3001'; // Just test the backend 

export let axiosGet = (/* type, currentSQLStatement */) => {
    axios.get(`${backendURL}/SQLData`).
    then(response => {
        // Store the incommingg API data in a object
        console.log(response.data);
        updateSQLDataArr(response.data[0]);           
        saveFilterBtns(response.data);
        updateSQLDataColsArr(Object.keys(response.data[0][0][0]));            
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
    if (postType === 'add') type = 'AddPost';
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).
    then(response => {
        console.log(response.data);
        console.log(postType);
        
        // Update the returning sqlData table
        let SQLStatementsObj = {
            type: 'SELECT',
            typeOfStatement: 'default',
        }
       if (postType !== 'add') updateSQLDataArr(response.data[0]);
    }).
    catch(error => {
        //console.log(error.response);
    });
    setTimeout(() => {
        axiosGet();
    }, 2000);
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
    
    updateSQLFilterMonthsBtnsArr(SQLFilterMonthsBtnsArr);
    updateSQLFilterConcernedBtnsArr(SQLFilterConcernedBtnsArr);
}