/* ================================================== Render all the SQLData ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Import inportant components for the specific page
import { getLocalStorageData } from '../Data/LocalStorage';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { correctRoutes } from '../Data/runAppUrls';
import { incommingSQLDataArr$ } from '../Storage';
import { routeName } from '../Data/RouteNames';
import { axiosGet } from '../Data/Axios';
import Spinner from '../Data/Spinner.js';

export let ListSQLRecords = () => {
    let [ appUrl, setAppUrl ] = useState('/');
    let [ routes, updateRoutes ] = useState('');
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ erroLoadingSQLData, updateErroLoadingSQLData ] = useState(false);

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
                            <td>{(correctRoutes() === routeName.login)
                                    ?   'Inloggad'
                                    :   'Ej inloggad'
                                }
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