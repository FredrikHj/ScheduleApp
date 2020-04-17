import {BehaviorSubject} from "rxjs";

import {getTokenData} from './CommonFunctions';
import {getLocalStorageData} from './Data/LocalStorage';
const inlogedUserFullName = '';
const incommingSQLDataArr = [];
const optionColListArr = [];
const headName = '';
const userData = '';
const gotoPage = '';

//===============================================

export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
export const headName$ = new BehaviorSubject(headName);
export const userData$ = new BehaviorSubject(userData);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const optionColListArr$ = new BehaviorSubject(optionColListArr);

export const gotoPage$ = new BehaviorSubject(gotoPage);

export const LocalStorage$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function updateUserData(loginData){
    updateLocalstorage(loginData);
    if(loginData) {
        userData$.next(loginData);
    }
}
export const updateLocalstorage = (saveLoginData) =>{
    localStorage.setItem('loginData', JSON.stringify(saveLoginData));
}
export function getLogStatus(){
    // Run if a data i saved into the localstorage else no run
    if (window.localStorage.length !== 0) {
        
        const getStatusType = JSON.parse(window.localStorage.getItem("userData")).responsType;
        const getLogInMess = JSON.parse(window.localStorage.getItem("userData")).logInMess;
        
        const logInStatus = {
            type: getStatusType,
            mess: getLogInMess
        };
        //;
        
        return logInStatus;
    }
}
export function updateInlogedUserFullName(){
    if (updateInlogedUserFullName) inlogedUserFullName$.next(getTokenData(getLocalStorageData('token'), 'fullName'));
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateOptionColList(optionColListArr){
    if(optionColListArr) {
        optionColListArr$.next(optionColListArr);
    }
}
export function updateGotoPage(gotoPage){
console.log("updateGotoPage -> gotoPage", gotoPage)
    
    if(gotoPage) {
        gotoPage$.next(gotoPage);
    }
    return gotoPage;
}

