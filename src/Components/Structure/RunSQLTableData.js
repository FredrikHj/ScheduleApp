/* ================================================== Render all the SQLData ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import CSS rouls
import { SQLTableStyle } from '../Style/SQLTableStyle';
import { specificStyleRemoveRecord, specificStyleEditRecord, specificStyleBtnIcon } from '../Style/SpecificStyle';

// Import inportant components for the specific page
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

    const { runRemove, runEditRow, runEditMode, targetBtn, inEditModeSetting } = props;
    
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
    },[routes])
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
    console.log("RunSQLTableData -> inEditModeSetting", inEditModeSetting)
    console.log("RunSQLTableData -> targetBtn", targetBtn)

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
                                                <td>{ <input value={ item.date } />}</td>
                                                <td>{ <input value={ item.activity }/>}</td>
                                                <td>{ <input value={ item.concerned }/>}</td>
                                                <td>{ <input value={ item.type }/>}</td>
                                                <td>{ <input value={ item.place }/>}</td>
                                                <td>{ <input value={ item.content }/>}</td>
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
                                                    name={ <FcDeleteRow style={ specificStyleBtnIcon } onclick={ runRemove }/>  }
                                                    onClickFunction={ runRemove }
                                                    id={ 'removeRecord' }
                                                    btnOptional={ 'item.timeStamp' }
                                                />
                                                {(inEditModeSetting === true && item.timeStamp === targetBtn)
                                                    ?   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ <FcApproval style={ specificStyleBtnIcon } onclick={ runEditRow }/> }
                                                            onClickFunction={ runEditRow }
                                                            id={ `editRecord` }
                                                            btnOptional={ item.timeStamp }
                                                        />
                                                    :   <SubmitBtn key={ index+20*10 }
                                                            style={ specificStyleEditRecord }
                                                            name={ <FiEdit style={ specificStyleBtnIcon } onclick={ runEditMode }/> }
                                                            onClickFunction={ runEditMode }
                                                            id={ `editRecord` }
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