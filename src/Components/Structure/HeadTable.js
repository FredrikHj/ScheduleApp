import React, { useState, useEffect } from 'react';
import { savedSQLData$ } from '../GlobalProps.js';
import { LogInOut } from './LogInOut.js';
import { axiosGet } from '../Data/Axios.js';

import '../CSS/Table.css';

import axios from 'axios';
import { log } from 'util';

let SQLMonthsArr = [];
let SQLReferedArr = [];
let auth = {
    userName: '',
    password: ''
}
export let HeadTable = () => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ storedSQLData, updateStoredSQLData ] = useState([]);

    let [ addForm, setAddForm ] = useState(true);

    useEffect(() => {
        // Run default SQL list
        setTimeout(() => {
            axiosGet('/SQLData');
        }, 1000);

        savedSQLData$.subscribe((SQLDataArr) => {
            console.log(SQLDataArr);
            if (!SQLDataArr.affectedRows) {
                updateStoredSQLData(SQLDataArr);
            }
            else {
                updateIncommingNewSQLData(SQLDataArr[0]);
               // updateStoredSQLData(storedSQLData => [...storedSQLData, SQLDataArr[0]]);

//                updateStoredSQLData([].push(incommingNewSQLData));
            }
        });
    }, []);

    console.log(incommingNewSQLData);
    console.log(storedSQLData);
    
    let runAdmin = (e) => {
        let targetBtn = e.target.dataset.admin;
        if (targetBtn === 'logIn') setAddForm(true);
        if (targetBtn === 'logOut') setAddForm(false);
    }
    let cleanincomminggSQLDate = (dateStrs) => {

        let inSqlDateStr = dateStrs.split('-');
        let cleanedDate = dateStrs.split('-')[0] + '-' + inSqlDateStr[1] + '-' + inSqlDateStr[2].split('')[0] + inSqlDateStr[2].split('')[1];
        return cleanedDate;
    }
    console.log(incommingNewSQLData);
    
    return (
        <>
            <LogInOut
                runAdmin={ runAdmin}
                addForm={ addForm }
            />
            <table id="tableSchedule" style={(addForm === true) ? {marginTop: '-62px'} : null}>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Månad</th>
                        <th className="tableCol4">Akitvitet</th>
                        <th>Status</th>
                        <th>Berörda</th>
                        <th>Typ</th>
                        <th>Plats</th>
                        <th className="tableCol9">Innehåll</th>
                        <th style={(addForm === true) ? {display: 'block',  height: '27px', lineHeight: '27px'} : {display: 'none'}}>Verktyg</th>
                    </tr>
                </thead>
                <tbody id="tableScheduleBody" style={(addForm === true) ? {marginTop: '80px'} : null}>
                    {(storedSQLData.length !== 0) 
                        ?
                            storedSQLData.map((sqlDataObj, rowCounter) => {
                                let monthsStrs = sqlDataObj.month;
                                let referedArr = sqlDataObj.concerned;
                                
                                SQLMonthsArr.push(monthsStrs);
                                SQLReferedArr.push(referedArr);
                               //console.log(sqlDataObj);
                                
                                return(
                                    <tr key={ rowCounter }>
                                        <td>{ cleanincomminggSQLDate(sqlDataObj.date) }</td>
                                        <td>{ sqlDataObj.month }</td>
                                        <td className="tableCol4">{ sqlDataObj.activity }</td>
                                        <td>{ sqlDataObj.state }</td>
                                        <td>{ sqlDataObj.concerned }</td>
                                        <td>{ sqlDataObj.type }</td>
                                        <td>{ sqlDataObj.place }</td>
                                        <td className="tableCol9">{ sqlDataObj.content }</td>
                                        <td style={(addForm === true) ? {display: 'block'} : {display: 'none'}}>X</td>
                                    </tr>
                                );
                            })
                        :   <tr>
                                <td><p>Datan laddas in.... </p></td>
                            </tr>
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>
        </>
    );

}
