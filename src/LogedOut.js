import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { updateLogedInGlobal } from './Components/GlobalProps.js';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedOut = () => {
    let [ isLogedIn, setIsLogedIn ] = useState(false);

    useEffect(() => {
        console.log('Utloggad');
        updateLogedInGlobal(isLogedIn);
    },[]); 
    return (
        <>
        <Link to="/Inloggad" style={{color: 'black'}}>Logga In</Link>
            <SearchBar/>
            <SQLTable/>
        </>
    );

}
