import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, getLogStatus } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { FormAdd } from './Components/Structure/FormAdd.js';
import { UserReg } from './Components/Structure/RegUser.js';
import { runAppUrl } from './Components/Data/AppUrl.js';
import { HeadContents } from './Components/Structure/HeadContents.js';
import { lastOfType } from 'glamor';
updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('');

  useEffect(() => {
    setAppUrl(runAppUrl());

  },[]);
  console.log(getLogStatus());
  
  return (
    <>
      <Router>
        <Headbar/>

        <Route exact path=
          {(getLogStatus().mess === null || getLogStatus().mess === 'Användaren finns inte!' ) ? appUrl : `${appUrl}Login` } component={ HeadContents }/>    
        <Route exact path={ `${appUrl}Add` } component={ FormAdd }/>
        <Route path={ `${appUrl}UserReg` } component={ UserReg }/>
      </Router>
    </>
  );
} 

export default MainApp;
