import {BehaviorSubject} from "rxjs";

let fullName = '';
let headName = '';
let incommingSQLDataArr = [];

//===============================================

export const headName$ = new BehaviorSubject(headName);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const fullName$ = new BehaviorSubject(fullName);

export const localStorageObj$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateFullName(fullName){
    if(fullName) {
        fullName$.next(fullName);
    }
}
export function updateLocalstorage(saveIntoLocalStorage){
    localStorage.setItem('userData', JSON.stringify(saveIntoLocalStorage));
    
    let getCleanLocalStorrageObj = JSON.parse(window.localStorage.getItem("userData"));
    localStorageObj$.next(getCleanLocalStorrageObj);
}