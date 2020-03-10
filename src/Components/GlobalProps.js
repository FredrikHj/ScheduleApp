import {BehaviorSubject} from "rxjs";
let jwt = require('jsonwebtoken');

let headName = '';
let inlogedUserFullName = '';
let userData = '';
let incommingSQLDataArr = [];
let gotoPage = '';

//===============================================

export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
export const headName$ = new BehaviorSubject(headName);
export const userData$ = new BehaviorSubject(userData);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);

export const gotoPage$ = new BehaviorSubject(gotoPage);

export const localStorageObj$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function updateUserData(incommingObj){
    console.log("updateReturningUserData -> incommingObj", incommingObj)
    let tokenData = getTokenData(incommingObj.token);
    console.log("updateReturningUserData -> tokenData", tokenData)
    if(tokenData) {
        userData$.next(tokenData);
    }
    updateLocalstorage(tokenData);
}
let getTokenData = (token) => {
    let tokenData = jwt.verify( token, 'inlogSecretKey', (error, token) => token);
    console.log("getTokenData -> getToken", tokenData);
    return tokenData;
}
export let updateLocalstorage = (saveIntoLocalStorage) =>{
    localStorage.setItem('userData', JSON.stringify(saveIntoLocalStorage));
}

export function getLogStatus(){
    // Run if a data i saved into the localstorage else no run
    if (window.localStorage.length !== 0) {
        
        let getStatusType = JSON.parse(window.localStorage.getItem("userData")).responsType;
        let getLogInMess = JSON.parse(window.localStorage.getItem("userData")).logInMess;
        
        let logInStatus = {
            type: getStatusType,
            mess: getLogInMess
        };
        //console.log(logInStatus);
        
        return logInStatus;
    }
}
export function updateInlogedUserFullName(){
    //inlogedUserFullName = JSON.parse(window.localStorage.getItem("userData")).incommingUserData.tokenData.loginName;
    inlogedUserFullName$.next(inlogedUserFullName);
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    console.log(incommingSQLDataArr.length);
    
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateGotoPage(gotoPage){
    console.log(gotoPage);
    
    if(gotoPage) {
        gotoPage$.next(gotoPage);
    }
    return gotoPage;
}

