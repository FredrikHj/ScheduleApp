import {BehaviorSubject} from "rxjs";
let firstRun= true;
let headName = '';

let incommingSQLDataArr = [];

let savedSQLDataArr = [];
let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];

export const headName$ = new BehaviorSubject(headName);

export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const SQLFilterMonthsBtnsArr$ = new BehaviorSubject(SQLFilterMonthsBtnsArr);
export const SQLFilterConcernedBtnsArr$ = new BehaviorSubject(SQLFilterConcernedBtnsArr);

export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
/* 
    if(incommingSQLDataArr && firstRun === true) {
        savedSQLDataArr.push(incommingSQLDataArr);
        console.log(savedSQLDataArr);
        incommingSQLDataArr$.next(savedSQLDataArr[0]);
        firstRun = false;
    } */
    if(incommingSQLDataArr) {
        //savedSQLDataArr[0].push(incommingSQLDataArr);
        console.log(savedSQLDataArr);

        incommingSQLDataArr$.next(incommingSQLDataArr);
    }
}
/* export function updateSQLFilterMonthsBtnsArr(SQLFilterMonthsBtnsArr){  
    if(SQLFilterMonthsBtnsArr) SQLFilterMonthsBtnsArr$.next(SQLFilterMonthsBtnsArr);
}
export function updateSQLFilterConcernedBtnsArr(SQLFilterConcernedBtnsArr){  
    if(SQLFilterConcernedBtnsArr) SQLFilterConcernedBtnsArr$.next(SQLFilterConcernedBtnsArr);
} */