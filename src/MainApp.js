import React, { useState, useEffect } from 'react';
import { routeName } from './Components/Data/RouteNames';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, getLogStatus, gotoPage$ } from './Components/Storage.js';


import { FormAdd } from './Components/Structure/FormAdd.js';
import { localPubAppUrls } from './Components/Data/runAppUrls.js';
import { HeadContents } from './Components/Structure/HeadContents.js';
import {LogedIn} from './LogedIn';
import { MainPage } from './MainPage.js';
import { Auth } from './Components/Data/Authorization';

updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('');
  let [ redirectToPage, updateRedirectToPage ] = useState('');
  console.log("MainApp -> redirectToPage", redirectToPage)
  
  useEffect(() => {
    gotoPage$.subscribe((gotoPage) => {
      updateRedirectToPage(gotoPage);
    });
    setAppUrl(localPubAppUrls());
    
  },[redirectToPage]);
  console.log("MainApp -> appUrl", appUrl)
  console.log("MainApp -> redirectToPage", redirectToPage)
  console.log("MainApp -> appUrl + routeName.login", appUrl + routeName.login)

  return (
      <Router>
          {redirectToPage === routeName.auth  && <Redirect to={`/${ routeName.auth }`}/>}  
          {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />} 
        
        <Route exact path={ appUrl } component={ MainPage } />
        <Route exact path={ appUrl + routeName.auth } component={ Auth }/>   
        <Route exact path={ appUrl + routeName.login } component={ LogedIn }/>  
        <Route exact path={ appUrl + routeName.add } component={ FormAdd }/>
      </Router>
  );
} 

export default MainApp; 
