import React, { useState, useEffect } from 'react';
import { savedSQLData$ } from '../GlobalProps.js';
import { axiosPost, axiosGet } from '../Data/Axios.js';

export let FormAdd = (props) => {        
    let [ quantityOfSqlPosts, updateQuantityOfSqlPosts ] = useState(0);
    let [ incommingSQLDataCols, updateIncommingSQLDataCols ] = useState([]);

    let [ dateStr, updateDateStr ] = useState('');
    let [ monthStr, updateMonhthStr ] = useState('');
    let [ activityStr, updateActivityStr ] = useState('');
    let [ stateStr, updateStateStr ] = useState('');
    let [ concernedStr, updateConcernedStr ] = useState('');
    let [ typeStr, updateTypeStr ] = useState('');
    let [ placeStr, updatePlaceStr ] = useState('');
    let [ contentStr, updateContentStr ] = useState('');

    useEffect(() => {
        savedSQLData$.subscribe((SQLDataArr) => {      
            updateQuantityOfSqlPosts(SQLDataArr.length); 
        });
    }, []);
    let setStrsType = (e) => {
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;

        if (dataset.type === 'date') updateDateStr(inputStr);
        if (dataset.type === 'month') updateMonhthStr(inputStr);
        if (dataset.type === 'activity') updateActivityStr(inputStr);
        if (dataset.type === 'state') updateStateStr(inputStr);
        if (dataset.type === 'concerned') updateConcernedStr(inputStr);
        if (dataset.type === 'type') updateTypeStr(inputStr);
        if (dataset.type === 'place') updatePlaceStr(inputStr);
        if (dataset.type === 'content') updateContentStr(inputStr);
    }

console.log(incommingSQLDataCols);

    let submitAddForm = (e) => {
        console.log(dateStr);
        
        let sqlBody = [0, dateStr, monthStr, activityStr, stateStr, concernedStr, typeStr, placeStr, contentStr];
        
        axiosPost(
            'add', sqlBody
        );
        setTimeout(() => {
            axiosGet('/SQLData/NewRecord');
        }, 3000);
        e.preventDefault();
    }
    
    return (
        <form>
            <table id="addSqlData" style={(props.addForm === true) ? {display: 'block'} : {display: 'none'}}>
                <tbody>
                    <tr>
                        <td><input type="text" className="addSqlInput" data-type="date" onChange={ setStrsType }/></td>
                        <td><input type="text" className="addSqlInput" data-type="month" onChange={ setStrsType }/></td>
                        <td className="tableCol4"><input type="text" className="addSqlInput" data-type="activity" onChange={ setStrsType }/></td>
                        <td><input type="text" className="addSqlInput" data-type="state" onChange={ setStrsType }/></td>
                        <td><input type="text" className="addSqlInput" data-type="concerned" onChange={ setStrsType }/></td>
                        <td><input type="text" className="addSqlInput" data-type="type" onChange={ setStrsType }/></td>
                        <td><input type="text" className="addSqlInput" data-type="place" onChange={ setStrsType }/></td>
                        <td className="tableCol9"><input type="text" className="addSqlInput" data-type="content" onChange={ setStrsType }/></td>
                        <td><input type="submit" className="button addFormBtn" onClick={ submitAddForm } value="Lägg till!"/></td>
                    </tr>
                </tbody>
            </table>     
        </form>        
    );
}