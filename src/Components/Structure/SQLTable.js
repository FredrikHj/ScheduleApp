import React, { useState, useEffect } from 'react';
import Spinner from '../Data/Spinner.js';

export let SQLTable = (props) => {
    return(
        <>
            <tbody id="tableSchedule__tBody">
                {(props.incommingNewSQLData.length !== 0) 
                    ?
                    props.incommingNewSQLData.map((sqlDataObj, rowCounter) => {
                        
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
            </tbody>
        </>
    );
}