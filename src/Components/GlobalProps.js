import {BehaviorSubject} from "rxjs";
let inlogedUserFullName = '';
let headName = '';
let logedInGlobal = false;
let returningUserData = '';
let incommingSQLDataArr = [];

//===============================================
let firstTime = true;
export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
export const headName$ = new BehaviorSubject(headName);
export const logedInGlobal$ = new BehaviorSubject(logedInGlobal);
export const returningUserData$ = new BehaviorSubject(returningUserData);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);

export const localStorageObj$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function updateInlogedUserFullName(){
    if (firstTime === true) {
        return;
    }
    let getUserFullName = JSON.parse(window.localStorage.getItem("userData")).loginName;

    console.log(getUserFullName);
    
    if(getUserFullName) inlogedUserFullName$.next(getUserFullName);
}
export function updateLogedInGlobal(logedInGlobal){
    console.log(logedInGlobal);
    
    if(logedInGlobal) logedInGlobal$.next(logedInGlobal);
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateReturningUserData(returningUserData){
    console.log(returningUserData);
    
    if(returningUserData) {
        returningUserData$.next(returningUserData);
    }
    updateLocalstorage(returningUserData);
}
let updateLocalstorage = (saveIntoLocalStorage) =>{
    updateInlogedUserFullName();
    
    localStorage.setItem('userData', JSON.stringify(saveIntoLocalStorage));    let getCleanLocalStorrageObj = JSON.parse(window.localStorage.getItem("userData"));
    localStorageObj$.next(getCleanLocalStorrageObj);
}