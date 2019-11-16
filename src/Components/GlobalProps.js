import {BehaviorSubject} from "rxjs";

let headName = '';
let incommingSQLDataArr = [];

let savedSQLData = [];
savedSQLData.push(incommingSQLDataArr);

let SQLFilterMonthsBtnsArr = [];
let SQLFilterConcernedBtnsArr = [];

export const headName$ = new BehaviorSubject(headName);
export const savedSQLData$ = new BehaviorSubject(savedSQLData);

export const SQLFilterMonthsBtnsArr$ = new BehaviorSubject(SQLFilterMonthsBtnsArr);
export const SQLFilterConcernedBtnsArr$ = new BehaviorSubject(SQLFilterConcernedBtnsArr);

export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){ 
    console.log(incommingSQLDataArr);
    
    if(incommingSQLDataArr) savedSQLData$.next(incommingSQLDataArr);
}
/* export function updateSQLFilterMonthsBtnsArr(SQLFilterMonthsBtnsArr){  
    if(SQLFilterMonthsBtnsArr) SQLFilterMonthsBtnsArr$.next(SQLFilterMonthsBtnsArr);
}
export function updateSQLFilterConcernedBtnsArr(SQLFilterConcernedBtnsArr){  
    if(SQLFilterConcernedBtnsArr) SQLFilterConcernedBtnsArr$.next(SQLFilterConcernedBtnsArr);
} */