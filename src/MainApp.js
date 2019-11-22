import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import {updateInlogedUserFullName, logedInGlobal$, updateHeadName, returningUserData$ } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';

import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';

let MainApp = () => {
  let [ appName, setAppName ] = useState('Årsklockan');
  let [ isLogedIn, setIsLogedIn ] = useState(false);
  let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');
  
  useEffect(() => {
    updateInlogedUserFullName();
    returningUserData$.subscribe((returningUserData) => {
      console.log(returningUserData);
      setInlogedFullUserName(returningUserData);
    });
    logedInGlobal$.subscribe((logedInGlobal) => {
      console.log(logedInGlobal);
      setIsLogedIn(logedInGlobal);
    });
    updateHeadName(appName);
  }, []);
  
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{(isLogedIn === false) ? `${appName} - Utloggad` : `${appName} - Inloggad`}</title>
      </Helmet>
      <Router>
        <Headbar/>
        <Route path="/" component={ LogedOut } />
        <Route path="/Inloggad" component={ LogedIn } />
      </Router>

    </>
  );
} 

export default MainApp;
