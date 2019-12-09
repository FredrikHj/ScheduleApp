import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { FormAdd } from './Components/Structure/FormAdd.js';
import { UserReg } from './Components/Structure/RegUser.js';
import { runAppUrl } from './Components/Data/AppUrl.js';
import { HeadContents } from './Components/Structure/HeadContents.js';
updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('');

  useEffect(() => {
    setAppUrl(runAppUrl());

  },[]);
  
  return (
    <>
      <Router>
        <Headbar/>
        <Route exact path={ `${appUrl}` } component={ HeadContents }/>    
        <Route exact path={ `${appUrl}Add` } component={ FormAdd }/>
        <Route path={ `${appUrl}UserReg` } component={ UserReg }/>
      </Router>
    </>
  );
} 

export default MainApp;
