import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import { axiosPost, axiosGet } from '../Data/Axios.js';
import { incommingSQLDataArr$ } from '../GlobalProps.js';
import '../CSS/SearchBar.css';

let activeMonthsStrArr = [];
let activeConcernedStrArr = [];

let checkedMonthsArr = [];
let checkedConcernedArr = [];

let concernedArr = [];
let monthsArr = [];

let SQLStatementsObj = {};
export let SearchBar = () => {
   /*  let [ incommingSQLData, updateincommingSQLData ] = useState([]);
    let [ activeFilter, updateActiveFilter ] = useState(false); */

    //useEffect(() => {

  /*
    let getFilterStr = (filtering) => {
        
            Check if the incommingg str is found in the array, if the string is found. 
            The stirng is add else not added 
        
        for (let index = 0; index < incommingSQLData.length; index++) {
            let sqlMonthStr = incommingSQLData[index].month;
            let sqlConcerned = incommingSQLData[index].concerned;
    
            if (!monthsArr.includes(incommingSQLData[index].month)) monthsArr.push(sqlMonthStr);
            if (!concernedArr.includes(incommingSQLData[index].concerned)) concernedArr.push(sqlConcerned);
        }
        if (filtering === 'month') return monthsArr;
        if (filtering === 'concerned') return concernedArr;
    }
        /*
        * If the filtered months is checked the text and the background i turn according the css roule (If checked)!
        * The function at the end is running to filter the table according the month/s
    */

/*     let sqlFiltering = (e) => {
        updateActiveFilter(true); 
        // Gets the element
        let targetFilterMonthsBtn = e.target;          

        // Gets element´s name
        let filterType = targetFilterMonthsBtn.name;    

        // Set all of the name values as a object   
        const {dataset} = targetFilterMonthsBtn;    

        console.log(dataset);

        let targetCheckboxName = dataset.checkboxname;
        
        // Add and remove filtering string by the checked or unchecked checlboxies
        let targetCheckboxChecked = targetFilterMonthsBtn.checked;
        checkFilterType(filterType, targetCheckboxChecked, targetCheckboxName);
    }
    let checkFilterType = (filterType, targetCheckboxChecked, targetCheckboxName) => {
        
            If month or concerned and if checkbox is check send the string/boolean to a respectively array. If checkbox is uncheck
            Remove the respectivelu balue of string and send false to the array who showuing the active filter.
        
         if (filterType === 'month') {
            // Check if something is checked=Marked
            if (targetCheckboxChecked === true){
                activeMonthsStrArr.push(targetCheckboxName);
                checkedMonthsArr.push(true);
            }
            if (targetCheckboxChecked !== true) {
                let checkboxIndex = activeMonthsStrArr.indexOf(targetCheckboxName);            
                activeMonthsStrArr.splice(checkboxIndex, 1);
                checkedMonthsArr.pop(true);
                updateActiveFilter(false);
            }
            getFilterObj(activeMonthsStrArr.join("', '"), filterType);
    }
        if (filterType === 'concerned') {
            // Check if something is checked=Marked
            if (targetCheckboxChecked === true){
                activeConcernedStrArr.push(targetCheckboxName);
                checkedConcernedArr.push(true);
            }
            if (targetCheckboxChecked !== true) {
                let checkboxIndex = activeMonthsStrArr.indexOf(targetCheckboxName);            
                activeConcernedStrArr.splice(checkboxIndex, 1);
                checkedConcernedArr.pop(true);
                updateActiveFilter(false);
            // =========================================================================================================================
            }
            /* Triggering the function and send two attributes:
                1 = Turn the array into a string array separate by comma
                2 = The current filterType to filet on
            
            getFilterObj(activeConcernedStrArr.join(), filterType);              
        }
    }
    
    let getFilterObj = (SQLFilterStr, filterType) => {     
        if (filterChecked() === false){
            axiosPost(
                'filter', {
                    filterType: 'default',
                }
            );
        } 
        if (filterChecked() === true){
            axiosPost(
                'filter', {
                    filterType: 'filter',
                    operator: 'WHERE NOT',
                    filterIn: filterType,
                    SQLFilterStr: SQLFilterStr
                }
            );
        }
        //axiosGet();
    } */
    let runFilter = ()  => {

    }

    let sqlFilterRemove = () => {
        SQLStatementsObj = {
            type: 'select',
            typeOfStatement: 'default',
        }
        //correctSQLStatements(SQLStatementsObj);
    }
   
    return(
        <section id="searchBar__searchContainer">
            <div id="searchContainer__searchBar">
                <input type="submit" id="searchContainer__input" onClick={ runFilter} id="searchBar" value=""/>
                <p className="__headline" id="searchBar">Sök</p>
            </div>
        </section>
    );
}