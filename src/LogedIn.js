import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import './Components/CSS/Spinner.scss';
import './Components/CSS/Generall.css';

//import { LogInOut } from './LogInOut.js';

import { runLogInOut } from './Components/Data/LogInOut.js';
import axios from 'axios';
import { headName$, updateInlogedUserFullName, inlogedUserFullName$ } from './Components/GlobalProps.js';

import { log } from 'util';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

export let LogedIn = () => {
    let [ inlogedUser, updateInlogedUser ] = useState('');
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
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <section className="headContainer__logInOut">
                        <p className="logInOut__logedInUser">{`Välkommen in ${(inlogedUser === '') ? '...' : inlogedUser }` }</p>       
                        <section className="logInOut__btnInContainer">

                            <div className="btnContainer__btnLogOut">
                                <input type="submit" className="btnLogOut__input" onClick={ runLogInOut} id="logOout" value="" />
                                <Link to="/" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="logIn">
                                    <p className="btnHeadline" id="logOout">Logga Ut</p>
                                </Link>   
                            </div>
                            <div className="btnContainer__btnAdd">
                                <input type="submit" className="btnLogOut__input" onClick={ runLogInOut } id="add" value=""/>
                                <Link to="/Add" className="btnContainer__inputHeadline" onClick={ runLogInOut } id="add">
                                    <p className="btnHeadline" id='add'>Lägg Till</p>
                                </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
            <main className="body__contents">
                <SearchBar/>
                <SQLTable/>
            </main>
        </>
    );

}
