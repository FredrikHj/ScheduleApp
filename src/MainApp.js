/* ================================================== MainApp for the app ==================================================
   Imports module */
import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { HashRouter, Route, Redirect } from "react-router-dom";

// Import inportant components for the specific page
import { updateHeadName, gotoPage$ } from './Components/Storage.js';
import { routeName } from './Components/Data/RouteNames';
import { RegUser } from './Components/Structure/RegUser';
import { Auth } from './Components/Data/Authorization';
import { MainPage } from './MainPage.js';
import { LogedInPage } from './LogedInPage';

updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ redirectToPage, updateRedirectToPage ] = useState('');
  
  useEffect(() => {
    gotoPage$.subscribe((gotoPage) => {
      updateRedirectToPage(gotoPage);
    });
    
  },[redirectToPage]);

  return (
    <HashRouter basename='/'>
      {redirectToPage === routeName.mainPage && <Redirect to={ `/`} />} 
      {redirectToPage === routeName.auth  && <Redirect to={ `/${ routeName.auth }`}/>}  
      {redirectToPage === routeName.userReg  && <Redirect to={ `/${ routeName.userReg }`}/>} 
      {redirectToPage === routeName.login && <Redirect to={ `/${ routeName.login }`} />} 

      <Route exact path={ appUrl } component={ MainPage } />
      <Route exact path={ appUrl + routeName.auth } component={ Auth }/>
      <Route exact path={ appUrl + routeName.userReg } component={ RegUser }/>   
      <Route exact path={ appUrl + routeName.login } component={ LogedInPage }/>  
    </HashRouter>
  );
}

export default MainApp; 
