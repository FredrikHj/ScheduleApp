import React, { useState, useEffect } from 'react';

import Spinner from '../Data/Spinner.js';
import { correctRoutes } from '../Data/runAppUrls';
import { localPubAppUrls } from '../Data/runAppUrls.js';
import { incommingSQLDataArr$ } from '../Storage';
import { axiosGet } from '../Data/Axios';
import { getLocalStorageData } from '../Data/LocalStorage';
import { SubmitBtn } from '../Data/SubmitBtn';
import { specificBtnStyleRemoveRecord } from '../Style/SpecificStyleBtn';
import { tableHeadline } from '../Data/TableHeadline';

export let ListSQLData = (props) => {
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
    return(
        <>
            {(incommingNewSQLData.length !== 0) 
                ?
                incommingNewSQLData.map((item, index) => {
                    return(
                        <tr key={ index }>
                            <td>{ item.date }</td>
                            <td>{ item.activity }</td>
                            <td>{ item.state }</td>
                            <td>{ item.concerned }</td>
                            <td>{ item.type }</td>
                            <td>{ item.place }</td>
                            <td>{ item.content }</td>
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