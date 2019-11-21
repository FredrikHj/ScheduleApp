import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { updateHeadName, fullName$ } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';

let MainApp = () => {
  let [ appName, setAppName ] = useState('WorkshoppSchema');
  let [ isLogedIn, setIsLogedIn ] = useState(false);
  let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');
  
  useEffect(() => {
    fullName$.subscribe((fullName) => {
      console.log(fullName);
      setInlogedFullUserName(fullName);
    });
    updateHeadName(appName);
    //if (isLogedIn === false) return <Redirect to="/LogedOut"/>;
    //if (isLogedIn === true) return <Redirect to="/LogedIn"/>;
    
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{(isLogedIn === false) ? `${appName} - LogedOut` : `${appName} - LogedIn`}</title>
      </Helmet>
        <Headbar/>
        <SearchBar/>
        <SQLTable/>
      {/* <Router>
        <Route path="/LogedOut" component={ LogedOut } />
        <Route path="/LogedIn" component={ LogedIn } />
      </Router> */}

    </>
  );
}

export default MainApp;
