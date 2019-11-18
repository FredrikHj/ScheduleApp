import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { updateHeadName } from './Components/GlobalProps.js';

import { Headbar } from './Components/Structure/Headbar.js';
import { Information } from './Components/Structure/Information.js';
import { SQLTable } from './Components/Structure/SQLTable.js';
import { SearchFilter } from './Components/Structure/SearchFilter.js';

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
      {/* <section className="infoNav">
        <section className="infoNav__info">
          <Information/>
        </section>
        <nav className="infoNav__nav">
          <SearchFilter/>
        </nav>
      </section>    
      <hr id="hrLine"></hr>
      <main id="mainContainer">
        <SQLTable/>
      </main>
      <footer>
      </footer> */}
    </>
  );
}

export default MainApp;
