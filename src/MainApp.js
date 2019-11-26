import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {logedIn$, updateHeadName, returningUserData$ } from './Components/GlobalProps.js';

import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';
import { FormAdd } from './Components/Structure/FormAdd.js';
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
      <Router>
        <Route exact path="/" component={ LogedOut } />
        <Route exact path="/LogIn" component={ LogedIn }/>
        <Route path="/Add" component={ FormAdd }/>
      </Router>

    </>
  );
} 

export default MainApp;
