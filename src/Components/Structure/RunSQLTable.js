/* ================================================== MainContents ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import CSS rouls
import { specificStyleAddRow, specificStyleRemoveRecord, specificStyleEditRecord } from '../Style/SpecificStyle';
import { SQLTableStyle, SQLDataPagination } from '../Style/SQLTableStyle';
import '../Style/SQLTable.css';

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';
import { getLocalStorageData } from '../Data/LocalStorage';
import { runAddRow } from '../Data/FunctionsTableToolBtn';
import { RunSQLTableHeader } from './RunSQLTableHeader';
import { RunSQLTableData } from './RunSQLTableData';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { SubmitBtn } from '../Data/SubmitBtn';
import { axiosPost, axiosGet } from '../Data/Axios';
import { SearchBar } from './SearchBar';
import { gotoPage$ } from '../Storage';
import { AddForm } from './AddForm';

export let RunSQLTable = () => {
    let [ redirectToPage, updateRedirectToPage ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ addedSQLData, updateAddedSQLData ] = useState([]);
    let [ editMode, setEditMode ] = useState(false);
    let [ editBtn, setEditBtn ] = useState('');

    useEffect(() => {
        gotoPage$.subscribe((gotoPage) => {            
            updateRedirectToPage(gotoPage);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        if(addedSQLData === []) createAddedRecordDataArr();
        
    },[ redirectToPage, addedSQLData, editMode, editBtn ]);
    const createAddedRecordDataArr = () => {
        const puschToAddedRecordData = [...addedSQLData];
        for (let index = 0; index < TableColsHeadline.length; index++) puschToAddedRecordData.push('');
        if (addedSQLData.length === 0) updateAddedSQLData(puschToAddedRecordData);
    }
    const choosenSelectOption = (e) => {
        const puschToAddedRecordData = [...addedSQLData];
        const selectedOption = e.target; 
        const selectedStr = selectedOption.value;
        const selectedIndex = selectedOption.options.selectedIndex;
        const selectedCellIndex = selectedOption.options[selectedIndex].dataset.cell;
        puschToAddedRecordData[selectedCellIndex] = selectedStr;
        updateAddedSQLData(puschToAddedRecordData);
    }
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedSQLData];
        let type = e.target;
        let inputStr = type.value;                    
        console.log("setStrsType -> inputStr", inputStr)
        const {dataset} = type;        
        for (let index = 0; index < TableColsHeadline.length-1; index++) if (dataset.type === TableColsHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        console.log("setStrsType -> TableColsHeadline", TableColsHeadline)
        console.log("setStrsType -> puschToAddedRecordData", puschToAddedRecordData)
        updateAddedSQLData(puschToAddedRecordData);
    }
    const tableToolBtn= (e) => {
        let targetBtn = e.target;
        console.log("tableToolBtn -> targetBtn", targetBtn);
        let targetBtnId = targetBtn.id;
        console.log("tableToolBtn -> targetBtnId", targetBtnId)
        if(targetBtnId === 'addRecord') runAddRow(targetBtnId, addedSQLData);

        e.stopPropagation();
    }
    const runEditMode  = (e) => {
        let targetBtn = e.target;

        const editId = targetBtn.id;
        const {dataset} = targetBtn; 

        setEditBtn(dataset.optional);
        setEditMode(true);

        e.stopPropagation();
    }
    const runEditRow  = (e) => {
        let targetBtn = e.target;
        const editId = targetBtn.id;
        const {dataset} = targetBtn; 
        console.log("runEditRow -> editId", dataset.optional)
        
        setEditMode(false);
        
        e.stopPropagation();
    }
    const runRemove  = (e) => {
        let targetBtn = e.target;
        const removeId = targetBtn.id;
        const {dataset} = targetBtn; 
        axiosPost(removeId, dataset.optional);
        setTimeout(() => {
            axiosGet('userSpec', getLocalStorageData('token'));
        }, 400);
        e.stopPropagation();
    }
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
                                        addedSQLData={ addedSQLData }
                                    />}
                                />
                                <RunSQLTableData/>
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
                        
                        {/* <SQLTableStyle.sideTool style={(correctRoutes() === `/${ routeName.login }` ) ? {display: 'block'} : {display: 'none'}}>
                            <SQLTableStyle.sideToolRow1>
                                <SubmitBtn
                                    style={ specificStyleAddRow }
                                    name={ 'Lägg Till' }
                                    onClickFunction={ runAddRow }
                                    id={ 'add' }
                                />
                            </SQLTableStyle.sideToolRow1>
                            <SQLTableStyle.sideToolRow2> 
                                {

                                    incommingNewSQLData.map((item, index) => {
                                        console.log("editBtn", editBtn);
                                        return(
                                            <SQLTableStyle.toolContainer key={ index+1*10 }>
                                                <SubmitBtn key={ index+10*10 }
                                                    style={ specificStyleRemoveRecord }
                                                    name={ 'X' }
                                                    onClickFunction={ runRemove }
                                                    id={ 'removeRecord' }
                                                    btnOptional={ item.timeStamp }
                                                />
                                                {(editMode === true && item.timeStamp === editBtn)
                                                    ?   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ 'Utför' }
                                                            onClickFunction={ runEditRow }
                                                            id={ `editRecord` }
                                                            btnOptional={ item.timeStamp }
                                                        />
                                                    :   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ 'Ändra' }
                                                            onClickFunction={ runEditMode }
                                                            id={ `editRecord` }
                                                            btnOptional={ item.timeStamp }
                                                        />
                                                }
                                            </SQLTableStyle.toolContainer>
                                        );
                                    })
                                }

                            </SQLTableStyle.sideToolRow2>
                        </SQLTableStyle.sideTool> */}
                    </SQLTableStyle.body__contents>

                </SQLTableStyle.col2>

            </SQLTableStyle.container>
        </>
    );
}