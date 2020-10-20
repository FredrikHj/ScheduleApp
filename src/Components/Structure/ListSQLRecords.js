/* ================================================== Render all the SQLData ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import CSS rouls
import { specificStyleRemoveRecord, specificStyleEditRecord } from '../Style/SpecificStyle';
import { SQLTableStyle } from '../Style/SQLTableStyle';
import '../Style/SQLTable.css';
//import { FaUserEdit } from 'react-icons/fa';

// Import inportant components for the specific page
import { getLocalStorageData } from '../Data/LocalStorage';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { axiosGet } from '../Data/Axios';
import Spinner from '../Data/Spinner.js';
import { SubmitBtn } from '../Data/SubmitBtn';

export let ListSQLRecords = (props) => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ routes, updateRoutes ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ editMode, setEditMode ] = useState(false);
    let [ editBtn, setEditBtn ] = useState('');
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);
    
    let { runRemove, runEditRow, runEditMode} = props;

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
    
    console.log("ListSQLRecords -> routeName", routeName.login)
    console.log("ListSQLRecords -> correctRoutes", correctRoutes())

    return(
        <>
            {(incommingNewSQLData.length !== 0) 
                ?
                incommingNewSQLData.map((item, index) => {
                    return(
                        <tr key={ index }>
                            <td>{ item.date }</td>
                            <td>{ item.activity }</td>
                            <td>{ item.concerned }</td>
                            <td>{ item.type }</td>
                            <td>{ item.place }</td>
                            <td>{ item.content }</td>
                            <td style={(correctRoutes() !== `/${routeName.login}`) ? {display: 'none'} : null}>
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
                                                name={ <span class="material-icons">edit</span> }
                                                onClickFunction={ runEditMode }
                                                id={ `editRecord` }
                                                btnOptional={ item.timeStamp }
                                            />
                                    }
                                </SQLTableStyle.toolContainer>
                            </td>
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