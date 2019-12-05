import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import { headName$ } from '../GlobalProps.js';

import { axiosPost, axiosGet } from '../Data/Axios.js';
import { runLogInOut } from '../Data/LogInOut.js';
import '../CSS/RegUser.css';

let countRegUser = 0;

export let UserReg = (props) => {
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');

    let [ userFullName, setUserFullName ] = useState('');
    let [ userName, setUserName  ] = useState('');
    let [ userPwd, setUserPWD ] = useState('');

    useEffect(() => {
        headName$.subscribe((headName) => {
            console.log(headName);
            setAppName(headName);
        });
    }, []);
    let setStrsType = (e) => {
        console.log('nyh');
        
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;
        console.log(inputStr);
        

        if (dataset.type === 'fullName') setUserFullName(inputStr);
        if (dataset.type === 'userName') setUserName(inputStr);
        if (dataset.type === 'userPwd') setUserPWD(inputStr);
    };

     let sendUserReg = (e) => {
        // Created a body for the added data
        let sqlBody = {
            fullName: userFullName,
            userName: userName,
            userPassWord: userPwd
        }
        console.log(sqlBody);
        
        axiosPost('userReg', sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody.splice(0, 1);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Registrera`}</title>
            </Helmet>
            <header>
                <section className="headbar__headContainer">
                    <p className="headContainer__headline">{ appName }</p>
                    <section className="headContainer__logInOut">

                        <p className="logInOut__logedInUser">{`Välkommen in ${(inlogedUser === '') ? '...' : inlogedUser }` }</p>       

                        <section className="logInOut__btnInContainer">
                            <div className="btnContainer__cancelReg">
                                <input type="submit" className="btnLogOut__cancelReg" onClick={ runLogInOut } id="cancelReg" value=""/>
                                <Link to={"/LogIn" }className="btnContainer__inputHeadline" onClick={ runLogInOut } id="cancelReg">
                                    <p className="btnHeadline__cancelReg" id='cancelReg'>Avbryt</p>
                                </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </header> 
            <section className="regUser__regContainer">
                <form>
                    <div>
                        <label id="userFullName">Ditt Namn</label>
                        <input type="text" id="userFullName" data-type="fullName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userName">Användarnamn</label>
                        <input type="text" id="userName" data-type="userName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userPwd">Lösenord</label>
                        <input type="text" id="userPwd" data-type="userPwd" onChange    ={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <input type="submit" className="regContainer__submitBtn" value="" onClick={ sendUserReg }/>
                        <p className="regContainer__headline" id='regBtn' onClick={ sendUserReg }>Registrera</p>
                    </div>
                </form>
            </section>
     
        </>  
    );
}