import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { updateHeadName } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { Information } from './Components/Structure/Information.js';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchBar } from './Components/Structure/SearchBar.js';

let MainApp = () => {
  let [ appName, setAppName ] = useState('WorkshoppSchema');  
  useEffect(() => {

    updateHeadName(appName);
  }, []);

  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ appName }</title>
      </Helmet>
        <Headbar/>
        <SearchBar/>
        <SQLTable/>
    </>
  );
}

export default MainApp;
