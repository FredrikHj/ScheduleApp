/* ================================================== MainContents ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import CSS rouls
import { SQLTableStyle, SQLDataPagination } from '../Style/SQLTableStyle';
import '../Style/SQLTable.css';

// Import inportant components for the specific page
import { TableColsHeadlineOutloged, TableColsHeadlineInloged } from '../Data/TableColsHeadline';
import { getLocalStorageData } from '../Data/LocalStorage';
import { runAddRow } from '../Data/FunctionsTableToolBtn';
import { RunSQLTableHeader } from './RunSQLTableHeader';
import { axiosPost, axiosGet } from '../Data/Axios';
import { RunSQLTableData } from './RunSQLTableData';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { SearchBar } from './SearchBar';
import { gotoPage$ } from '../Storage';
import { AddForm } from './AddForm';

export let RunSQLTable = () => {
    let [ redirectToPage, updateRedirectToPage ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ addArr, updateAddArr ] = useState([]);
    let [ editArr, updateEditArr ] = useState([]);
    let [ editMode, setEditMode ] = useState(false);
    let [ editBtn, setEditBtn ] = useState('');
    let [ tableColsHeadline, setTableColsHeadline ] = useState([]);
    
    useEffect(() => {
        if (tableColsHeadline.length === 0 && correctRoutes() === routeName.mainPage) setTableColsHeadline(TableColsHeadlineOutloged);
        if(tableColsHeadline.length === 0 && correctRoutes() === `/${routeName.login}`) setTableColsHeadline(TableColsHeadlineInloged); 
        
        gotoPage$.subscribe((gotoPage) => {            
            updateRedirectToPage(gotoPage);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        if(addArr.length === 0) createAddArr();
        
    },[ redirectToPage, addArr, editArr, editMode, editBtn ]);
    
    const createAddArr = () => {
        const pushToAddedRecordData = [...addArr];
        for (let index = 0; index < tableColsHeadline.length; index++) pushToAddedRecordData.push('');
        if (addArr.length === 0) updateAddArr(pushToAddedRecordData);
    }
    
    const tableToolBtn= (e) => {
        let targetBtn = e.target;
        console.log("tableToolBtn -> targetBtn", targetBtn);
        let targetBtnId = targetBtn.id;
        console.log("tableToolBtn -> targetBtnId", targetBtnId)
        if(targetBtnId === 'addRecord') runAddRow(targetBtnId, addArr);
        
        e.stopPropagation();
    }
    const choosenSelectOption = (e) => {
        const pushToAddedRecordData = [...addArr];
        const selectedOption = e.target; 
        const selectedStr = selectedOption.value;
        const selectedIndex = selectedOption.options.selectedIndex;
        const selectedCellIndex = selectedOption.options[selectedIndex].dataset.cell;
        pushToAddedRecordData[selectedCellIndex] = selectedStr;
        updateAddArr(pushToAddedRecordData);
    }
    let setStrsType = (e) => {
        let type = e.target;
        let typeId = type.id;
        console.log("setStrsType -> typeId", typeId)
        
        if (typeId === 'addRecord') {
            const pushToAddedRecordData = [...addArr];
            let inputStr = type.value;                    
            console.log("setStrsType -> inputStr", inputStr)
            const {dataset} = type;        
            console.log("setStrsType -> type", type)
            for (let index = 0; index < tableColsHeadline.length; index++) if (dataset.type === tableColsHeadline[index]) pushToAddedRecordData[dataset.typenr] = inputStr;
            console.log("setStrsType -> pushToAddedRecordData", pushToAddedRecordData)
            updateAddArr(pushToAddedRecordData);
        }
        if (typeId === 'editRecord') {
            const pushToAddedRecordData = [...editArr];
            let inputStr = type.value;                    
            console.log("setStrsType -> inputStr", inputStr)
            const {dataset} = type;   
            console.log("setStrsType -> type", dataset.type)
            console.log("setStrsType -> tableColsHeadline", tableColsHeadline);

            // Fel kollumn namn angets, nyckel ska visas men nu är det dess värde som står som villkor
            for (let index = 0; index < tableColsHeadline.length; index++) if (dataset.type === tableColsHeadline[index]) pushToAddedRecordData[dataset.typenr] = inputStr;
            console.log(pushToAddedRecordData);
            
            updateEditArr(pushToAddedRecordData);

        }
        e.stopPropagation();
    }
    const setTargetEditRecord = (timeStamp) => {
        let targetObj = {};
        incommingNewSQLData.map((item) => { 
            if(item.timeStamp === timeStamp) targetObj = item;
        });
        let targetArr = Object.values(targetObj);
        console.log(targetArr.slice(2))
        updateEditArr(targetArr.slice(2));
    }
    const runHandleRecord = (e) => {
        let targetBtn = e.target;
        const btnId = targetBtn.id;
        
        if (btnId === 'removeRecord') {
            const {dataset} = targetBtn; 
            axiosPost(btnId, dataset.optional);
            setTimeout(() => {axiosGet('userSpec', getLocalStorageData('token')); }, 400);
        }
        if (btnId === 'runEditRecord') { 
            setEditMode(false);
            setEditBtn('');
            
            //Call the Axios which will send the edited data to the server 
            axiosPost('editRecord', editArr );
        }
        if (btnId === 'setEditMode') {
            console.log('hej');
            const {dataset} = targetBtn; 
            setEditBtn(dataset.optional);
            setTargetEditRecord(dataset.optional);
            
            setEditMode(true);
        }
        e.stopPropagation();
    }    
    console.log("RunSQLTable -> editArr", editArr)
    return (
        <> 
            <SQLTableStyle.container>
                <SQLTableStyle.col1_3>
                </SQLTableStyle.col1_3>

                <SQLTableStyle.col2>
                    <SQLTableStyle.searchBar><SearchBar/></SQLTableStyle.searchBar>
                    <SQLTableStyle.body__contents>
                        <table id="table1_body">
                            <RunSQLTableHeader/>
                            <tbody id="table1_tbody">
                                {correctRoutes() === routeName.login && <Redirect to={ `/${ routeName.login }`} />}
                                <Route path={ '/inloggad' } render={(props) => <AddForm {...props}
                                        tableToolBtn={ tableToolBtn }
                                        setStrsType={ setStrsType }
                                        choosenSelectOption={ choosenSelectOption }
                                        addArr={ addArr }
                                    />}
                                />
                                <RunSQLTableData
                                    runHandleRecord={ runHandleRecord }
                                    inEditModeSetting={ editMode }
                                    targetBtn={ editBtn }
                                    editArr={ editArr }
                                    setStrsType={ setStrsType }
                                />
                            </tbody>

                            <SQLDataPagination.container>
                                <SQLDataPagination.arrowGroupLeft>
                                    <SQLDataPagination.arrowDubbleLeft className="material-icons"> double_arrow </SQLDataPagination.arrowDubbleLeft>
                                    <SQLDataPagination.arrowLeft className="material-icons"> chevron_left </SQLDataPagination.arrowLeft>
                                </SQLDataPagination.arrowGroupLeft>

                                <SQLDataPagination.inputNrGroupMiddle>
                                    <SQLDataPagination.inputSide></SQLDataPagination.inputSide> / <SQLDataPagination.totSides>100</SQLDataPagination.totSides>
                                </SQLDataPagination.inputNrGroupMiddle>

                                <SQLDataPagination.arrowGroupRight>
                                    <SQLDataPagination.arrowRight className="material-icons"> chevron_right </SQLDataPagination.arrowRight>
                                    <SQLDataPagination.arrowDubbleLRight className="material-icons"> double_arrow </SQLDataPagination.arrowDubbleLRight>
                                </SQLDataPagination.arrowGroupRight>
                            </SQLDataPagination.container>

                        </table>
                    </SQLTableStyle.body__contents>

                </SQLTableStyle.col2>

            </SQLTableStyle.container>
        </>
    );
}