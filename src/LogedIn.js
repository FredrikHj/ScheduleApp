import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import Spinner from './Components/Data/Spinner.js';
import './Components/CSS/Spinner.scss';

//import { LogInOut } from './LogInOut.js';
import './Components/CSS/Headbar.css';

import { runLogInOut } from './Components/Data/LogInOut.js';
import axios from 'axios';
import { headName$, updateLogedIn, updateInlogedUserFullName, updateLocalstorage, inlogedUserFullName$ } from './Components/GlobalProps.js';


import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedIn = () => {
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ appName, setAppName ] = useState('');   

    let [ savedLocalStorageObj, updateSavedLocalStorageObj] = useState({});

    useEffect(() => {
        updateLogedIn(true);
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {
            console.log(inlogedUserFullName);
            updateInlogedUser(inlogedUserFullName);
        }); 
        setTimeout(() => {
            updateInlogedUserFullName();
        }, 1000);
    }, []);

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${appName} - Inloggad`}</title>
        </Helmet>
        <header id="headbar__Container">
            <p id="headbarbtnHeadline">{ appName }</p>

            <section id="headbar__logInOutBtn">
                <p id="logInOut__logInUser">{`Välkommen in ${(inlogedUser === '') ? '...' : inlogedUser }` }</p>       

                <section id="logInOut__btnInContainer">

                    <div  id="btnContainer__btnLogOut">
                        <input type="submit" className="btnLogOut__input" onClick={ runLogInOut} id="logOout" value="" />
                        <Link to="/" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="logIn">
                            <p className="btnHeadline" id="logOout">Logga Ut</p>
                        </Link>   
                    </div>

                    <div id="btnContainer__btnAdd">
                        <input type="submit" className="btnLogOut__input" onClick={ runLogInOut } id="add" value=""/>
                        <Link to="/Add" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="add">
                            <p className="btnHeadline" id='add'>Lägg Till</p>
                        </Link>
                    </div>
                </section>
            </section>
        </header>
            <SearchBar/>
            <SQLTable/>
        </>
    );

}
