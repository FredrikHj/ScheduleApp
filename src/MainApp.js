import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, returningUserData$, gotoPage$ } from './Components/GlobalProps.js';
 
import { LogedOut } from './LogedOut.js';
import { LogedIn } from './LogedIn.js';
import { FormAdd } from './Components/Structure/FormAdd.js';
import { UserReg } from './Components/Structure/RegUser.js';

let MainApp = () => {
  let [ appName, setAppName ] = useState('Årsklockan');
  let [ isLogedIn, setIsLogedIn ] = useState(false);
  let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');
  let [ gotoMain ] = useState(true);

  useEffect(() => {
      returningUserData$.subscribe((returningUserData) => {
      console.log(returningUserData);
      setInlogedFullUserName(returningUserData);
    });
    updateHeadName(appName);
    if (gotoMain === true) return <Redirect to="/"/>;
  }, []);
  let setGotoPage = (gotoPage) => {
  }
  console.log(window.location.href);
  
  return (
    <>
      <Router>
        <Route exact path="/" component={ LogedOut } />
        <Route exact path="/LogIn" component={ LogedIn }/>
        <Route path="/Add" component={ FormAdd }/>
        <Route path="/UserReg" component={ UserReg }/>
      </Router>

    </>
  );
} 

export default MainApp;
