import React, { useState, useEffect } from 'react';
import { FormAdd } from './FormAdd.js';
import '../CSS/LogInOut.css';

import { isArray } from 'util';

export let LogInOut = (props) => {
    return (
        <section id="headbar__logInOut">
            <p id="logInOut__username">Användarnamn</p><input type="text" id="username__input" onChange={ "" } placeholder="..."/>
            <p id="logInOut__password">Lösenord</p><input type="text" id="password__input" onChange={ "" } placeholder="..."/> 
            <section id="logInOut__btnContainer">
                <input type="submit" className="btnContainer_submitBtn" onClick={ '' } value=""/>
                <p className="btnContainer__headline">Logga In</p>
            </section>
        </section>
    );
}