import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { updateHeadName, returningUserData$ } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { FormAdd } from './Components/Structure/FormAdd.js';
import { UserReg } from './Components/Structure/RegUser.js';
import { runAppUrl } from './Components/Data/AppUrl.js';
import { HeadContents } from './Components/Structure/HeadContents.js';

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('');

  let [ isLogedIn, setIsLogedIn ] = useState(false);
  let [ inlogedFullUserName, setInlogedFullUserName ] = useState('');
  let [ gotoPage, updateGotoPage ] = useState('');
  let [ gotoMain ] = useState(true);    


  useEffect(() => {
    setAppUrl(runAppUrl());
    returningUserData$.subscribe((returningUserData) => {
      console.log(returningUserData);
      setInlogedFullUserName(returningUserData);
    });
    //if (gotoMain === true) return <Redirect to={ appUrl }/>;
  },[]);
  console.log(gotoMain);
  
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
