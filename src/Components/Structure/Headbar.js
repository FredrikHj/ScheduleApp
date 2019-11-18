import React, { useState, useEffect } from 'react';
import { headName$ } from '../GlobalProps.js';

export let Headbar = () => {
    let [ appName, setAppName ] = useState('');   

    useEffect(() => {
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName$.value);
        });
    }, []);
    console.log('header');
    
    return (
        <>
            <header id="headbarContainer">
                
                <p id="appname">
                    { appName }
                </p>
                <p id="usernameBox">Användarnamn</p><input type="text" id="inputUsername" onChange={ "" }/>
                <p id="passwordBox">Lösenord</p><input type="text" id="inputPassword" onChange={ "" }/>
            </header>
        </>
    );
}