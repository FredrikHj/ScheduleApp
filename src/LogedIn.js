import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { headName$ } from './Components/GlobalProps.js';


//import { LogInOut } from './LogInOut.js';
import './Components/CSS/Headbar.css';

import { runLogInOut } from './Components/Data/LogInOut.js';
import axios from 'axios';
import {updateInlogedUserFullName, updateLocalstorage, inlogedUserFullName$, updateLogedInGlobal } from './Components/GlobalProps.js';


import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedIn = () => {
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ isLogedIn, setIsLogedIn ] = useState(true);
    let [ appName, setAppName ] = useState('');   

    let [ savedLocalStorageObj, updateSavedLocalStorageObj] = useState({});

    useEffect(() => {
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {
            console.log(inlogedUserFullName);
            updateInlogedUser(inlogedUserFullName);
        }); 
        updateInlogedUserFullName();
    }, []);


    return (
        <>
            <header id="headbar__Container">
                <p id="headbar__headLine">{ appName }</p>
                <section id="headbar__logInOut">
                    <p id="logInOut__logIn">{`Välkommen in ${ inlogedUser }` }</p>           
                    <section id="logInOut__btnInContainer">.
                        <input type="submit" className="btnContainer_submitBtn" onClick={ runLogInOut} id="logOout" value="" />
                        <Link to="/" className="btnContainer__headline" onClick={ runLogInOut } id="logIn">
                            <p className="__headline" id="logOout">Logga Ut</p>
                        </Link>
                    </section>
                 </section>
            </header>
            <SearchBar/>
            <SQLTable/>
        </>
    );

}
