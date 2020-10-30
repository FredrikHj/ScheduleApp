/* ================================================== Render all the SQLData ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import CSS rouls
import { specificStyleRemoveRecord, specificStyleEditRecord, specificStyleBtnIcon } from '../Style/SpecificStyle';
import { UserInputForm } from '../Style/LogedInStyle';
import { SQLTableStyle } from '../Style/SQLTableStyle';

// Import inportant components for the specific page
import { TableColsHeadlineOutloged } from '../Data/TableColsHeadline';
import { getLocalStorageData } from '../Data/LocalStorage';
import { FcDeleteRow, FcApproval } from "react-icons/fc";
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { SubmitBtn } from '../Data/SubmitBtn';
import { axiosGet } from '../Data/Axios';
import { FiEdit } from "react-icons/fi";
import Spinner from '../Data/Spinner';

export let RunSQLTableData = (props) => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ routes, updateRoutes ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);
    let [ addedSQLData, updateAddedSQLData ] = useState([]);
    let [ tableColsHeadline, setTableColsHeadline ] = useState([]);

    const { runHandleRecord, targetBtn, inEditModeSetting, editArr } = props;
    
    let countGetMethod = 1;
    useEffect(() =>{
        setAppUrl(localPubAppUrls());
        getSQLData();        
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            // It can handle the data an perform its task regardless the data infrastructure
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            //if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
        updateRoutes(correctRoutes());
        if(tableColsHeadline.length === 0 && correctRoutes() === `/${routeName.login}`) setTableColsHeadline(TableColsHeadlineOutloged); 
       
        if(addedSQLData.length === 0) createAddedRecordDataArr();
    },[routes, addedSQLData]);
    let getSQLData = () => {
        let axiosUntilGettingData = new Promise((success, error) => {
            if (countGetMethod === 1) {
                success();
                countGetMethod++;
            }
            if (countGetMethod === 2) {
                setTimeout(() => {
                    updateErroLoadingSQLData(true)
                }, 1000);
            }
            
            //else error('Kunde inte ladda datan :(');
        });
        
        // Run default SQL list
        axiosUntilGettingData.then((result) => {            
            if(routes === '/') axiosGet('default', '');
            if(routes === '/Inloggad' || routes === '/Add') axiosGet('userSpec', getLocalStorageData('token'));
        }).catch((result) =>{
            updateErroLoadingSQLData(result);
        })
    }
    const createAddedRecordDataArr = () => {
        console.log('Hej');
        const puschToAddedRecordData = [...addedSQLData];
        for (let index = 0; index < tableColsHeadline.length; index++) puschToAddedRecordData.push('');
        if (addedSQLData.length === 0) updateAddedSQLData(puschToAddedRecordData);
    }
    
    
    let setStrsType = (e) => {
        const puschToAddedRecordData = [...addedSQLData];
        let type = e.target;
        let inputStr = type.value;                    
        console.log("setStrsType -> inputStr", inputStr)
        const {dataset} = type;        
        for (let index = 0; index < tableColsHeadline.length; index++) if (dataset.type === tableColsHeadline[index]) puschToAddedRecordData[dataset.typenr] = inputStr;
        updateAddedSQLData(puschToAddedRecordData);
    }
    return(
        <>
            {(incommingNewSQLData.length !== 0) 
                ?
                incommingNewSQLData.map((item, index) => {
                    return(
                        <tr key={ index }>
                            {(correctRoutes() === routeName.mainPage+routeName.login)
                                ?   <>
                                    {(item.timeStamp === targetBtn)
                                        ?
                                        <>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[0] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[1] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[2] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[3] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[4] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                                <td>{ <input style={ UserInputForm.general } type="text" value={ editArr[5] } onChange={ setStrsType } id={ 'editRecord' } />}</td>
                                            </>

                                        :
                                            <>
                                                <td>{ item.date}</td>
                                                <td>{ item.activity }</td>
                                                <td>{ item.concerned }</td>
                                                <td>{ item.type }</td>
                                                <td>{ item.place }</td>
                                                <td>{ item.content }</td>
                                            </>
                                        }

                                        <td>
                                            <SQLTableStyle.toolContainer key={ index+1*10 }>
                                                <SubmitBtn key={ index+10*10 }
                                                    style={ specificStyleRemoveRecord }
                                                    name={ <FcDeleteRow style={ specificStyleBtnIcon } onclick={ runHandleRecord }/>  }
                                                    onClickFunction={ runHandleRecord }
                                                    id={ 'removeRecord' }
                                                    btnOptional={ item.timeStamp }
                                                />
                                                {(inEditModeSetting === true && item.timeStamp === targetBtn)
                                                    ?   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ <FcApproval style={ specificStyleBtnIcon } onclick={ runHandleRecord }/> }
                                                            onClickFunction={ runHandleRecord }
                                                            id={ 'editRecord' }
                                                            btnOptional={ item.timeStamp }
                                                        />
                                                    :   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ <FiEdit style={ specificStyleBtnIcon } onclick={ runHandleRecord }/> }
                                                            onClickFunction={ runHandleRecord }
                                                            id={ 'setEditMode' }
                                                            btnOptional={ item.timeStamp }
                                                        />
                                                }
                                            </SQLTableStyle.toolContainer>
                                        </td>
                                    </>
                                :   <>
                                    <td>{ item.date }</td>
                                        <td>{ item.activity }</td>
                                        <td>{ item.concerned }</td>
                                        <td>{ item.type }</td>
                                        <td>{ item.place }</td>
                                        <td>{ item.content }</td>
                                    </>
                            }
                        </tr>
                    );
                })
            :   
                <>
                    <tr>
                        <td>
                            <Spinner str={'Tabellen laddas'}/>
                        </td>
                    </tr>
                </>
            }
        </>
    );
}