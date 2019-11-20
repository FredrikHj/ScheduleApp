import React, { useState, useEffect } from 'react';
import { headName$ } from '../GlobalProps.js';
import { LogInOut } from './LogInOut.js';
import '../CSS/Headbar.css';

export let Headbar = () => {
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
                <LogInOut/>
            </header>
        </>
    );
}