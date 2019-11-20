import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { incommingSQLDataArr$ } from './Components/GlobalProps.js';
import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedIn = () => {
    let [ incommingNewSQLData, updateIncommingNewSQLData ] = useState([]);
    let [ addForm, setAddForm ] = useState(true);

    useEffect(() => {
      
    

    },[]); 
    return (
        <>
            <SearchBar/>
            <SQLTable/>
        </>
    );

}
