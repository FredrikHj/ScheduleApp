import React, { useState, useEffect } from 'react';
import Spinner from '../Data/Spinner.js';
import { incommingSQLDataArr$ } from '../Storage';

export let ListSQLData = (props) => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);

    useEffect(() =>{
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            console.log('fewf');
            
        console.log("ListSQLData -> SQLDataArr", SQLDataArr)
            // It can handle the data an perform its task regardless the data infrastructure 
            
            if (SQLDataArr) updateIncommingNewSQLData(SQLDataArr);
            if (SQLDataArr.statusText === 'OK') updateIncommingNewSQLData(SQLDataArr.data[0]);
        });
    })
    return(
        <>
            {(incommingNewSQLData.length !== 0) 
                ?
                incommingNewSQLData.map((sqlDataObj, rowCounter) => {
                    return(
                        <tr key={ rowCounter }>
                            <td>{ sqlDataObj.date }</td>
                            <td className="tableCol4">{ sqlDataObj.activity }</td>
                            <td>{ sqlDataObj.state }</td>
                            <td>{ sqlDataObj.concerned }</td>
                            <td>{ sqlDataObj.type }</td>
                            <td>{ sqlDataObj.place }</td>
                            <td className="tableCol9">{ sqlDataObj.content }</td>
                        </tr>
                    );
                })
            :   
                <>
                    <tr><td>
                        <Spinner str={'Tabellen laddas'}/>
                    </td></tr>
                </>
            }
        </>
    );
}