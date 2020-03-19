import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, getLogStatus, gotoPage$ } from './Components/Storage.js';


import { FormAdd } from './Components/Structure/FormAdd.js';
import { UserReg } from './Components/Structure/RegUser.js';
import { localPubAppUrls } from './Components/Data/runAppUrls.js';
import { HeadContents } from './Components/Structure/HeadContents.js';
import { MainPage } from './MainPage.js';
import { Auth } from './Components/Data/Authorization';

updateHeadName('Årsklockan');

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('');
  let [ redirectToPage, updateRedirectToPage ] = useState('');

  useEffect(() => {
    gotoPage$.subscribe((gotoPage) => {
      updateRedirectToPage(gotoPage);
    });
    setAppUrl(localPubAppUrls());
    
  },[]);
  //console.log(getLogStatus());
  
  //console.log(getLogStatus().mess);
  //console.log(appUrl);
  
  console.log("MainApp -> redirectToPage", redirectToPage)
  return (
    <>
      <Router>
        
        {redirectToPage === 'Login' && <Redirect to='/Login' />}

        <Route exact path={ appUrl } component={ MainPage } />
        <Route exact path={ `${appUrl}Login`} component={ HeadContents }/>   
        <Route exact path={ `${appUrl}Add`} component={ FormAdd }/>
        <Route path={ `${appUrl}UserReg`}  component={ UserReg }/>
      </Router>
      
    </>
  );
} 

export default MainApp; 
