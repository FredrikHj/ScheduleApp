import React, { useState, useEffect } from 'react';
import { incommingSQLDataArr$ } from '../GlobalProps.js';
import { LogInOut } from './LogInOut.js';
import { axiosGet } from '../Data/Axios.js';

import '../CSS/SQLTable.css';

import axios from 'axios';
import { log } from 'util';

let auth = {
    userName: '',
    password: ''
}
export let SQLTable = () => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ addForm, setAddForm ] = useState(true);

    useEffect(() => {
        // Run default SQL list
        setTimeout(() => {
            axiosGet('/SQLData');    
        }, 3000);
        incommingSQLDataArr$.subscribe((SQLDataArr) => {
            console.log(SQLDataArr);
            updateIncommingNewSQLData(SQLDataArr);
        });
     },[]); 
    let runAdmin = (e) => {
        let targetBtn = e.target.dataset.admin;
        if (targetBtn === 'logIn') setAddForm(true);
        if (targetBtn === 'logOut') setAddForm(false);
    }
    return (
        <section id="container__tableSchedule">
            <table id="tableSchedule__body">
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th className="tableCol4">Akitvitet</th>
                        <th>Status</th>
                        <th>Berörda</th>
                        <th>Typ</th>
                        <th>Plats</th>
                        <th className="tableCol9">Innehåll</th>
                   </tr>
                </thead>
                <tbody id="tableSchedule__tBody">
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
                    :   <tr>
                            <td><p>Datan hämntas.... </p></td>
                        </tr>
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>
        </section>
    );

}
