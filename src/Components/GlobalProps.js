import {BehaviorSubject} from "rxjs";
let headName = '';
let inlogedUserFullName = '';
let returningUserData = '';
let incommingSQLDataArr = [];
let gotoPage = '';

//===============================================

export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
export const headName$ = new BehaviorSubject(headName);
export const returningUserData$ = new BehaviorSubject(returningUserData);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);

export const gotoPage$ = new BehaviorSubject(gotoPage);

export const localStorageObj$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
export function getLogStatus(){
    let getStatusType = JSON.parse(window.localStorage.getItem("userData")).responsType;
    let getLogInMess = JSON.parse(window.localStorage.getItem("userData")).logInMess;

    let logInStatus = {
        type: getStatusType,
        mess: getLogInMess
    };
    console.log(logInStatus);
    
    return logInStatus;
}
export function updateInlogedUserFullName(){
    inlogedUserFullName = JSON.parse(window.localStorage.getItem("userData")).incommingUserData.loginName;
    inlogedUserFullName$.next(inlogedUserFullName);
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    console.log(incommingSQLDataArr);
    
    if(incommingSQLDataArr) {
        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
export function updateReturningUserData(logedInUserInfoObj){
    console.log(logedInUserInfoObj);
    
    if(logedInUserInfoObj) {
        returningUserData$.next(logedInUserInfoObj);
    }
    updateLocalstorage(true, logedInUserInfoObj);
}
export let updateLocalstorage = (run, saveIntoLocalStorage) =>{
    if (run === true) {
        localStorage.setItem('userData', JSON.stringify(saveIntoLocalStorage));
        /* let getCleanLocalStorrageObj = JSON.parse(window.localStorage.getItem("userData"));

        localStorageObj$.next(getCleanLocalStorrageObj); */
    }
    if (run === false) {
        let userEmtyData = {
            userId: '',
            loginStatus: null,
            incommingUserData: {
                loginName: ''
            }
        }
        updateLocalstorage(true, userEmtyData);
    }
}
export function updateGotoPage(gotoPage){
    console.log(gotoPage);
    
    if(gotoPage) {
        gotoPage$.next(gotoPage);
    }
}