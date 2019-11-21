import {BehaviorSubject} from "rxjs";
let firstOpened = true;
let logedIn = false;
let fullName = '';
let headName = '';
let incommingSQLDataArr = [];
let localStorageObj = { 
    logedInState: false,
    fullName: ''
};
let firstRun = () =>{
    if (firstOpened === true) {
        window.localStorage.setItem('userData', JSON.stringify(localStorageObj));
    }
    firstOpened = false;
}
firstRun(localStorageObj);


export const logedIn$ = new BehaviorSubject(logedIn);
export const fullName$ = new BehaviorSubject(fullName);
export const headName$ = new BehaviorSubject(headName);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const localStorageObj$ = new BehaviorSubject(localStorageObj);

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function updateLogedInGlobal(logedInState){
    console.log(localStorageObj);
    
    localStorageObj.logedInState = logedInState;
    console.log(localStorageObj);
    
    localStorage.setItem('userData', JSON.stringify(localStorageObj));
    
    //if(logedIn) logedIn$.next(newLogedStatus);
}
export function updateFullName(fullName){
    localStorageObj.fullName = fullName;
    console.log(localStorageObj);
    
    localStorage.setItem('userData', JSON.stringify(localStorageObj));
    /* console.log(fullName);
    JSON.parse(localStorageData['fullName'] = fullName);
    if(fullName) fullName$.next(fullName); */
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateLocalstorage(){
    let getCleanLocalStorrageObj = JSON.parse(window.localStorage.getItem("userData"));
    localStorageObj$.next(getCleanLocalStorrageObj);
}