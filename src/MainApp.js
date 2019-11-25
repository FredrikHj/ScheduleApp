import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {logedIn$, updateHeadName, returningUserData$ } from './Components/GlobalProps.js';

import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';

let MainApp = () => {
  let [ appName, setAppName ] = useState('Årsklockan');
  let [ isLogedIn, setIsLogedIn ] = useState(false);
  let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');
  let [ redirect ] = useState(true);

  useEffect(() => {
    returningUserData$.subscribe((returningUserData) => {
      console.log(returningUserData);
      setInlogedFullUserName(returningUserData);
    });
    logedIn$.subscribe((logedIn) => {
      console.log(logedIn);
      setIsLogedIn(logedIn);
    });
    updateHeadName(appName);
    if (redirect === true) return <Redirect to="/"/>;
  }, []);
  
  console.log(window.location.href);
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{(isLogedIn === false) ? `${appName} - Utloggad` : `${appName} - Inloggad`}</title>
      </Helmet>
      <Router>
        <Route exact path="/" component={ LogedOut } />
        <Route exact path="/Inloggad" component={ LogedIn } />
      </Router>

    </>
  );
} 

export default MainApp;
