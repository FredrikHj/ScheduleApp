import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import './Components/CSS/Spinner.scss';
import './Components/CSS/Generall.css';
import Spinner from './Components/Data/Spinner.js';
import { HeadContents } from './Components/Structure/HeadContents.js';
import { axiosPost } from './Components/Data/Axios.js';


//import { LogInOut } from './LogInOut.js';

//import { runLogInOut } from './Components/Data/LogInOut.js';
import { LogedOut } from './LogedOut.js';
import axios from 'axios';
import { headName$, updateInlogedUserFullName, inlogedUserFullName$, updateLocalstorage, updateGotoPage } from './Components/GlobalProps.js';

import { log } from 'util';

import { runAppExtUrls } from './Components/Data/runAppUrls.js';

export let LogedIn = (props) => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ inlogedUser, updateInlogedUser ] = useState('');
    let [ appName, setAppName ] = useState('');   

    useEffect(() => {
        setAppUrl(runAppExtUrls());
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
        inlogedUserFullName$.subscribe((inlogedUserFullName) => {         
            updateInlogedUser(inlogedUserFullName);
        }); 
        setTimeout(() => {
            updateInlogedUserFullName();
        }, 1000);
    }, []);
    let runLogOut = (e) => {
        updateGotoPage('LogOut');
        // Gets the element
        let targetBtnId = e.target.id;     
        updateLocalstorage({
            responsType: null,
            logInMess: null, 
            incommingUserData: {
                loginName: null
            }
        });
        //axiosPost('', targetBtnId, '');
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Inloggad`}</title>
            </Helmet>

            <p className="logInOut__logedInUser">
                {(inlogedUser === '' ) 
                ? <>
                    Du loggas in ...
                    <div className="logInSpinnerMove"> <Spinner/></div>
                    </>
                : `Välkommen in ${ inlogedUser }`
                }
            </p>      
            <section className="logInOut__btnInContainer">
                <div className="btnContainer__btnLogOut">
                    <input type="submit" className="btnLogOut__input" onClick={ runLogOut } id="LogOut" value="" />
                    <Link to={ appUrl } className="btnContainer__inputHeadline" onClick={ runLogOut } id="LogOut">
                        <p className="btnHeadline__logout" id="LogOut">Logga Ut</p>
                    </Link>   
                </div>
                <div className="btnContainer__btnAdd">
                    <input type="submit" className="btnLogOut__input" onClick={ LogedOut.runLogInOut } id="add" value=""/>
                    <Link to={ `${ appUrl }/Add`} className="btnContainer__inputHeadline" onClick={ LogedOut.runLogInOut } id="add">
                        <p className="btnHeadline__add" id='add'>Lägg Till</p>
                    </Link>
                </div>
            </section>
            
        </>
    );

}
