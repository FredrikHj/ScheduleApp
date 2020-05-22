/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

import {getLocalStorageData} from './Data/LocalStorage';
import {getTokenData} from './CommonFunctions';
const inlogedUserFullName = '';
const incommingSQLDataArr = [];
const incommingSiteLoga = '';
const optionColListArr = [];
const headName = '';
const userData = '';
const gotoPage = '';

//===============================================

export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const incommingSiteLoga$ = new BehaviorSubject(incommingSiteLoga);
export const optionColListArr$ = new BehaviorSubject(optionColListArr);
export const headName$ = new BehaviorSubject(headName);
export const userData$ = new BehaviorSubject(userData);
export const gotoPage$ = new BehaviorSubject(gotoPage);
export const LocalStorage$ = new BehaviorSubject('');

export function updateUserData(loginData){
    /* The functions are triggered in another place.
        The function updateLocalstorage is triggered together with the incomming data.
        The incomming data is saved for the subscriber.  
    */
    updateLocalstorage(loginData);
    if(loginData) {
        userData$.next(loginData);
    }
}
export const updateLocalstorage = (saveLoginData) =>{
    // The localstorage is set with the data
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
        return logInStatus;
    }
}
export function updateInlogedUserFullName(){
    if (updateInlogedUserFullName) inlogedUserFullName$.next(getTokenData(getLocalStorageData('token'), 'fullName'));
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSiteLoga(incommingSiteLoga){
    if(incommingSiteLoga) incommingSiteLoga$.next(incommingSiteLoga);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) incommingSQLDataArr$.next(incommingSQLDataArr);
}
export function updateOptionColList(optionColListArr){
    if(optionColListArr) optionColListArr$.next(optionColListArr);
}
export function updateGotoPage(gotoPage){    
    if(gotoPage) gotoPage$.next(gotoPage);
    return gotoPage;
}