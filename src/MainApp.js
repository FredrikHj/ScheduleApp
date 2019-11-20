import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { updateHeadName, logedIn$ } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';



let MainApp = () => {
  let [ appName, setAppName ] = useState('WorkshoppSchema');
  let [ isLogedIn, setIsLogedIn ] = useState(false);
  useEffect(() => {
    logedIn$.subscribe((logedIn) => {

      console.log(logedIn);
    
      setIsLogedIn(logedIn);
    });
    updateHeadName(appName);
    if (isLogedIn === false) return <Redirect to="/LogedOut"/>;
    //if (isLogedIn === true) return <Redirect to="/LogedIn"/>;
    
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{(isLogedIn === false) ? `${appName} - LogedOut` : `${appName} - LogedIn`}</title>
      </Helmet>
        <Headbar
          isLogedIn={ isLogedIn }
        />
      <Router>
        <Route path="/LogedOut" component={ LogedOut } />
        <Route path="/LogedIn" component={ LogedIn } />
      </Router>

    </>
  );
}

export default MainApp;
