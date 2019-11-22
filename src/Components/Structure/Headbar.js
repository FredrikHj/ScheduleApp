import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { headName$ } from '../GlobalProps.js';
import { LogInOut } from './LogInOut.js';
import '../CSS/Headbar.css';

export let Headbar = (props) => {
    let [ appName, setAppName ] = useState('');   

    useEffect(() => {
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
    }, []);
    
    return (
        <>
            <header id="headbar__Container">
                <p id="headbar__headLine">{ appName }</p>
                
                <LogInOut
                    logedIn={ props.logedIn }    
                />
            </header>
        </>
    );
}