import {BehaviorSubject} from "rxjs";

let logedIn = false;
let fullName = '';
let headName = '';
let incommingSQLDataArr = [];

export const logedIn$ = new BehaviorSubject(logedIn);
export const fullName$ = new BehaviorSubject(fullName);
export const headName$ = new BehaviorSubject(headName);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);

let handleLocalStorage = (logedIn, fullName) => {
    let data = {logedIn, fullName};
    console.log(data);
    
}

export function updateLogedInGlobal(logedIn){
    console.log(logedIn);
    handleLocalStorage(logedIn, '');
    if(logedIn) logedIn$.next(logedIn);
}
export function updateFullName(fullName){
    console.log(fullName);
    handleLocalStorage('', fullName);
    if(fullName) fullName$.next(fullName);
}
export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){

    if(incommingSQLDataArr) {

        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
/* export function updateSQLFilterMonthsBtnsArr(SQLFilterMonthsBtnsArr){  
    if(SQLFilterMonthsBtnsArr) SQLFilterMonthsBtnsArr$.next(SQLFilterMonthsBtnsArr);
}
export function updateSQLFilterConcernedBtnsArr(SQLFilterConcernedBtnsArr){  
    if(SQLFilterConcernedBtnsArr) SQLFilterConcernedBtnsArr$.next(SQLFilterConcernedBtnsArr);
} */