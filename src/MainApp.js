import React, { useState, useEffect } from 'react';
import { routeName } from './Components/Data/RouteNames';

// React Router - ES6 modules
import { 
  // BrowserRouter as Router, 
  HashRouter, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, getLogStatus, gotoPage$ } from './Components/Storage.js';

import { localPubAppUrls } from './Components/Data/runAppUrls.js';
import { SQLTable } from './Components/Structure/ListSQLData.js';
import { LogedIn } from './LogedIn';
import { MainPage } from './MainPage.js';
import { Auth } from './Components/Data/Authorization';
import { AddRecords } from './Components/Structure/AddRecords';

updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ redirectToPage, updateRedirectToPage ] = useState('');
  console.log("MainApp -> redirectToPage", redirectToPage)
  
  useEffect(() => {
    gotoPage$.subscribe((gotoPage) => {
    console.log("MainApp -> gotoPage", gotoPage)
      updateRedirectToPage(gotoPage);
    });
    
  },[redirectToPage]);
  console.log("MainApp -> appUrl", appUrl)
  console.log("MainApp -> redirectToPage", redirectToPage)

  return (
    <HashRouter basename='/'>
      {redirectToPage === routeName.mainPage && <Redirect to={ `/`} />} 
      {redirectToPage === routeName.auth  && <Redirect to={`/${ routeName.auth }`}/>}  
      {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />} 

      <Route exact path={ appUrl } component={ MainPage } />
      <Route exact path={ appUrl + routeName.auth } component={ Auth }/>   
      <Route exact path={ appUrl + routeName.login } component={ LogedIn }/>  

      {redirectToPage === routeName.addRecords && <Redirect to={ '/Add' } />}
      <Route path={ '/Add' } component={ AddRecords }/>
    </HashRouter>
  );
}

export default MainApp; 
