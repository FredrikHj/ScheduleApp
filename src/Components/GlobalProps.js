import {BehaviorSubject} from "rxjs";

let logedIn = false;
let headName = '';
let incommingSQLDataArr = [];

export const logedIn$ = new BehaviorSubject(logedIn);
export const headName$ = new BehaviorSubject(headName);
export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);

export function updateLogedInGlobal(logedIn){
    if(logedIn) logedIn$.next(logedIn);
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