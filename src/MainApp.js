import React, { useState, useEffect } from 'react';
import { routeName } from './Components/Data/RouteNames';

// React Router - ES6 modules
import { HashRouter, Route, Redirect } from "react-router-dom";
import { updateHeadName, gotoPage$ } from './Components/Storage.js';

import { LogedIn } from './LogedIn';
import { MainPage } from './MainPage.js';
import { Auth } from './Components/Data/Authorization';
import { RegUser } from './Components/Structure/RegUser';

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
      {redirectToPage === routeName.auth  && <Redirect to={ `/${ routeName.auth }`}/>}  
      {redirectToPage === routeName.userReg  && <Redirect to={ `/${ routeName.userReg }`}/>} 
      {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />} 

      <Route exact path={ appUrl } component={ MainPage } />
      <Route exact path={ appUrl + routeName.auth } component={ Auth }/>
      <Route exact path={ appUrl + routeName.userReg } component={ RegUser }/>   
      <Route exact path={ appUrl + routeName.login } component={ LogedIn }/>  
    </HashRouter>
  );
}

export default MainApp; 
