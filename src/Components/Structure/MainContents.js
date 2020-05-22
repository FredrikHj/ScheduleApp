/* ================================================== MainContents ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import CSS rouls
import { specificStyleAddRow, specificStyleRemoveRecord } from '../Style/SpecificStyle';
import { SQLTableStyle } from '../Style/SQLTableStyle';
import '../Style/SQLTable.css';

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';
import { getLocalStorageData } from '../Data/LocalStorage';
import { axiosPost, axiosGet } from '../Data/Axios';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { SubmitBtn } from '../Data/SubmitBtn';
import { ListSQLData } from './ListSQLData';
import { ListAddForm } from './ListAddForm';
import { TableHead } from './TableHead';
import { SearchBar } from './SearchBar';
import { gotoPage$ } from '../Storage';

export let MainContents = () => {
    let [ redirectToPage, updateRedirectToPage ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ addedRecordData, updateAddedRecordData ] = useState([]);
    useEffect(() => {
        gotoPage$.subscribe((gotoPage) => {            
            updateRedirectToPage(gotoPage);
        });
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        createAddedRecordDataArr();

    },[ redirectToPage, addedRecordData ]);
    const createAddedRecordDataArr = () => {
        const puschToAddedRecordData = [...addedRecordData];
        for (let index = 0; index < TableColsHeadline.length; index++) puschToAddedRecordData.push('');
        if (addedRecordData.length === 0) updateAddedRecordData(puschToAddedRecordData);
    }
    const choosenSelectOption = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        const selectedOption = e.target; 
        const selectedStr = selectedOption.value;
        const selectedIndex = selectedOption.options.selectedIndex;
        const selectedCellIndex = selectedOption.options[selectedIndex].dataset.cell;
        puschToAddedRecordData[selectedCellIndex] = selectedStr;
        updateAddedRecordData(puschToAddedRecordData);
    }
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedRecordData];
        let type = e.target;
        let inputStr = type.value;                    
        const {dataset} = type;        
        for (let index = 0; index < TableColsHeadline.length; index++) if (dataset.type === TableColsHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        updateAddedRecordData(puschToAddedRecordData);
    }
    const runAddRow  = (e) => {
        const addId = e.target.id;
        axiosPost(addId, addedRecordData);
        setTimeout(() => {
            axiosGet('userSpec', getLocalStorageData('token'));
        }, 400);
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
                            <TableHead/>
                            <tbody id="table1_tbody">
                                {correctRoutes() === routeName.login && <Redirect to={ `/${ routeName.login }`} />}
                                <Route path={ '/inloggad' } render={(props) => <ListAddForm {...props}
                                        setStrsType={ setStrsType }
                                        choosenSelectOption={ choosenSelectOption }
                                        addedRecordData={ addedRecordData }
                                    />}
                                />
                                <ListSQLData/>
                            </tbody>                    
                        </table>
                        <SQLTableStyle.sideTool style={(correctRoutes() === `/${ routeName.login }` ) ? {display: 'block'} : {display: 'none'}}>
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
                                    
                                        return(
                                            <SubmitBtn key={ index }
                                                style={ specificStyleRemoveRecord }
                                                name={ 'TA BORT' }
                                                onClickFunction={ runRemove }
                                                id={ 'runRemoveRecord' }
                                                btnOptional={ item.timeStamp }
                                            />
                                        );
                                    })
                                }

                            </SQLTableStyle.sideToolRow2>
                        </SQLTableStyle.sideTool>
                    </SQLTableStyle.body__contents>

                </SQLTableStyle.col2>
                <SQLTableStyle.col1_3>

                </SQLTableStyle.col1_3>
            </SQLTableStyle.container>
        </>
    );
}