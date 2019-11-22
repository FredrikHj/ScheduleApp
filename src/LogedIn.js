import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { updateLogedInGlobal } from './Components/GlobalProps.js';
import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedIn = () => {
    let [ isLogedIn, setIsLogedIn ] = useState(true);

    useEffect(() => {
        console.log('Inloggad');
        
        updateLogedInGlobal(isLogedIn);
    },[]); 
    return (
        <>
            <SearchBar/>
            <SQLTable/>
        </>
    );

}
